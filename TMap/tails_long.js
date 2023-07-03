var map = new AMap.Map('map', {
    zoom: 4.5,
    showLabel: false,
    viewMode: '3D',
	lang:'en',
    pitch: 15,
    center: [16.397428, 48.90923],
    mapStyle: 'amap://styles/dark',
});

var loca = new Loca.Container({
    map,
});

// 呼吸点
var scatter = new Loca.ScatterLayer({
    loca,
    zIndex: 20,
    opacity: 0.8,
    visible: true,
    zooms: [2, 22],
});

var pointGeo = new Loca.GeoJSONSource({
    // url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/pulselink-china-city-point.json',
    data:{
        "type": "FeatureCollection",
        "features": [
			//China-Japan 中国-日本
			//China-Thailand 中国-泰国
			//China-Russia 中国-俄罗斯
			//中国北京
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             116.41572,39.90987 
			//         ]
			//     }
			// },
			// //日本
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             140.59955 , 38.86013 
			//         ]
			//     }
			// },
			// //泰国
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             100.96013 , 16.44609 
			//         ]
			//     }
			// },

			// //Japan-South Korea 日本-韩国
			// //Japan-Singapore 日本 - 新加坡
			// //Japan-India 日本-印度
			// // 韩国
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             126.94845 , 37.59814 
			//         ]
			//     }
			// },
			// // 新加坡
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             103.81984 , 1.35208 
			//         ]
			//     }
			// },
			// // 印度
			// {
			//     "type": "Feature",
			//     "properties": {
			//         "type": 0,
			//         "ratio": 10,
			//         "lineWidthRatio": 10
			//     },
			//     "geometry": {
			//         "type": "Point",
			//         "coordinates": [
			//             78.96288 , 20.59368  
			//         ]
			//     }
			// },

			//Germany-France 德国-法国
			//Germany-Italy 德国-意大利
			//Germany-Japan 德国-日本
			//德国
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            10.45153 , 51.16569
			        ]
			    }
			},
			//法国
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            1.05894 , 47.52545
			        ]
			    }
			},
			//意大利
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            12.42220 , 42.02243
			        ]
			    }
			},
			//Spain-France 西班牙-法国
			//Spain-Italy 西班牙-意大利
			//Spain-Poland 西班牙-波兰
			// 波兰
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            18.69508 , 52.87840
			        ]
			    }
			},
			// Austria
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            16.3738, 48.2082
			        ]
			    }
			},
			// 荷兰
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 10,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "Point",
			        "coordinates": [
			            5.31062 , 52.12446
			        ]
			    }
			},
        ]}
});
scatter.setSource(pointGeo);
scatter.setStyle({
    unit: 'meter',
    size: [200000, 200000],
    borderWidth: 0,
    texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
    duration: 2000,
    animate: true,
});
loca.add(scatter);

// 弧线
var pulseLink = new Loca.PulseLinkLayer({
    // loca,
    zIndex: 10,
    opacity: 1,
    visible: true,
    zooms: [2, 22],
    depth: true,
});

var geo = new Loca.GeoJSONSource({
    data:{
        "type": "FeatureCollection",
        "features": [
			//Germany-France 德国-法国
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
					
			    },
			    "geometry": {
			        "type": "LineString",
			        "speed":100000,
			        "flowLength":100,
			        'color':'#ffd00033', // 透明百分之20
			        "coordinates": [
			            [
			                10.45153 , 51.16569
			            ],
						[
							1.05894 , 47.52545
						]
			        ]
			    }
			},
			//Germany-Italy 德国-意大利
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
			        "speed":100000,
			        "flowLength":100,
			        'color':'#ffd00033', // 透明百分之20
			        "coordinates": [
			            [
			                10.45153 , 51.16569
			            ],
						[
							12.42220 , 42.02243
						]
			        ]
			    }
			},
            //Germany-Netherland
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
			        "speed":100000,
			        "flowLength":10000,
			        'color':'#ffd00033', // 透明百分之20
			        "coordinates": [
			            [
                            10.45153 , 51.16569  
			            ],
						[
							5.31062 , 52.12446

						]
			        ]
			    }
			},

			//Germany-Poland 
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
			        "speed":100000,
			        "flowLength":100,
			        'color':'#ffd00033', // 透明百分之20
			        "coordinates": [
			            [
			                10.45153 , 51.16569
			            ],
						[
							18.69508 , 52.87840
						]
			        ]
			    }
			},

			//Germany-Austria 
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
			        "speed":100000,
			        "flowLength":100,
			        'color':'#ffd00033', // 透明百分之20
			        "coordinates": [
			            [
			                10.45153 , 51.16569
			            ],
						[
							16.3738, 48.2082
						]
			        ]
			    }
			},


        ]}
});
pulseLink.setSource(geo);
pulseLink.setStyle({
    unit: 'meter',
    dash: [40000, 0, 40000, 0],
    lineWidth: function () {
        return [20000, 50000];
    },
    height: function (index, feat) {
        return feat.distance / 3 + 10;
    },
    // altitude: 1000,
    smoothSteps: 39,
    speed: function (index, prop) {
        return prop.link.speed;
    },
    flowLength: function (index, prop) {
			console.log(index, prop);
        return 400000;
    },
    lineColors: function (index, feat) {
        return [feat.link.color];
    },
    maxHeightScale: 0.6, // 弧顶位置比例
    headColor: '#d90429',
    trailColor: 'rgb(255,228,0)',
});
loca.add(pulseLink);
loca.animate.start();


// 点击事件处理
var clickInfo = new AMap.Marker({
    anchor: 'bottom-center',
    position: [116.396923, 39.918203, 0],
});
clickInfo.setMap(map);
clickInfo.hide();
map.on("click", function (e) {
    var feat = pulseLink.queryFeature(e.pixel.toArray());

    if (feat) {
        clickInfo.show();
        var props = feat.properties;
        clickInfo.setPosition(feat.coordinates[1]);
        clickInfo.setContent(
            '<div style="text-align: center; height: 20px; width: 150px; color:#fff; font-size: 14px;">' +
            '速率: ' + feat.properties['ratio'] +
            '</div>'
        );
    } else {
        clickInfo.hide();
    }
});

var dat = new Loca.Dat();
dat.addLayer(pulseLink);

