// vue.config.js
module.exports = {
    // 选项...
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'CTF项目网站'
                return args
            })
    }
}
