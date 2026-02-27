@echo off
REM Monitor 1 (LEFT): 1536x864 at (0,0)
start "" msedge --new-window --window-position=0,0 --window-size=1536,864 http://localhost:4200/staff

REM Monitor 2 (RIGHT): starts at x=1536
start "" msedge --new-window --window-position=1536,0 --window-size=1920,1080 http://localhost:4200/customer

