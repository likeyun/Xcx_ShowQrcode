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

# 另一个Webview模式的页面

这个使用了Webview加载图片地址，仅限白名单域名加载，因此更加安全。

https://github.com/likeyun/xcx_webview_page
