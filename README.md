# Xcx_ShowQrcode
微信小程序显示二维码

# 如何使用

用于在微信小程序展示二维码，可以长按识别加微信。

# 生成小程序码

请前往小程序后台点击右上角的工具，生成小程序码，路径如下：

```
pages/showQrcode/showQrcode?url=图片地址&title=标题&desc=摘要
```
其中title和摘要可以不传。

<img src="https://wenda.mafengwo.net/img/36/f6/b90a34787c68d0805a526f09c4df8c7d.jpeg" />

# 效果展示

<img src="https://wos.58cdn.com.cn/pQnMlKjphQY/userpropose-b109fc76/1704871171956%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE20240110151911.png?token=N3ZTWGNXR0dBN0pHekFlUXpnTVcxUjdKZXdzPTpmPTE3MDQ4NzExNzE5NTblvq7kv6HmiKrlm74yMDI0MDExMDE1MTkxMS5wbmcmZT0xNzA0ODcxNDc0JnI9MjQ4NDAwMTY5" />

# 明文 URL Scheme

如果你要使用明文 URL Scheme，你得按照明文 URL Scheme的拼接参数方式拼接。

官方文档：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/url-scheme.html <br>

1、你需要开启明文路径，在MP平台->设置->隐私与安全->明文Scheme拉起此小程序声明后，可自行根据如下格式拼接appid和path等参数，作为明文 URL Scheme 链接。 <br><br>
2、按照以下规则拼接明文URLScheme <br>
```
weixin://dl/business/?appid=你的APPID&path=你配置的路径&query=如果有参数则在这里传递&env_version=ENV_VERSION
```
ENV_VERSION：要打开的小程序版本,正式版为release，体验版为trial，开发版为develop，仅在微信外打开时生效。注意：若不填写，则默认打开正式版小程序。

**真实示例：**

假设你配置的路径是：pages/wv/h5<br>
参数是：url=https://www.qq.com<br>
生成小程序码的完成路径和参数是：pages/wv/h5?url=https://www.qq.com<br><br>

那么明文URLScheme拼接如下：<br>

```
weixin://dl/business/?appid=你的APPID&path=pages/wv/h5&query=url=https://www.qq.com&env_version=release
```

# 另一个Webview模式的页面

这个使用了Webview加载图片地址，仅限白名单域名加载，因此更加安全。

https://github.com/likeyun/xcx_webview_page
