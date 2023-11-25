# Clash终端代理

与Clash端口号一致

~~~ cmd
#cmd开启代理
git config --global http.proxy 'http://127.0.0.1:7890'
git config --global https.proxy 'http://127.0.0.1:7890'
git config --global http.proxy 'socks5://127.0.0.1:7890'
git config --global https.proxy 'socks5://127.0.0.1:7890'

#取消http代理
git config --global --unset http.proxy
#取消https代理
git config --global --unset https.proxy

set HTTP_PROXY=http://127.0.0.1:7890
set HTTPS_PROXY=http://127.0.0.1:7890
#测试
curl cip.cc
curl -x http://127.0.0.1:7890 http://www.example.com
~~~