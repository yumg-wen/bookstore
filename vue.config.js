
module.exports={
  configureWebpack:{
    resolve: {
      // 別名設定
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'utils':'@/utils',
        'views': '@/views',
        
      }
    }
  },
 
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: true,
  css: {
    requireModuleExtension: true,
		// 是否使用css分離插件
		extract: true,
		// 開啟 CSS source maps?
		sourceMap: false,
		// css預設器配置項
    loaderOptions: {
      css: {
        
   },
      // postcss: { 
      //   plugins: [
      //     require("postcss-px2rem")({
            
      //       remUnit: 192///設計圖寬度/10
      //     //remUnit配置項的數值是多少呢？通常是根據設計圖來訂，原因為了便於開發。
			// 		//假設設計圖给的寬度是750，通常就會把remUnit設置為75，這樣寫樣式時，可以直接按照设计圖標註的寬高来1:1還原開發。
      //     })
      //   ]
      // }
    }
  }
}