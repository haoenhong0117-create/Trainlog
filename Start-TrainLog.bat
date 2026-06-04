@echo off
setlocal
cd /d "%~dp0"

set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if exist "%BUNDLED_NODE%" (
  "%BUNDLED_NODE%" "%~dp0start-server.js"
  pause
  exit /b
)

where node >nul 2>nul
if %errorlevel%==0 (
  node "%~dp0start-server.js"
  pause
  exit /b
)

echo TrainLog needs Node.js to run the local phone server.
echo Install Node.js or open index.html directly on this computer.
pause
