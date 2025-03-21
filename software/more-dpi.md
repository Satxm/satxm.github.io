# Gnome 更多缩放的支持

Debian / Ubuntu 对于一些高分辨率屏幕，系统默认只有100%和200%的选项，下面两行代码解决。

:::: code-group
```bash [wayland]
gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"
```

```bash [x11]
gsettings set org.gnome.mutter experimental-features "['x11-randr-fractional-scaling']"
```
::::

现在默认使用wayland，如果不知道该用哪个，那就都输入一下吧。

