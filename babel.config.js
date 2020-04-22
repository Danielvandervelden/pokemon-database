const presets = [
	[
		"@babel/preset-env",
		{
			"targets": {
				"edge": "17",
				"ie": "11",
				"firefox": "60",
				"chrome": "67",
				"safari": "11.1"
			},
			"useBuiltIns": "usage",
			"corejs": 3
		}
	]
];

const plugins = [
	[
		"@babel/plugin-transform-runtime",
		{
			"absoluteRuntime": false,
			"corejs": true,
			"helpers": true,
			"regenerator": true,
			"useESModules": false,
		}
	]
]

module.exports = {
	presets
}