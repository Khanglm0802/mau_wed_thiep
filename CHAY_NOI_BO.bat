@echo off
title MAU_WED POETIC ROMANCE EDITION - LOCAL SERVER
color 0D
echo ============================================================
echo   DANG KHOI CHAY SERVER NOI BO PHONG CACH NANG THO CHO MAU_WED
echo   CONG TRUY CAP RIENG BIET: http://localhost:8888
echo ============================================================
echo.
cd /d "%~dp0"
npm run dev
pause
