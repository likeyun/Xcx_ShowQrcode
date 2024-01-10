// 获取应用实例
const app = getApp()
Page({
	data: {
		getShowQrcode: true,
		errorMsg: '',
		descShow: false,
	},

	onLoad(e) {

		// 获取二维码
		const url = e.url;
		// 获取标题
		const title = e.title;
		// 获取摘要
		const desc = e.desc;
		// this指向问题
		const that = this;

		// 设置标题
		if(title) {
			wx.setNavigationBarTitle({
				title: title
			})
		}else {
			wx.setNavigationBarTitle({
				title: '请长按扫码识别'
			})
		}

		// 设置摘要
		if(desc) {
			that.setData({
				descShow: true,
				desc: desc
			})
		}
		
		// 渲染
		if(url) {

			// 有二维码
			that.setData({
				getShowQrcode: true,
				QrcodeUrl: url
			})
		}else {

			// 无二维码
			that.setData({
				getShowQrcode: false,
				errorInfo: '请传递二维码Url'
			})
		}
		

		// 显示的菜单
		wx.showShareMenu({
			withShareTicket: true,
			menus: ['shareAppMessage', 'shareTimeline']
		})
	}
})