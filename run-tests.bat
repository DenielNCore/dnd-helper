@echo off
echo Starting DnD Helper Playwright Tests...

echo.
echo Installing dependencies...
call npm install

echo.
echo Installing Playwright browsers...
call npx playwright install

echo.
echo Starting Vue.js development server...
start /B npm run dev

echo.
echo Waiting for server to start...
timeout /t 10 /nobreak > nul

echo.
echo Running tests...
call npx playwright test

echo.
echo Opening test report...
call npx playwright show-report

pause
