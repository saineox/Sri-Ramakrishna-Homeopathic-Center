@echo off
:: =====================================================================
:: Sri Ramakrishna Homeopathic Center - Build & Deploy Helper Script
:: =====================================================================
:: This script installs dependencies, builds the project, and copies
:: the compiled distribution files to the target deploy directory.
:: =====================================================================

:: Set the destination folder where the project is deployed.
:: Change this path if you need to copy the build to a different location.
set DEPLOY_DIR=.\project\dist

echo [1/3] Installing project dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] npm install failed. Please check the logs.
    pause
    exit /b %ERRORLEVEL%
)
echo [SUCCESS] Dependencies installed.
echo.

echo [2/3] Compiling production build...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] Project build failed. Please check for compilation errors.
    pause
    exit /b %ERRORLEVEL%
)
echo [SUCCESS] Production build created in .\dist directory.
echo.

echo [3/3] Deploying build destination files...
echo Target Directory: %DEPLOY_DIR%

:: Ensure the destination directory exists
if not exist "%DEPLOY_DIR%" (
    echo Creating target directory: %DEPLOY_DIR%
    mkdir "%DEPLOY_DIR%"
)

:: Copy files from .\dist to the target directory
:: /MIR mirrors the directory tree (deletes files in target that are no longer in source)
:: /R:3 retries 3 times on failure
:: /W:5 waits 5 seconds between retries
echo Mirroring .\dist to %DEPLOY_DIR%...
robocopy .\dist "%DEPLOY_DIR%" /MIR /R:3 /W:5

:: Robocopy exit codes 0-7 are success codes (indicating no changes or successful copying)
if %ERRORLEVEL% geq 8 (
    echo.
    echo [ERROR] File copy failed. Robocopy exit code: %ERRORLEVEL%
    pause
    exit /b %ERRORLEVEL%
)

echo.
echo =====================================================================
:: Final Success Announcement
echo [SUCCESS] Build and local deploy completed successfully!
echo Target files are ready in: %DEPLOY_DIR%
echo =====================================================================
echo.
pause
