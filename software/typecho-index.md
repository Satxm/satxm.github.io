# Typecho 链接去 index.php

刚用 Typecho 的用户肯定遇到过在打开页面地址结果在主域名后多了个 `index.php` 的问题吧，那么下面就来教你怎么解决这个问题吧。

## Typecho 后台开启伪静态

设置 → 永久链接设置，选择启用地址重写功能，并选择你喜好的文章路径 (url 形式) 。

### 配置服务器的 rewrite 规则

Apache (.htaccess)：

```vim
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]
</IfModule>
```

Nginx：
```nginx
server {
  ...

  if (!-e $request_filename) {
    rewrite ^(.*)$ /index.php$1 last;
  }

  ...
}
```
