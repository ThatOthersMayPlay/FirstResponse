$ErrorActionPreference = "Stop"
$base = "C:\Opencode-Projekte\FirstResponse\Bildererzeugung\OUTBOX"

$items = @(
  @{ Name = "Logo-Abstrakt-A-V1"; Prompt = "flat vector logo, heraldic shield emblem, stylized bamboo stalks with nodes inside the shield, minimalist geometric, solid colors, dark background, high contrast, organizational emblem style, no shading, no texture, clean silhouette, centered, icon" },
  @{ Name = "Logo-Abstrakt-A-V2"; Prompt = "flat vector logo, heraldic shield, abstract bamboo motif as vertical lines with nodes, minimalist, two colors, geometric, organizational emblem, no gradients, dark background, high contrast, centered, icon" },
  @{ Name = "Logo-Abstrakt-B-V1"; Prompt = "flat vector logo, heraldic shield, stylized game pawn chess piece integrated with bamboo stalk, minimalist geometric, organizational emblem style, solid colors, no shading, dark background, high contrast, centered, icon" },
  @{ Name = "Logo-Abstrakt-B-V2"; Prompt = "flat vector logo, heraldic shield, abstract play symbol triangle combined with bamboo, minimalist, two colors, geometric, organizational emblem, no gradients, dark background, high contrast, centered, icon" },
  @{ Name = "Logo-Abstrakt-C-V1"; Prompt = "flat vector logo, quartered heraldic shield, one quarter bamboo stalk, one quarter abstract game piece, minimalist geometric, organizational emblem style, solid colors, no shading, dark background, high contrast, centered, icon" },
  @{ Name = "Logo-Abstrakt-C-V2"; Prompt = "flat vector logo, heraldic shield emblem, stylized bamboo and a simple play button triangle, minimalist, two-color, geometric, organizational emblem, no gradients, dark background, high contrast, centered, icon" }
)

$neg = "painterly, photorealistic, 3d, shading, texture, gradient, detailed, complex, cartoon, cute, text, watermark, blurry, low quality, photo, people, landscape"

foreach ($it in $items) {
  $out = Join-Path $base ($it.Name + ".png")
  if (Test-Path $out) { Remove-Item $out -Force }
  Write-Output "=== RENDER $($it.Name) ==="
  $body = @{
    prompt = $it.Prompt
    negative_prompt = $neg
    width = 1024
    height = 1024
    num_inference_steps = 28
    sampler_name = "ddim"
    guidance_scale = 7.5
    num_outputs = 1
    output_format = "png"
    use_stable_diffusion_model = "sd-v1-5.safetensors"
    use_vae_model = "vae-ft-mse-840000-ema-pruned"
  } | ConvertTo-Json
  $r = Invoke-RestMethod -Uri "http://localhost:9000/render" -Method Post -ContentType "application/json" -Body $body
  $tid = $r.task
  Write-Output "task=$tid"
  for ($i=0; $i -lt 120; $i++) {
    try {
      $resp = Invoke-WebRequest -Uri "http://localhost:9000/image/stream/$tid" -UseBasicParsing -ErrorAction Stop
      $raw = $resp.Content
      $m = [regex]::Match($raw, '"data"\s*:\s*"data:image/[^;]+;base64,([^"]+)"')
      if ($m.Success) {
        $b64 = $m.Groups[1].Value
        [IO.File]::WriteAllBytes($out, [Convert]::FromBase64String($b64))
        $len = (Get-Item $out).Length
        Write-Output "saved attempt $i len=$len"
        if ($len -gt 1000) { break }
      }
    } catch { Write-Output "waiting $i : $($_.Exception.Message)" }
    Start-Sleep -Seconds 3
  }
  if (-not (Test-Path $out) -or (Get-Item $out).Length -lt 1000) { Write-Output "FAILED $($it.Name)" }
}
Write-Output "DONE ALL"