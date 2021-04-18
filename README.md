# vue-mpa-ttt

## description
A simple boilerplate of vue MPA(Multiple Pages Application) using vue cli 4.5


## version
@vue/cli 4.5.9
node v14.15.3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## deploy
### Apache

add extra sripts to .htaccess if more pages are added.
format:
RewriteRule ^ur_page_name\.html$ - [L]
RewriteRule ^ur_route_name_using_this_page /ur_page_name.html [L]

.htaccess
```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  RewriteRule ^cp\.html$ - [L]
  RewriteRule ^cp /cp.html [NC,QSA,L]
	 	


  RewriteRule ^index\.html$ - [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [NC,QSA,L]

</IfModule>
```

