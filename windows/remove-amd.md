# 删除右键菜单的 AMD 项目

<center>
<img src="/imgs/1671064733303.webp" width=250/>
</center>

## 查找 AMD 应用 ID

打开注册表编辑器，在地址栏里输入以下路径并回车。

```reg
HKEY_LOCAL_MACHINE\SOFTWARE\Classes\PackagedCom\Package\AdvancedMicroDevicesInc-2.AMDRadeonSoftware_10.22.20034.0_x64__0a9344xs7nr4m\Server
```

按照这个路径一直往下找，Package 名称在不同电脑和软件版本的情况下可能会有不通，以自己找到的为准。

![](/imgs/1671065063988.webp)

在这个 Server 里面，有的人是键值 0，有的是键值 1，点到这个键值下，我这边键值是 0。

![](/imgs/1671065176268.webp)

在这个下面的 SurrogateAppId 里的数据，也就是右侧大括号的数据就是我们需要的 ID，可以双击打开来复制。

## 屏蔽右键菜单

打开注册表编辑器，在地址栏里输入以下路径并回车。

```reg
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked
```

右键新建字符串值，值为刚刚的 AppID，我这里为 `{6767B3BC-8FF7-11EC-B909-0242AC120002}`，数值数据留空或写入 `AMD Software: Adrenalin Edition`

![](/imgs/1671065443124.webp)

这样菜单就不显示了，如果想要恢复展示，删掉这条字符串值即可。

原链接 https://www.iszy.cc/posts/remove-win11-amd-menu/