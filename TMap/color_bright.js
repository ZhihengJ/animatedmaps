var map = new AMap.Map('map', {
	zoom: 3.7,
	showLabel: false,
	viewMode: '3D',
	lang: 'en',
	pitch: 29,
	center: [92.780269, 21.955403],
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
	data: {
		"type": "FeatureCollection",
		"features": [
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
						116.41572, 39.90987
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
						140.59955, 38.86013
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
						100.96013, 16.44609
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
						126.94845, 37.59814
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
						78.96288, 20.59368
					]
				}
			},
			//India-Saudi Arabia 印度-沙特阿拉伯
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
						43.55207, 22.08197
					]
				}
			},
			//Vietnam
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
						106.229662, 17.923099
					]
				}
			},
			//Singapore
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
						103.851959, 1.290270
					]
				}
			},
			//Indonesia
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
						113.921327, -0.789275
					]
				}
			},


			// Philippines
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
						120.774017, 14.879721
					]
				}
			},
		]
	}
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
	data: {
		"type": "FeatureCollection",
		"features": [
			//中国-日本
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
							116.41572, 39.90987
						],
						[
							140.59955, 38.86013
						]
					]
				}
			},
			//中国-泰国
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
							116.41572, 39.90987
						],
						[
							100.96013, 16.44609
						]
					]
				}
			},

			//China - 韩国
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
							116.41572, 39.90987
						],
						[
							126.94845, 37.59814
						]
					]
				}
			},
			//China - 新加坡
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
							116.41572, 39.90987
						],
						[
							103.81984, 1.35208
						]
					]
				}
			},
			//China - 印度
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
							116.41572, 39.90987
						],
						[
							78.96288, 20.59368
						]
					]
				}
			},
			//China - Vitenam
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
							116.41572, 39.90987
						],
						[
							106.229662, 17.923099
						]
					]
				}
			},
			//China - Indonesia
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
							116.41572, 39.90987
						],
						[
							113.921327, -0.789275
						]
					]
				}
			},
			//China - Philippines
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
							116.41572, 39.90987
						],
						[
							120.774017, 14.879721
						]
					]
				}
			},


			//China - Saudi Arabia
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
							116.41572, 39.90987
						],
						[
							43.55207, 22.08197
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

