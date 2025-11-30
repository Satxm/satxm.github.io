# 命令行颜色代码

| 名称 | CMD前景色代码 | CMD背景色代码 | PowerShell | 颜色 |
| :------: | :------: | :------: | :------: | :------: |
| 黑 | 30 | 40 | Black | <p style="background: #0C0C0C;color: #0C0C0C">██████</p>|
| 亮红 | 91 | 101 | Red | <p style="background: #E74856;color: #E74856">██████</p> |
| 红 | 31 | 41 | DarkRed | <p style="background: #C50F1F;color: #C50F1F">██████</p> |
| 亮绿 | 92 | 102 | Green | <p style="background: #16C60C;color: #16C60C">██████</p> |
| 绿 | 32 | 42 | DarkGreen | <p style="background: #13A10E;color: #13A10E">██████</p> |
| 亮黄 | 93 | 103 | Yellow | <p style="background: #F9F1A5;color: #F9F1A5">██████</p> |
| 黄 | 33 | 43 | DarkYellow | <p style="background: #C19C00;color: #C19C00">██████</p> |
| 亮蓝 | 94 | 104 | Blue | <p style="background: #3B78FF;color: #3B78FF">██████</p> |
| 蓝 | 34 | 44 | DarkBlue | <p style="background: #0037DA;color: #0037DA">██████</p> |
| 亮品红 | 95 | 105 | Magenta | <p style="background: #B4009E;color: #B4009E">██████</p> |
| 品红 | 35 | 45 | DarkMagenta | <p style="background: #881798;color: #881798">██████</p> |
| 亮青 | 96 | 106 | Cyan | <p style="background: #61D6D6;color: #61D6D6">██████</p> |
| 青 | 36 | 46 | DarkCyan | <p style="background: #3A96DD;color: #3A96DD">██████</p> |
| 浅灰 | 37 | 47 | Gray | <p style="background: #CCCCCC;color: #CCCCCC">██████</p> |
| 灰 | 90 | 100 | DarkGray | <p style="background: #767676;color: #767676">██████</p> |
| 亮白 | 97 | 107 | White | <p style="background: #F2F2F2;color: #F2F2F2">██████</p> |

# 命令行输出

```cmd
for /f %a in ('echo prompt $E ^| cmd.exe') do @set "_esc=%a"
for %# in (30,91,31,92,32,93,33,94,34,95,35,96,36,37,90,97) do @echo %_esc%[%#m===Text with Color %#===%_esc%[0m
for %# in (40,101,41,102,42,103,43,104,44,105,45,106,46,47,100,107) do @echo %_esc%[%#m===Background with Color %#===%_esc%[0m
```

```powershell
$Color = @("Black","Red","DarkRed","Green","DarkGreen","Yellow","DarkYellow","Blue","DarkBlue","Magenta","DarkMagenta","Cyan","DarkCyan","Gray","DarkGray","White")
$Color | ForEach-Object { Write-Host -Fore $_ ===Text with Color $_=== }
$Color | ForEach-Object { Write-Host -Back $_ ===Background with Color $_=== }
```
