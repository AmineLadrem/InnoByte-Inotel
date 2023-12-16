@echo off

echo Running Node-RED...
cd Server
start /B node-red

cd ..

echo Running React-based Website...
cd web
start /B npm start
