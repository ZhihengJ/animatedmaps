
 

 


var allData = {
	citys: [{
			"name": "A",
			"value": [114.057868, 22.543099, 14],
			"symbolSize": 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		
		{
			name: "A",
			value: [121.473701, 31.410416, 14],
			symbolSize: 2,
			itemStyle: {
				normal: {
					"color": "#58B3CC"
				}
			}
		},
		
		{
			"name": "B",
			"value": [104.066541, 30.572269, 1],
			"symbolSize": 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		{
			"name": "B",
			"value": [102.71642, 25.05156, 14],
			"symbolSize": 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		
		// {
		// 	"name": "C",
		// 	"value": [106.50249 , 29.59763, 2],
		// 	"symbolSize": 2,
		// 	"itemStyle": {
		// 		"normal": {
		// 			"color": "#58B3CC"
		// 		}
		// 	}
		// },
		// {
		// 	"name": "C",
		// 	"value": [114.55260 , 38.04829, 2],
		// 	"symbolSize": 2,
		// 	"itemStyle": {
		// 		"normal": {
		// 			"color": "#58B3CC"
		// 		}
		// 	}
		// },
		{
			name: 'D',
			value: [123.42944, 41.835441, -58],
			symbolSize: 2,
			itemStyle: {
				normal: {
					color: '#58B3CC'
				}
			},
		},
		{
			"name": "D",
			"value": [87.41603, 43.47708, 14],
			symbolSize: 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		
		// {
		// 	"name": "E",
		// 	"value": [112.548879, 37.87059, 2],
		// 	"symbolSize": 2,
		// 	"itemStyle": {
		// 		"normal": {
		// 			'show': false,
		// 			"color": "#58B3CC"
		// 		}
		// 	}
		// },
		{
			"name": "E",
			"value": [102.71642, 25.05156, 14],
			symbolSize: 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		
		{
			"name": "F",
			"value": [115.858198, 28.682892, 2],
			"symbolSize": 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		
		{
			"name": "F",
			"value": [91.117212, 29.646923, -1],
			"symbolSize": 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		{
			name: 'G',
			value: [116.23128, 40.22077, -14],
			symbolSize: 2,
			itemStyle: {
				normal: {
					color: '#58B3CC'
				}
			},
		},
		{
			name: 'G',
			value: [101.76628, 36.6502, -14],
			symbolSize: 2,
			itemStyle: {
				normal: {
					color: '#58B3CC'
				}
			},
		},
		// {
		// 	"name": "H",
		// 	"value": [126.95717, 45.54774, 14],
		// 	symbolSize: 2,
		// 	"itemStyle": {
		// 		"normal": {
		// 			"color": "#58B3CC"
		// 		}
		// 	}
		// },
		// {
		// 	"name": "H",
		// 	"value": [108.27331, 22.78121, 14],
		// 	symbolSize: 2,
		// 	"itemStyle": {
		// 		"normal": {
		// 			"color": "#58B3CC"
		// 		}
		// 	}
		// },
		
		{
			"name": "I",
			"value": [120.21201, 30.2084, 14],
			symbolSize: 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		{
			"name": "I",
			"value": [114.307868, 23.543099, 14],
			symbolSize: 0.000001,
			"itemStyle": {
				"highlight": {
					"color": "#FFFF00"					
				}
			}
		},
		
		{
			"name": "J",
			"value": [117.27030 , 39.03916, 14],
			symbolSize: 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
		{
			"name": "J",
			"value": [113.36649 , 23.41817, 14],
			symbolSize: 2,
			"itemStyle": {
				"normal": {
					"color": "#58B3CC"
				}
			}
		},
	],
	moveLines: [
		/// AAAA
		{
			fromName: 'Shenzhen-A',
			toName: 'Shenzhen-A',
			coords: [
				[121.473701, 31.410416],
				[114.057868, 22.543099]
			],
		},
		//// BBBB
		{
			fromName: 'ChengDu-B',
			toName: 'Kunming',
			coords: [
				[104.066541, 30.572269],
				[102.71642, 25.05156]
			],
		},
		/// CCCC
		// {
		// 	fromName: '重庆',
		// 	toName: '河北',
		// 	coords: [
		// 		[106.50249 , 29.59763],
		// 		[114.55260 , 38.04829]
		// 	],
		// },
		/// DDDD
		{
			fromName: '乌鲁木齐',
			toName: '辽宁',
			coords: [
				[87.41603, 43.47708],
				[123.42944, 41.835441]
			],
		},
		// /// EEE
		// {
		// 	fromName: '云南',
		// 	toName: '山西',
		// 	coords: [
		// 		[102.71642, 25.05156],
		// 		[112.548879, 37.87059]
		// 	],
		// },
		/// FFF
		{
			fromName: '西藏',
			toName: '南昌',
			coords: [
				[91.117212, 29.646923],
				[115.858198, 28.682892]
			],
		},
		/// GGG
		{
			fromName: '北京',
			toName: '西宁',
			coords: [
				[116.23128, 40.22077],
				[101.76628, 36.6502]
			],
		},
		// /// HHH
		// {
		// 	fromName: '哈尔滨',
		// 	toName: '南宁',
		// 	coords: [
		// 		[126.95717, 45.54774],
		// 		[108.27331, 22.78121]
		// 	],
		// },
		/// IIII
		{
			fromName: '杭州',
			toName: '广州',
			coords: [
				[120.21201, 30.2084],
				[114.057868, 22.543099]
			],
		},
		/// JJJ
		{
			fromName: '北京1',
			toName: '广州',
			coords: [
				[117.27030 , 39.03916],
				[113.36649 , 23.41817]
			],
		},
	],
}
var colorList = [
	new echarts.graphic.LinearGradient(
		0,
		0,
		0,
		1,
		[{
				offset: 0,
				color: '#58B3CC',
			},
			{
				offset: 1,
				color: '#F58158',
			},
		],
		false
	),
	new echarts.graphic.LinearGradient(
		0,
		0,
		0,
		1,
		[{
				offset: 0,
				color: '#ff0000',
			},
			{
				offset: 1,
				color: '#ff0000',
			},
		],
		false
	),
	new echarts.graphic.LinearGradient(
		0,
		0,
		0,
		1,
		[{
				offset: 0,
				color: '#a1c4fd',
			},
			{
				offset: 1,
				color: 'red',
			},
		],
		false
	),
	new echarts.graphic.LinearGradient(
		0,
		0,
		0,
		1,
		[{
				offset: 0,
				color: '#667eea',
			},
			{
				offset: 1,
				color: 'blue',
			},
		],
		false
	),
	'#800080',
]
//动态数据
allData.moveLines.forEach((item) => {
	var fromName = item.fromName
	if (fromName == 'Shenzhen-A') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 100% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 110,
			symbolSize: 12,
		}
	} else if (fromName == 'ChengDu-B') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 60% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 30,
			symbolSize: 12,
		}
	// } else if (fromName == '重庆') {
	// 	item.lineStyle = {
	// 		width: 2,
	// 		color: 'hsl(181 60% 79% / 1)',
	// 	}
	// 	item.effect = {
	// 		constantSpeed: 25,
	// 		symbolSize: 12,
	// 	}
	} else if (fromName == '乌鲁木齐') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 20% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 13,
			symbolSize: 12,
		}
	// } else if (fromName == '云南') {
	// 	item.lineStyle = {
	// 		width: 2,
	// 		color: 'hsl(181 60% 79% / 1)',
	// 	}
	// 	item.effect = {
	// 		constantSpeed: 180,
	// 		symbolSize: 12,
	// 	}
	} else if (fromName == '西藏') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 20% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 13,
			symbolSize: 12,
		}
	} else if (fromName == '云南') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 40% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 75,
			symbolSize: 12,
		}
	// } else if (fromName == '哈尔滨') {
	// 	item.lineStyle = {
	// 		width: 2,
	// 		color: 'hsl(181 20% 79% / 1)',
	// 	}
	// 	item.effect = {
	// 		constantSpeed: 13,
	// 		symbolSize: 12,
	// 	}
	} else if (fromName == '杭州') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 80% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 30,
			symbolSize: 12,
		}
	} else if (fromName == '北京1') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 100% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 110,
			symbolSize: 12,
		}
	}
	else if (fromName == '北京') {
		item.lineStyle = {
			width: 2,
			color: 'hsl(181 40% 79% / 1)',
		}
		item.effect = {
			constantSpeed: 13,
			symbolSize: 12,
		}
	}
})
option8 = {
	title: {
		text: 'Air Traffic Flow Map',
		left: 'center',
		textStyle: {
			color: '#fff',
		},
	},
	legend: {
		show: false,
		orient: 'vertical',
		top: 'bottom',
		left: 'right',
		data: ['地点', '线路'],
		textStyle: {
			color: '#fff',
		},
	},
	geo: {
		map: 'china',
		show: true,
		center: [109.473701, 35.410416],
		zoom: 1.2,
		label: {
			emphasis: {
				show: false,
			},
		},
		roam: true,
		itemStyle: {
			normal: {
				areaColor: 'rgba(7,21,57,0.5)',
				borderColor: '#0177ff',
			},
			emphasis: {
				areaColor: '#071537', //鼠标指上市时的颜色
			},
		},
	},
	series: [{
			name: '地点',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke',
			},
			label: {
				normal: {
					show: true,
					position: 'bottom',
					formatter: '{b}',
					color: '#ff0000',
					fontSize: 20,
				},
				// emphasis: {
				// 	show: true,
				// 	position: 'top',
				// 	formatter: '{b}',
				// },
			},
			symbolSize: 15,
			showEffectOn: 'render',
			itemStyle: {
				normal: {
					color: '#46bee9',
				},
			},
			data: allData.citys,
		},
		{
			name: '线路',
			type: 'lines',
			coordinateSystem: 'geo',
			zlevel: 2,
			large: true,
			effect: {
				show: true,
				constantSpeed: 30,
				symbol: 'pin',
				// 点的颜色默认取  lineStyle颜色   可以定死  color
				symbolSize: 8,
				trailLength: 0,
			},
			lineStyle: {
				normal: {
					color: function(params) {
						console.log(params)
						var fromName = params.data.fromName
						 //else if (fromName == '成都') {
						// 	return colorList[1]
						// } else if (fromName == '重庆') {
						// 	return colorList[2]
						// } else if (fromName == '吉林') {
						// 	return colorList[3]
						// } else if (fromName == '黑龙江') {
						// 	return colorList[4]
						// } else if (fromName == '辽宁') {
						// 	return colorList[5]
						// }
						// var index = params.dataIndex
						// return colorList[index]
					},
					// color: new echarts.graphic.LinearGradient(
					//   0,
					//   0,
					//   0,
					//   1,
					//   [
					//     {
					//       offset: 0,
					//       color: '#58B3CC',
					//     },
					//     {
					//       offset: 1,
					//       color: '#F58158',
					//     },
					//   ],
					//   false
					// ),
					width: 3,
					opacity: 0.5,
					curveness: 0.1,
				},
			},
			data: allData.moveLines,
		},
	],
}

