param(
    [Parameter(Mandatory = $true)]
    [string]$Task,
    [string]$BlendFile = ""
)

$blender = "C:\Program Files\Blender Foundation\Blender 4.5\blender.exe"
$base = Split-Path -Parent $MyInvocation.MyCommand.Path
$scriptPath = Join-Path $base $Task

if (-not (Test-Path $blender)) { throw "Blender nicht gefunden: $blender" }
if (-not (Test-Path $scriptPath)) { throw "Skript nicht gefunden: $scriptPath" }

$args = @()
if ($BlendFile -ne "") {
    $blendPath = Join-Path $base $BlendFile
    if (-not (Test-Path $blendPath)) { throw "Blend-Datei nicht gefunden: $blendPath" }
    $args += $blendPath
}
$args += @("--background", "--python", $scriptPath)

Write-Host "Starte Blender: $blender $($args -join ' ')"
& $blender @args
$exit = $LASTEXITCODE
Write-Host "Blender beendet mit Exit-Code $exit"
exit $exit
