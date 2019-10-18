const appData = require('./mock/data.json')
const userinfo = appData.userinfo
const skill = appData.skill
const banner = appData.banner

module.exports = {
  devServer: {
    // open: true,
    // host: 'localhost',
    port: 8081,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8081',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/mock'
    //     }
    //   }
    // }
    before (app) {
      app.get('/userinfo', (req, res) => {
        res.json({
          errno: 0,
          data: userinfo
        })
      })

      app.get('/skill', (req, res) => {
        res.json({
          errno: 0,
          data: skill
        })
      })

      app.get('/banner', (req, res) => {
        res.json({
          errno: 0,
          data: banner
        })
      })
    }
  }
}
