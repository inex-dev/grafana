ECHO OFF
SET OUT_DIR=%cd%\out\
ECHO OUT directory: %OUT_DIR%
IF EXIST %OUT_DIR% (
	echo Remove OUT dir
	rmdir /Q /S %OUT_DIR%
)
mkdir %OUT_DIR%

mkdir %OUT_DIR%bin
copy bin\windows-amd64\*.* %OUT_DIR%bin

mkdir %OUT_DIR%conf
xcopy conf %OUT_DIR%conf /E

mkdir %OUT_DIR%public
xcopy public %OUT_DIR%public /E

mkdir %OUT_DIR%scripts
xcopy scripts %OUT_DIR%scripts /E

mkdir %OUT_DIR%tools
xcopy tools %OUT_DIR%tools /E

copy LICENSE %OUT_DIR%LICENSE
copy NOTICE.md %OUT_DIR%NOTICE.md
copy README.md %OUT_DIR%README.md



