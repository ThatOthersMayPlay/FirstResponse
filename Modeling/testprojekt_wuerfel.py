"""Testprojekt: Wuerfel - End-to-End-Test der MVP-Schnittstelle.

Erzeugt einen 1 m Wuerfel mit rotem Material, speichert einen .blend-Arbeitsstand,
rendert ein Preview-PNG und exportiert GLB + FBX nach OUTBOX/.
"""
import sys
from pathlib import Path

BASE = Path(__file__).resolve().parent
if str(BASE) not in sys.path:
    sys.path.insert(0, str(BASE))

import bpy
import blender_common as bc


def main():
    bc.ensure_dirs()
    bc.clear_scene()

    # Modell: Wuerfel 1 m
    bpy.ops.mesh.primitive_cube_add(size=1.0, location=(0.0, 0.0, 0.0))
    obj = bpy.context.active_object
    obj.name = "TestWuerfel"
    mat = bc.new_material("Rot", (0.85, 0.15, 0.15, 1.0))
    obj.data.materials.append(mat)

    # Kamera + Licht fuer Render
    bpy.ops.object.light_add(type="SUN", location=(5.0, 5.0, 5.0))
    bpy.ops.object.camera_add(location=(3.0, -3.0, 2.0))
    cam = bpy.context.active_object
    bpy.context.scene.camera = cam
    # Kamera auf Objekt ausrichten
    bpy.ops.object.constraint_add(type="TRACK_TO")
    tr = cam.constraints.get("Track To")
    if tr is not None:
        tr.target = obj

    s = bc.stamp()
    base_name = "testprojekt_wuerfel"

    # Arbeitsstand (.blend) in Modeling/
    blend_path = BASE / (base_name + ".blend")
    bc.save_blend(blend_path)

    # Exporte nach OUTBOX/
    glb_path = bc.OUTBOX / ("{}-Ergebnis-{}.glb".format(s, base_name))
    fbx_path = bc.OUTBOX / ("{}-Ergebnis-{}.fbx".format(s, base_name))
    bc.export_gltf(glb_path)
    bc.export_fbx(fbx_path)

    # Render-Preview
    png_path = bc.OUTBOX / ("{}-Render-{}.png".format(s, base_name))
    bc.render_preview(png_path)

    # Bericht
    report_path = bc.OUTBOX / ("{}-Bericht-{}.md".format(s, base_name))
    bc.write_report(report_path, "Testprojekt Wuerfel - MVP-Pipeline", [
        "- Aufgabe: End-to-End-Test der MVP-Schnittstelle",
        "- Objekt: Wuerfel 1 m, Material Rot (Principled BSDF)",
        "- Arbeitsdatei: {}".format(blend_path.name),
        "- Export GLB: {}".format(glb_path.name),
        "- Export FBX: {}".format(fbx_path.name),
        "- Render: {}".format(png_path.name),
        "- Blender: 4.5.2 LTS (headless)",
    ])

    print("FERTIG:", base_name)


if __name__ == "__main__":
    main()
