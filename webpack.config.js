const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const path = require("path");

// const ImageminWebp = require("imagemin-webp");
// const ImageminSvgo = require("imagemin-svgo");

const MODE = "production";
const enabledSourceMap = MODE === "development";

module.exports = {
	mode: MODE,
	entry: "./src/js/index.js",
	output: {
		path: `${__dirname}/dist`,
		filename: "js/main.js",
		// assetModuleFilename: "imgs/[name][ext]",
		assetModuleFilename: "imgs/[name][ext][query]",
	},
	performance: {
		hints: process.env.NODE_ENV === "production" ? "warning" : false,
		maxAssetSize: 700 * 1024,
		maxEntrypointSize: 700 * 1024,
	},
	module: {
		rules: [
			{
				test: /\.scss/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: "css-loader",
						options: {
							url: true,
							sourceMap: enabledSourceMap,
							importLoaders: 3,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["autoprefixer", { grid: true }]],
							},
						},
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: enabledSourceMap,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "imgs/[name][ext][query]",
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/style.css",
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "src/images", to: "imgs" }],
		}),

		new ImageMinimizerPlugin({
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify,
				options: {
					plugins: [
						["gifsicle", { interlaced: true }],
						["jpegtran", { progressive: true }],
						["optipng", { optimizationLevel: 5 }],
						[
							"svgo",
							{
								plugins: [
									{
										name: "preset-default",
										params: {
											overrides: {
												removeViewBox: false,
												addAttributesToSVGElement: {
													params: {
														attributes: [
															{
																xmlns: "http://www.w3.org/2000/svg",
															},
														],
													},
												},
											},
										},
									},
								],
							},
						],
					],
				},
			},
			generator: [
				{
					type: "asset",
					implementation: ImageMinimizerPlugin.imageminGenerate,
					options: {
						plugins: [["imagemin-webp", { quality: 75 }]],
					},
				},
			],
		}),
		// new ImageMinimizerPlugin({
		// 	minimizer: [
		// 		{
		// 			//.webp 形式の画像を生成する場合、imageminGenerate がないと生成されない
		// 			implementation: ImageMinimizerPlugin.imageminGenerate,
		// 			options: {
		// 				plugins: [
		// 					["imagemin-webp", { lossless: false, quality: 60 }],
		// 					"imagemin-svgo",
		// 				],
		// 			},
		// 		},
		// 		{
		// 			implementation: ImageMinimizerPlugin.imageminMinify,
		// 			options: {
		// 				plugins: [
		// 					["gifsicle", { interlaced: true }],
		// 					["jpegtran", { progressive: true }],
		// 					["optipng", { optimizationLevel: 5 }],
		// 					[
		// 						"svgo",
		// 						{
		// 							plugins: [
		// 								{
		// 									name: "preset-default",
		// 									params: {
		// 										overrides: {
		// 											removeViewBox: false,
		// 											addAttributesToSVGElement: {
		// 												params: {
		// 													attributes: [
		// 														{
		// 															xmlns: "http://www.w3.org/2000/svg",
		// 														},
		// 													],
		// 												},
		// 											},
		// 										},
		// 									},
		// 								},
		// 							],
		// 						},
		// 					],
		// 				],
		// 			},
		// 		},
		// 	],
		// }),
	],
	// devServer: {
	// 	static: "dist",
	// 	open: true,
	// },

	//wordpressにdevserverはうまく使えなかったので保留
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		hot: true,
		host: "0.0.0.0",
		port: 8080, // 省略可能、デフォルトは8080です
		allowedHosts: "all",
		open: true,
		proxy: {
			"/": {
				target: "http://webpack-copy.local/", // WordPressが稼働しているポートに変更してください
				changeOrigin: true,
			},
		},
		// proxy: {
		// 	"**": {
		// 		// '**'は全てのパスを指します。
		// 		target: "http://webpack-copy.local/", // ここはあなたのローカルのWordPressサイトURLに変更してください。
		// 		changeOrigin: true,
		// 	},
		// },
	},
	// devServer: {
	// 	static: {
	// 		directory: "dist",
	// 	},
	// 	// proxy: {
	// 	// 	"*": "http://webpack-copy.local",
	// 	// },
	// 	// open: "http://webpack-copy.local",
	// 	open: true,
	// 	host: "0.0.0.0",
	// 	allowedHosts: "all",
	// },

	target: ["web", "es5"],
	devtool: "source-map", // ソースマップを生成
};
