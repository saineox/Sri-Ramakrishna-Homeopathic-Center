@echo off
title Sri Ramakrishna Homeopathic Center Manager
color 0A

:menu
cls
echo ============================================================
echo   Sri Ramakrishna Homeopathic Center - Admin Console
echo ============================================================
echo.
echo   [1] Start Development Server (Run Project)
echo   [2] Install Project Dependencies
echo   [3] Build & Deploy Project Assets
echo   [4] Stop Development Server
echo   [5] Exit Console
echo.
echo ============================================================
set /p choice="Please select an option (1-5): "

if "%choice%"=="1" goto start_server
if "%choice%"=="2" goto install_deps
if "%choice%"=="3" goto build_project
if "%choice%"=="4" goto stop_server
if "%choice%"=="5" goto exit_script

echo.
echo [INVALID CHOICE] Please select a number between 1 and 5.
timeout /t 2 >nul
goto menu

:start_server
echo.
echo Starting development server in a new window...
:: Starts Vite server in a separate window titled "Vite Dev Server"
start "Vite Dev Server" cmd /c "npm run dev"
echo [SUCCESS] Server launch triggered. Check the separate window for logs.
echo.
pause
goto menu

:install_deps
echo.
echo Installing project dependencies (npm install)...
call npm install
if %ERRORLEVEL% neq 0 (
    echo [ERROR] npm install failed.
) else (
    echo [SUCCESS] Dependencies installed successfully.
)
echo.
pause
goto menu

:build_project
echo.
echo Building the project (npm run build)...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Project compilation failed.
) else (
    echo [SUCCESS] Build successfully compiled in .\dist folder.
    :: Optional: copy built files to project subdirectory
    if exist ".\project" (
        echo Mirroring assets to .\project\dist...
        if not exist ".\project\dist" mkdir ".\project\dist"
        robocopy .\dist ".\project\dist" /MIR /R:3 /W:5 >nul
        echo [SUCCESS] Assets mirrored to .\project\dist successfully.
    )
)
echo.
pause
goto menu

:stop_server
echo.
echo Stopping development server...
:: Terminate the CMD window and all child processes with the matching window title
taskkill /FI "WINDOWTITLE eq Vite Dev Server*" /T /F >nul 2>&1
if %ERRORLEVEL% eq 0 (
    echo [SUCCESS] Development server stopped successfully.
) else (
    echo [INFO] No running dev server found to stop.
)
echo.
pause
goto menu

:exit_script
echo.
echo Exiting manager console. Goodbye!
timeout /t 2 >nul
exit
