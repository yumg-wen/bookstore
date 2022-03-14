
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
  
}