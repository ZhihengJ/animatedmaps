var map = new AMap.Map('map', {
    zoom: 3.1,
    showLabel: false,
    viewMode: '3D',
	lang:'en',
    pitch: 8,
    center: [104.780269, 34.955403],//[50.780269, 29.955403],
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
			            116.41572,39.90987 
			        ]
			    }
			},
			//日本
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
			            140.59955 , 38.86013 
			        ]
			    }
			},
			//泰国
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
						45.45153 , 47.16569
			        ]
			    }
			},

			//Japan-South Korea 日本-韩国
			//Japan-Singapore 日本 - 新加坡
			//Japan-India 日本-印度
			// 韩国
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
			            126.94845 , 37.59814 
			        ]
			    }
			},

			// 印度
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
			            78.96288 , 20.59368  
			        ]
			    }
			},
			//India-United Arab Emirates 印度-阿拉伯
			//India-China 印度-中国
			//India-Saudi Arabia 印度-沙特阿拉伯
			//阿拉伯
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
			            55.30883 , 25.26952
			        ]
			    }
			},
			//沙特阿拉伯
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
			            43.55207 , 22.08197
			        ]
			    }
			},
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
			//test
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
						10.45153 , 47.16569  
			        ]
			    }
			},
			//test1
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
						45.45153 , 55.16569
			        ]
			    }
			},


			// test
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
                            10.45153 , 47.16569  
			        ]
			    }
			},
			//Finland-Germany 芬兰-德国
			//Finland-Sweden 芬兰-瑞典
			//Finland-Netherlands 芬兰-荷兰
			// 芬兰
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
			            25.88485 , 68.09351
			        ]
			    }
			},
			// test
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
						45.45153 , 51.16569
			        ]
			    }
			},
			// test
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
						10.45153 , 55.16569  
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
    // url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json',
    data:{
        "type": "FeatureCollection",
        "features": [

            //Germany-Spain 德国-test
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					"speed": 1900000,
					"flowLength": 100,
					'color': 'rgba(255, 222, 77, 0.6)',
			        "coordinates": [
			            [
                            10.45153 , 51.16569  
			            ],
						[
							45.45153 , 51.16569
						]
			        ]
			    }
			},            
            //Germany-Spain 德国-test
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					"speed": 1900000,
					"flowLength": 100,
					'color': 'rgb(255,255,150)',
			        "coordinates": [
			            [
                            10.45153 , 55.16569  
			            ],
						[
							45.45153 , 55.16569
						]
			        ]
			    }
			},            
            //Germany-Spain 德国-test
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					"speed": 1900000,
					"flowLength": 100,
					'color': 'rgba(255, 241, 179, 0.4)', // 透明百分之40
			        "coordinates": [
			            [
                            10.45153 , 47.16569  
			            ],
						[
							45.45153 , 47.16569
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
		return [30000, 80000];
	},
	height: function (index, feat) {
		return feat.distance / 3 + 10;
	},
	// altitude: 1000,
	smoothSteps: 40,
	speed: function (index, prop) {
		return prop.link.speed;
	},
	flowLength: function (index, prop) {
		console.log(index, prop);
		return 250000;
	},
	lineColors: function (index, feat) {
		return [feat.link.color];
	},
	maxHeightScale: 0.3, // 弧顶位置比例
	headColor: 'rgb(255, 114, 46)',
	trailColor: 'rgba(255, 246, 204, 1)',
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

