# CMD 获取返回值第一个结果

## 方法一

标签循环有效,无标签会终止代码注意

```cmd
call :1

:1
for /f "tokens=1" %%f in ('dir /b') do set m=%%f && goto:eof
goto:eof
```

## 方法二

```cmd
set "m="
for /f "tokens=1" %%f in ('dir /b') do if not defined m set m=%%f
```
