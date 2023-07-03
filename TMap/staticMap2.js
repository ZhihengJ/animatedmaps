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
			//Belgium
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
			            4.469936, 50.503887
			        ]
			    }
			},
			//Spain
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
			            -3.32174 , 39.49891
			        ]
			    }
			},

			// UK
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
						-3.435973, 55.378051
			        ]
			    }
			},
			//Germany-Japan 德国-日本
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
        ]}
});
scatter.setSource(pointGeo);
scatter.setStyle({
	unit: 'meter',
	size: [200000, 200000],
	borderWidth: 0,
	texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
	duration: 0,
	animate: false,
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
	data: {
		"type": "FeatureCollection",
		"features": [
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
					'width': [80000, 200000],


			        "speed":100000,
			        "flowLength":100,
					'color': 'rgb(255,255,150)',
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
					'width': [80000, 200000],


			        "speed":100000,
			        "flowLength":100,
					'color': 'rgb(255,255,150)',
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
			//Germany-Belgium
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					'width': [40000, 100000],

			        "speed":80000,
			        "flowLength":10000,
					'color': 'rgb(255,255,150)',
			        "coordinates": [
			            [
                            10.45153 , 51.16569  
			            ],
						[
							4.469936, 50.503887
						]
			        ]
			    }
			},
            //Germany-Spain 德国-西班牙
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					'width': [40000, 100000],

			        "speed":80000,
			        "flowLength":10000,
					'color': 'rgb(255,255,150)',
			        "coordinates": [
			            [
                            10.45153 , 51.16569  
			            ],
						[
							-3.32174 , 39.49891
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
					'width': [80000, 200000],


			        "speed":100000,
			        "flowLength":100,
					'color': 'rgb(255,255,150)',
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
			//Germany-UK
			{
			    "type": "Feature",
			    "properties": {
			        "type": 0,
			        "ratio": 0.55,
			        "lineWidthRatio": 10
			    },
			    "geometry": {
			        "type": "LineString",
					'width': [40000, 100000],
			        "speed":80000,
			        "flowLength":10000,
					'color': 'rgb(255,255,150)',
			        "coordinates": [
			            [
			                10.45153 , 51.16569
			            ],
						[
							-3.435973, 55.378051
						]
			        ]
			    }
			},





		]
	}
});
pulseLink.setSource(geo);
pulseLink.setStyle({
	unit: 'meter',
	dash: [40000, 0, 40000, 0],
	lineWidth: function (index, feat) {
		console.log(index, feat);
		return feat.link.width;
	},
	height: function (index, feat) {
		return feat.distance / 3 + 10;
	},
	// altitude: 1000,
	smoothSteps: 30,
	speed: function (index, prop) {
		console.log(index, prop);
		return prop.link.speed;
	},
	flowLength: 0,
	lineColors: function (index, feat) {
		return [feat.link.color];
	},
	maxHeightScale: 0.3, // 弧顶位置比例
	headColor: '#d90429',
	trailColor: 'rgb(255,228,105)',
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

