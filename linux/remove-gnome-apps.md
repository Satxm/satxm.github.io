# 删除 Gnome 应用

### 1、Gnome 游戏

```bash
sudo apt purge gnome-games -y
sudo apt autopurge
```

|应用|包名|
|:-------:|-------|
|GNOME 游戏（总称）|gnome-games|
|AisleRiot 接龙游戏|aisleriot|
|连珠消球|five-or-more|
|四子连线|four-in-a-row|
|2048|gnome-2048|
|国际象棋|gnome-chess|
|华容道|gnome-klotski|
|对对碰|gnome-mahjongg|
|地图|gnome-maps|
|扫雷|gnome-mines|
|贪食蛇|gnome-nibbles|
|机器人|gnome-robots|
|数独|gnome-sudoku|
|推盘|gnome-taquin|
|四邻|gnome-tetravex|
|数壹|hitori|
|黑白棋|iagno|
|关灯|lightsoff|
|俄罗斯方块|quadrapassel|
|消色块|swell-foop|
|掷骰子|tali|

### 2、按需卸载

```bash
sudo apt purge cheese evolution firefox* gnome-calculator gnome-calendar gnome-clocks gnome-contacts gnome-logs gnome-maps gnome-music gnome-software gnome-sound-recorder gnome-todo gnome-weather goldendict libreoffice* rhythmbox seahorse shotwell simple-scan synaptic totem transmission-gtk yelp zutty -y
```

以下内容看自己需求进行卸载

|应用|包名|
|:-------:|-------|
|茄子|cheese|
|Evolution（邮件）|evolution|
|Firefox（*可选*）|firefox*|
|计算器|gnome-calculator|
|日历|gnome-calendar|
|时钟|gnome-clocks|
|联系人|gnome-contacts|
|文档|gnome-documents|
|日志|gnome-logs|
|地图|gnome-maps|
|音乐|gnome-music|
|软件|gnome-software|
|录音机|gnome-sound-recorder|
|Endeavour (ToDo)|gnome-todo|
|天气|gnome-weather|
|GoldenDict（词典）|goldendict|
|LibreOffice（*可选*）|libreoffice*|
|Rhythmbox（音乐）|rhythmbox|
|密码和密钥|seahorse|
|Shotwell（照片管理）|shotwell|
|文档扫描仪|simple-scan|
|新立得软件包管理（*可选*）|synaptic|
|视频|totem|
|Transmission|transmission-gtk|
|帮助（*可选*）|yelp|
|Zutty|zutty|
