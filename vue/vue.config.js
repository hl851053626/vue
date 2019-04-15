const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}
module.exports = {
	lintOnSave: true,
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('@assets', resolve('src/assets'))
		// 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
	},
	devServer: {
		port: 8080,
		proxy: {
			'/API': {
				// target: 'http://xinspa.csmc-cloud.com',
				target: 'http://127.0.0.1:3000',
				changeOrigin: true,
				pathRewrite: {
					'^/API': '/API',
				},
				secure: false,
			},
		},
		hot: true
	},
};