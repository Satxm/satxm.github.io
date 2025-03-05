# Typecho 链接去 index.php

刚用 Typecho 的用户肯定遇到过在打开页面地址结果在主域名后多了个 `index.php` 的问题吧，那么下面就来教你怎么解决这个问题吧。

### 1、配置服务器的rewrite规则

Linux Apache 环境 (.htaccess)：

```vim
<IfModule mod_rewrite.c> 
RewriteEngine On
# 下面是在根目录，文件夹要修改路径
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.php/$1 [L]
</IfModule>
```

Linux Nginx 环境：
```nginx
location / {
  index index.html index.php;
  if (-f $request_filename/index.html) {
    rewrite (.*) $1/index.html break;
  }
  if (-f $request_filename/index.php) {
    rewrite (.*) $1/index.php;
  }
  if (!-f $request_filename) {
    rewrite (.*) /index.php;
  }
}
```

Windows IIS 伪静态 (httpd.ini)：

```ini
[ISAPI_Rewrite]
# 3600 = 1 hour
CacheClockRate 3600
RepeatLimit 32
# 中文tag解决
RewriteRule /tag/(.*) /index\.php\?tag=$1
# sitemapxml
RewriteRule /sitemap.xml /sitemap.xml [L]
RewriteRule /favicon.ico /favicon.ico [L]
# 内容页
RewriteRule /(.*).html /index.php/$1.html [L]
# 评论
RewriteRule /(.*)/comment /index.php/$1/comment [L]
# 分类页
RewriteRule /category/(.*) /index.php/category/$1 [L]
# 分页
RewriteRule /page/(.*) /index.php/page/$1 [L]
# 搜索页
RewriteRule /search/(.*) /index.php/search/$1 [L]
# feed
RewriteRule /feed/(.*) /index.php/feed/$1 [L]
# 日期归档
RewriteRule /2(.*) /index.php/2$1 [L]
# 上传图片等
RewriteRule /action(.*) /index.php/action$1 [L]
```

nginx 配置

```nginx
server {
  listen      80;
  server_name   yourdomain.com;
  root      /home/yourdomain/www/;
  index       index.html index.htm index.php;

  if (!-e $request_filename) {
    rewrite ^(.*)$ /index.php$1 last;
  }

  location ~ .*\.php(\/.*)*$ {
    include fastcgi.conf;
    fastcgi_pass  127.0.0.1:9000;
  }

  access_log logs/yourdomain.log combined;
}
```

apache 配置

```vim
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.php [L,E=PATH_INFO:$1]
</IfModule>
```

假如虚拟主机是apache的，在网站根目录找到.htaccess，有的没有可能是设置了隐藏文件，显示隐藏文件就能看到了。

然后编辑.htaccess文件，加入上文中对应的apache配置代码保存。

### 2、后台配置typecho伪静态

后台 -> 设置 -> 永久链接

在“是否使用地址重写功能”选择“启用”，开启伪静态，并设置你喜好的url形式。