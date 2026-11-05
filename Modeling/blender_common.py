"""Gemeinsame Helfer fuer die MVP-Schnittstelle (Blender 4.5).

Wird von Aufgaben-Skripten importiert. Basisordner wird aus __file__ abgeleitet,
damit die Skripte unabhaengig vom Aufrufpfad funktionieren.
"""
import bpy
import sys
from pathlib import Path
from datetime import datetime

BASE_DIR = Path(__file__).resolve().parent
INBOX = BASE_DIR / "INBOX"
OUTBOX = BASE_DIR / "OUTBOX"
ARCHIV = BASE_DIR / "ARCHIV"


def ensure_dirs():
    for d in (INBOX, OUTBOX, ARCHIV):
        d.mkdir(parents=True, exist_ok=True)


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for collection in (bpy.data.meshes, bpy.data.materials, bpy.data.textures,
                       bpy.data.images, bpy.data.lights, bpy.data.cameras):
        for block in list(collection):
            if getattr(block, "users", 0) == 0:
                collection.remove(block)


def new_material(name, color=(0.8, 0.2, 0.2, 1.0)):
    mat = bpy.data.materials.new(name=name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    if bsdf is not None:
        bsdf.inputs["Base Color"].default_value = color
    return mat


def _ensure_parent(path):
    Path(path).parent.mkdir(parents=True, exist_ok=True)


def export_gltf(out_path, apply_modifiers=True):
    _ensure_parent(out_path)
    bpy.ops.export_scene.gltf(
        filepath=str(out_path),
        export_format="GLB",
        apply_modifiers=apply_modifiers,
        export_materials="EXPORT",
    )


def export_fbx(out_path):
    _ensure_parent(out_path)
    bpy.ops.export_scene.fbx(
        filepath=str(out_path),
        apply_modifiers=True,
        path_mode="AUTO",
    )


def save_blend(out_path):
    _ensure_parent(out_path)
    bpy.ops.wm.save_as_mainfile(filepath=str(out_path))


def render_preview(out_path, resolution=(512, 512)):
    _ensure_parent(out_path)
    scene = bpy.context.scene
    try:
        scene.render.engine = "BLENDER_EEVEE_NEXT"
    except Exception:
        pass
    scene.render.resolution_x = resolution[0]
    scene.render.resolution_y = resolution[1]
    scene.render.filepath = str(out_path)
    scene.render.image_settings.file_format = "PNG"
    bpy.ops.render.render(write_still=True)


def write_report(out_path, title, lines):
    _ensure_parent(out_path)
    stamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    content = "# {}\n\n_Erstellt: {}_\n\n".format(title, stamp)
    content += "\n".join(lines) + "\n"
    Path(out_path).write_text(content, encoding="utf-8")


def stamp():
    return datetime.now().strftime("%Y-%m-%d")
