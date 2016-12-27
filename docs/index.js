/**
** author:YorkChan
** date:2016-12-18
**/
var bankList = [
	{
		name:'我们一年的工作',
		title:'我们一年的工作',
		content: '12个月 活动上线数：10，我们的产出：生活缴费活动、0元看电影活动、一账通转盘引流活动、理财贴息活动等 ',
		chartOption: option = {
		    title: {
		        text: '2016年我们完成的事情',
		        textStyle: {
		        	color: '#1ccece'
		        }
		    },
		    tooltip : {
		        trigger: 'axis'
		    },
		    legend: {
		        data:['运营活动开发','框架平台研发','技术知识分享','项目总量']
		    },
		    xAxis : [
		        {
		            type : 'category',
		            splitLine:{show: false},
		            boundaryGap : false,
		            data : ['Q1','Q2','Q3','Q4'],
		            axisLabel: { show: true, textStyle: { color: '#1ccece' } } 
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            splitLine:{show: false},
		            axisLabel: { show: true, textStyle: { color: '#1ccece' } } 
		        }
		    ],
		    series : [
		        {
		            name:'运营活动开发',
		            type:'line',
		            stack: '总量', 
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#1DDF65'  
                            }  
                        }  
                    },  
		            data:[8, 12, 15, 17]
		        },
		        {
		            name:'框架平台研发',
		            type:'line',
		            stack: '总量',
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#20D495'  
                            }  
                        }  
                    },  
		            data:[0, 1, 3, 4]
		        },
		        {
		            name:'技术知识分享',
		            type:'line',
		            stack: '总量',
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#17D7C8'  
                            }  
                        }  
                    },  
		            data:[3, 4, 6, 8]
		        },
		        {
		            name:'项目总量',
		            type:'line',
		            stack: '总量',
                    itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#DDD'  
                            }  
                        }  
                    },  
		            data:[11, 17, 24, 29]
		        }
		    ]
		},
		imglist:[]
	},
	{
		name:'2016年开发上线的运营活动',
		title:'2016年开发上线的运营活动',
		content: '2016年我们完成17 家银行、58个运营活动项目；上线次数排名前三的的银行是：紫金（17次）、上海（11次）、威海（4次) 和广州（4次）。',
		chartOption:{
			title: {
				text: '2016年H5活动上线银行图',
		        textStyle: {
		            color: '#1ccece'
		        }
			},
			tooltip:{},
			legend: {
		        orient: 'vertical',
		        y: 'bottom',
		        x:'left',
		        data:['上线数量'],
		        textStyle: {
		            color: '#fff'
		        }
			},
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#323c48',
		                borderColor: '#1ccece'
		            },
		            emphasis: {
		                areaColor: '#1ccece'
		            }
		        }
		    },
		    series : [
		        {
		            name: '上线数量',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            data: [
		            	{name:'紫金银行',value:[118.78,32.04,17]},
		            	{name:'上海银行',value:[121.48,31.22,11]},
		            	{name:'广州银行',value:[113.23,23.16,4]},
		            	{name:'威海银行',value:[122.1,37.5,4]},
		            	{name:'顺德银行',value:[113.11,23.05,3]},
		            	{name:'泰安银行',value:[117.13,36.18,3]},
		            	{name:'绵阳银行',value:[104.73,31.48,2]},
		            	{name:'台州银行',value:[121.420757,28.656386,2]},
		            	{name:'吉林银行',value:[126.57,43.87,2]},
		            	{name:'苏州银行',value:[117.13,36.18,1]},
		            	{name:'自贡银行',value:[117.13,36.18,1]},
		            	{name:'阜新银行',value:[117.13,36.18,1]},
		            	{name:'启东银行',value:[121.05,32.08,2]},
		            ],
		            symbolSize: function (val) {
		                return val[2]*2;
		            },
		            hoverAnimation: true,
		            label: {
		                normal: {
		                    formatter: '{b}',
		                    position: 'right',
		                    show: true
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#eee',
                    		shadowBlur: 2,
                    		shadowColor: 'rgba(14, 241, 242, 0.8)'
		                }
		            }
		        }
		    ]

		},
		imglist:[]
	},
	{
		name:'银行一账通UEDC官网',
		title:'银行一账通UEDC官网',
		content: '银行一账通UEDC官网，是平安金融壹账通H5运营服务组自主开发的综合性平台，该平台主要抽象并沉淀出一系列高可用的运营活动案例、组件以及围绕前端技术展开文章和视频的分享等。',
		chartOption: {

		    title: {
		        text: '银行一账通UEDC展示类型',
		        left: 'left',
		        textStyle: {
		            color: '#1ccece'
		        }
		    },

		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },

		    visualMap: {
		        show: false,
		        min: 0,
		        max: 500,
		        inRange: {
		            colorLightness: [0, 1]
		        }
		    },
		    series : [
		        {
		            name:'内容分类',
		            type:'pie',
		            radius : '64%',
		            center: ['50%', '50%'],
		            data:[
		                {value:40, name:'案例模板'},
		                {value:21, name:'组件特效'},
		                {value:12, name:'技术文章'},
		                {value:3, name:'视频分享'}
		            ].sort(function (a, b) { return a.value - b.value}),
		            roseType: 'angle',
		            label: {
		                normal: {
		                    textStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    lineStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    },
		                    smooth: 0.2,
		                    length: 10,
		                    length2: 20
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#fff',
		                    shadowBlur: 80,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		},
		imglist:[]
	},
	{
		name:'业务逻辑自动生成平台',
		title:'业务逻辑生成平台',
		content: '将运营活动背后的业务逻辑进行归类和整理，做成业务逻辑可视化操作平台，产品经理和开发同学在该平台上梳理业务逻辑，最终生成一整套流程图、运营活动业务逻辑（js）和基础页面模板,代码质量也更具标准和规范。',
		chartOption: {

		    title: {
		        text: '平台累计生成代码占比',
		        left: 'left',
		        textStyle: {
		            color: '#1ccece'
		        }
		    },

		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },

		    visualMap: {
		        show: false,
		        min: 0,
		        max: 10000,
		        inRange: {
		            colorLightness: [0, 1]
		        }
		    },
		    series : [
		        {
		            name:'代码行数',
		            type:'pie',
		            radius : '72%',
		            center: ['50%', '50%'],
		            data:[
		                {value:8000, name:'自动生成代码'},
		                {value:1200, name:'手动增加代码'}
		            ].sort(function (a, b) { return a.value - b.value}),
		            roseType: 'angle',
		            label: {
		                normal: {
		                    textStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    lineStyle: {
		                        color: 'rgba(255, 255, 255, 0.3)'
		                    },
		                    smooth: 0.2,
		                    length: 10,
		                    length2: 20
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#1ccece',
		                    shadowBlur: 80,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		},
		imglist:[]
	},
	{
		name:'H5微场景生成工具',
		title:'H5微场景生成工具',
		content: '活动上线数：10，我们的产出：购买理财砸金蛋活动、健康跑活动、天添宝活动、梦想基金活动等',
		imglist:[]
	},
	{
		name:'技术框架建设',
		title:'技术框架建设',
		content: '活动上线数：10，我们的产出：端午节贴息活动、健康跑活动、天添宝活动、梦想基金活动等',
		chartOption: {
		    backgroundColor: '#161627',
		    title: {
		        text: 'AQI - 雷达图',
		        left: 'center',
		        textStyle: {
		            color: '#eee'
		        }
		    },
		    legend: {
		        bottom: 5,
		        data: ['北京', '上海', '广州'],
		        itemGap: 20,
		        textStyle: {
		            color: '#fff',
		            fontSize: 14
		        },
		        selectedMode: 'single'
		    },
		    // visualMap: {
		    //     show: true,
		    //     min: 0,
		    //     max: 20,
		    //     dimension: 6,
		    //     inRange: {
		    //         colorLightness: [0.5, 0.8]
		    //     }
		    // },
		    radar: {
		        indicator: [
		            {name: 'AQI', max: 300},
		            {name: 'PM2.5', max: 250},
		            {name: 'PM10', max: 300},
		            {name: 'CO', max: 5},
		            {name: 'NO2', max: 200},
		            {name: 'SO2', max: 100}
		        ],
		        shape: 'circle',
		        splitNumber: 5,
		        name: {
		            textStyle: {
		                color: 'rgb(238, 197, 102)'
		            }
		        },
		        splitLine: {
		            lineStyle: {
		                color: [
		                    'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
		                    'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
		                    'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
		                ].reverse()
		            }
		        },
		        splitArea: {
		            show: false
		        },
		        axisLine: {
		            lineStyle: {
		                color: 'rgba(238, 197, 102, 0.5)'
		            }
		        }
		    },
		    series: [
		        {
		            name: '北京',
		            type: 'radar',
		            lineStyle: lineStyle,
		            data: dataBJ,
		            symbol: 'none',
		            itemStyle: {
		                normal: {
		                    color: '#F9713C'
		                }
		            },
		            areaStyle: {
		                normal: {
		                    opacity: 0.1
		                }
		            }
		        },
		        {
		            name: '上海',
		            type: 'radar',
		            lineStyle: lineStyle,
		            data: dataSH,
		            symbol: 'none',
		            itemStyle: {
		                normal: {
		                    color: '#B3E4A1'
		                }
		            },
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        },
		        {
		            name: '广州',
		            type: 'radar',
		            lineStyle: lineStyle,
		            data: dataGZ,
		            symbol: 'none',
		            itemStyle: {
		                normal: {
		                    color: 'rgb(238, 197, 102)'
		                }
		            },
		            areaStyle: {
		                normal: {
		                    opacity: 0.05
		                }
		            }
		        }
		    ]
		},
		imglist:[]
	},
	{
		name:'2017年规划',
		title:'我们的2017年',
		content: '活动上线数：10，我们的产出：签到送流量活动、首次贷款充大奖活动、账户安全险活动等',
		imglist:[]
	}
];
var vrMode = false;
var TIME = {
	flyTime: 2500,
	writeTime: 2500,
	delayTime: 7500
};
var CURRENT = -1;
var isAllowClick = false,isAnimateEnded = false;
var isMobile = function () {
  	var check = false;
  	(function (a) {
    	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
      	check = true;
    	}
  	})(navigator.userAgent || navigator.vendor || window.opera);
  	return check;
};
function Index() {
	this.init();
}
Index.prototype = {
	init: function() {
		var self = this;

		//初始化场景
		this.scene = new THREE.Scene();
		//初始化相机
		this.camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,4000);
		this.camera.position.set( 0, 100, -100 );
		// this.camera.lookAt(this.scene.position);
		//初始化渲染器
		this.renderer = new THREE.WebGLRenderer({ antialias: true } );
		this.renderer.setSize(window.innerWidth,window.innerHeight);
		this.renderer.setClearColor(0x519EcB);
		this.renderer.shadowMapEnabled = true;
		document.querySelector('.scene').appendChild(this.renderer.domElement);
		this.scene.fog	= new THREE.FogExp2( 0xd0e0f0, 0.0025 );
		this.createLight();
		this.createGround(10000,10000);

		// 定义所有高楼的纹理
		var texture		= new THREE.Texture( this.generateTextureCanvas() );
		texture.anisotropy	= this.renderer.getMaxAnisotropy();
		texture.needsUpdate	= true;
		this.cubeMaterial	= new THREE.MeshLambertMaterial({
			map: texture,
			vertexColors	: THREE.VertexColors
		});

		//帧率显示
		this.stats = new Stats();
		document.body.appendChild( this.stats.dom );

		//创建城市
		this.scene.add(new THREEx.ProceduralCity(this.renderer));

		//初始化数据图
		this.initChart();
		//创建飞碟
		this.createUFO();
		//事件绑定
		this.bindEvent();
		// 初始化VR视觉控件
  		this.effect = new THREE.VREffect(this.renderer);
  		this.vrControls = new THREE.VRControls(this.camera);
		this.render();
	},
	initChart: function () {
		// 初始化数据图表
		this.chartBox = document.querySelector('.chart');
		this.chart = echarts.init(this.chartBox);
		this.introBox = document.querySelector('.intro-box');
		this.chartBox.style.display = 'none';
	},
	bindEvent: function() {
		var self = this;
		this.domEvents = new THREEx.DomEvents(this.camera, this.renderer.domElement);

		document.getElementById('vr').addEventListener('click',function () {
		  	if(!vrMode) {
		  		vrMode = true;
		  	} else {
		  		vrMode = false;
		  	}
		  	self.requestFullscreen();
		  	self.onWindowResize();
		});

		document.addEventListener('fullscreenchange', function() {
			self.onFullscreenChange();
		});
		document.addEventListener('mozfullscreenchange',  function() {
			self.onFullscreenChange();
		});

		window.addEventListener( 'resize', function() {
			self.onWindowResize();
		}, false );
		document.querySelector('.loading').addEventListener('click', function(e) {
			if(e.target.innerHTML != '开始') return;
			document.body.removeChild(document.querySelector('.loading-mask'));
			document.getElementById('AC').play();
			self.introBox.className += ' show';		
			var html = "2016即将即将成为历史，这一年, 我们团队的共同努力下,攻克了一个又一个难题,圆满完成了各个项目,取得了令人欣喜的成绩，而我们始终在探索与创新的道路上……";
			self.createText(self.introBox,"我们这一年",html,TIME.writeTime,function() {
				var _self =self;
				setTimeout(function() {
					_self.introBox.className = self.introBox.className.replace(/show/g,'');
				}, TIME.delayTime);
			});
			self.animate(bankList.length,TIME.flyTime + TIME.writeTime + TIME.delayTime);
		});
	},
	createLight: function() {
        this.scene.add(new THREE.AmbientLight(0xFFFFFF));
        var light = new THREE.DirectionalLight( 0xffffff, 0.3 );
		light.position.set( 200, 450, 500 );
		light.castShadow = true;
		light.shadow.mapSize.width = 2048;
		light.shadow.mapSize.height = 512;
		light.shadow.camera.near = 100;
		light.shadow.camera.far = 1200;
		light.shadow.camera.left = -1000;
		light.shadow.camera.right = 1000;
		light.shadow.camera.top = 350;
		light.shadow.camera.bottom = -350;
		this.scene.add( light );
	},

	createGround: function(width,height) {
		//  GROUND
		var gt = new THREE.TextureLoader().load( "" );
		this.gg = new THREE.PlaneBufferGeometry( width, height );
		var gm = new THREE.MeshPhongMaterial( { color: 0xffffff, map: gt } );
		this.ground = new THREE.Mesh( this.gg, gm );
		this.ground.rotation.x = - Math.PI / 2;
		this.ground.material.map.repeat.set( 500, 500 );
		this.ground.material.map.wrapS = THREE.RepeatWrapping;
		this.ground.material.map.wrapT = THREE.RepeatWrapping;
		// note that because the ground does not cast a shadow, .castShadow is left false
		this.ground.receiveShadow = true;
		this.scene.add( this.ground );
	},

	onWindowResize: function() {

		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		if (vrMode) {
			this.effect.setSize(window.innerWidth, window.innerHeight);
		} else {
			this.renderer.setSize(window.innerWidth, window.innerHeight);
		}
	},
	createSpotLight: function() {
		var spotLight = new THREE.SpotLight(0xFFFFFF);
		light.position.set( 200, 0, 500 );
		light.castShadow = true;
		this.scene.add( spotLight );
	},
	requestFullscreen: function() {
		var self = this;
	  	var el = self.renderer.domElement;

	  	if (!isMobile()) {
	    	self.effect.setFullScreen(true);
	    	return;
	  	}

	  	if (el.requestFullscreen) {
	    	el.requestFullscreen();
	  	} else if (el.mozRequestFullScreen) {
	    	el.mozRequestFullScreen();
	  	} else if (el.webkitRequestFullscreen) {
	    	el.webkitRequestFullscreen();
	  	}
	},
	onFullscreenChange: function(e) {
  		var fsElement = document.fullscreenElement ||
    	document.mozFullScreenElement ||
    	document.webkitFullscreenElement;

  		if (!fsElement) {
    		vrMode = false;
  		} else {
    	// lock screen if mobile
    	window.screen.orientation.lock('landscape');
  		}
	},
	createUFO: function () {
		//创建飞碟
		var self = this;
		var geometry = new THREE.SphereGeometry( 10,12,12);
		var ufomap = new THREE.TextureLoader().load( "./textures/building.jpg",function() {
		});
		this.ufomaterial = new THREE.MeshPhongMaterial( { color: 0xdddddd,map:ufomap} );
		this.UFO = new THREE.Mesh( geometry, this.ufomaterial );
		this.UFO.position.x = 0;
		this.UFO.position.y = 80;
		this.UFO.position.z = 150;
		this.UFO.scale.y = 0.25;
		this.scene.add(this.UFO);
		geometry.dispose(); 

		var tween = new TWEEN.Tween({h:0})
			.to({h:Math.PI*1000},1000000)
			.onUpdate(function() {
				self.UFO.rotation.y = this.h;
			});
			tween.start();
	},
	createText: function (el,title,s,time,callback){
            var txt = s;
			if(!txt||txt.length==0) return;
            var titleDom = el.querySelector('.title');
            var contentDom = el.querySelector('.content');
            el.className +=' show';
            var length = txt.length;
            var ms = time/length;
            var index = 0;
            contentDom.innerHTML = '';
            titleDom.className = 'title';
            titleDom.innerHTML = title;
            titleDom.className += ' title-show';
            var tId=setInterval(function(){
                contentDom.innerHTML += txt.charAt(index);
                if(index++ === length){
                    clearInterval(tId);
                    index = 0;
                    }
            },ms);
            if(!!callback) {
            	setTimeout(callback, time);
            }
    },
	createCube: function(height,callback) { //创建高楼
		var self = this;
		var cubeSize = 10;
		var geometry =  new THREE.SphereGeometry( 15,12,12);
		// geometry.applyMatrix( new THREE.Matrix4().makeTranslation( 0, height/2, 0 ) );
		var cube = new THREE.Mesh( geometry, this.cubeMaterial );
		cube.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;

		cube.position.y = 0;
		cube.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;

		// set(-30 + Math.round(Math.random() * this.gg.width),Math.round(Math.random() * 5,-20 + Math.round(Math.random() * this.gg.height)));
		cube.castShadow = true;
		cube.name = CURRENT;
		this.scene.add( cube );

		this.domEvents.addEventListener(cube, 'click', function(event){
			var _self = self;
			console.log(cube.name);
			if(!isAnimateEnded || !isAllowClick) return;
			isAllowClick = false;
			if(!!self.cubeLine) {
				TWEEN.remove(self.cubeLineAnimate);
				self.scene.remove(self.cubeLine);
			}
			self.chart.clear();
			self.flyToCube(cube,function() {
				_self.TextBoxAnimate(cube.name);
			});
		}, false);

		this.flyToCube(cube,callback,height);
		geometry.dispose(); 

	},
	flyToCube: function(cube,callback,height) {
		var self = this;
		var initScaleY = 1;
		if(!height) {
			height = cube.scale.y;
			initScaleY = cube.scale.y;
		}
		var cubeAnimate = new TWEEN.Tween({h:initScaleY,x:this.UFO.position.x,y:this.UFO.position.y,z:this.UFO.position.z})
			.to({h:height,x:cube.position.x,y:height*15+5,z:cube.position.z},TIME.flyTime)
			.onUpdate(function() {
				cube.scale.y = this.h;
				self.UFO.position.x = this.x;
				self.UFO.position.y = this.y;
				self.UFO.position.z = this.z ;
			})
			.onComplete(function() {
				var _self =self;
				callback();
				self.cubeLine = self.createCubeLine(cube.geometry,cube.position.x,cube.position.y,cube.position.z,height);
				self.scene.add(self.cubeLine);
				self.cubeLineAnimate = new TWEEN.Tween({h:0})
					.to({h:Math.PI*500},1000000)
					.onUpdate(function() {
						_self.cubeLine.rotation.y = this.h;
					});
					self.cubeLineAnimate.start();
			});
			cubeAnimate.start();
	},
	createCubeLine: function(geometry,x,y,z,height) { //创建高楼扫描网格
		var geometry = geometry.clone();
		var material = new THREE.MeshBasicMaterial({color:0x1ccece,wireframe:true});
		var mesh = new THREE.Mesh(geometry,material);
		mesh.position.set(x,y,z);
		mesh.scale.set(1.1,height*1,1.1);
		geometry.dispose();
		return mesh;
	},
	createTV: function(callback) {
		//创建电视屏
		var self = this;

		var TVmap = THREE.ImageUtils.loadTexture("./textures/us.jpg");		
		var sidematerial = new THREE.MeshPhongMaterial( { color: 0xcccccc} );
		var centermaterial = new THREE.MeshPhongMaterial( { color: 0xdddddd,map:TVmap} );
		var TVgeometry = new THREE.CubeGeometry(100,75,5,3,3,3);
		var materials = [ centermaterial,sidematerial ];
		for(var i = 0;i<TVgeometry.faces.length;i++) {
			if(i==2) {
				materials.push(centermaterial);
			} else {
				materials.push(sidematerial);
			}
		}

		var TV = new THREE.Mesh( TVgeometry, new THREE.MeshFaceMaterial(materials) );
		TV.position.set(0,-20,0);
		TV.name = CURRENT;
		this.scene.add(TV);

		this.domEvents.addEventListener(TV, 'click', function(event){
			var _self = self;
			console.log(TV);
			if(!isAnimateEnded || !isAllowClick) return;
			isAllowClick = false;
			if(!!self.cubeLine) {
				TWEEN.remove(self.cubeLineAnimate);
				self.scene.remove(self.cubeLine);
			}
			self.chart.clear();
			self.flyToTV(TV,function() {
				_self.TextBoxAnimate(TV.name);
			});
		}, false);
		TVgeometry.dispose(); 

		this.flyToTV(TV,callback,50);
	},
	flyToTV: function(TV,callback,postionY) {
		var self = this;
		if(!postionY) postionY = TV.position.y;
		var TVAnimate = new TWEEN.Tween({up:TV.position.y,backX:this.UFO.position.x,backY:this.UFO.position.y,backZ:this.UFO.position.z})
			.to({up:postionY,backX:0,backY:75,backZ:80},TIME.flyTime)
			.onUpdate(function() {
				TV.position.y = this.up;
				self.UFO.position.x = this.backX;
				self.UFO.position.y = this.backY;
				self.UFO.position.z = this.backZ;
			})
			.onComplete(function() {
				if(!!callback) callback();
			});
			TVAnimate.start();
	},
	TextBoxAnimate: function(current) {
		var self = this;
		if(!!bankList[current].chartOption) {
			self.chartBox.style.display = 'block';
		} else {
			self.chartBox.style.display = 'none';
		}
		self.createText(self.introBox,bankList[current].title,bankList[current].content,TIME.writeTime,function() {
			var _self = self;
			if(!!bankList[current].chartOption) self.chart.setOption(bankList[current].chartOption);
			if (!isAnimateEnded) {
				setTimeout(function() {
					var className = self.introBox.className;
					_self.introBox.className = className.replace(/show/g,'');
					_self.chart.clear();
				}, TIME.delayTime);
			} else {
				isAllowClick = true;
			}
		});
	},
	animate: function(num,delay) { //动画线程
		var self = this;
		this.onWindowResize();
		var id = setInterval(function() {
			var _self = self;
			CURRENT++;
			if(!!self.cubeLine) {
				TWEEN.remove(self.cubeLineAnimate);
				self.scene.remove(self.cubeLine);
			}
			if(CURRENT < num-1) {
				//创建一栋建筑
				self.createCube(5+5*Math.random(),function() {
					_self.TextBoxAnimate(CURRENT);
				}); 
				
			} else {
				clearInterval(id);
				self.createTV(function() {
					_self.TextBoxAnimate(CURRENT);
					isAnimateEnded = true;
					isAllowClick = true;
				});
			}
		},delay);
	},
	render: function() {
		var self = this;
		var render = function() {
			if (vrMode) {
				self.effect.render(self.scene, self.camera);
			}  else {
				self.renderer.render(self.scene,self.camera);
			}
			self.vrControls.update();
			TWEEN.update();
			requestAnimationFrame(render);
			self.stats.update();
			self.scene.position.x = -self.UFO.position.x;
			self.scene.position.y = -self.UFO.position.y+120;
			self.scene.position.z = -self.UFO.position.z-150;
		}
		render();
	},

	generateTextureCanvas: function(){
		// 画上建筑纹理
		var canvas	= document.createElement( 'canvas' );
		canvas.width	= 32;
		canvas.height	= 64;
		var context	= canvas.getContext( '2d' );
		// 建筑墙色
		context.fillStyle	= '#cccccc';
		context.fillRect( 0, 0, 32, 64 );
		// 给每一个楼层画上深浅色不同的窗户
		for( var y = 2; y < 64; y += Math.floor( 3 + Math.random()*2 ) ){
			for( var x = 0; x < 32; x += 1 ){
				var value	= Math.floor( Math.random() * 64 );
				context.fillStyle = 'rgb(' + [value, value, value].join( ',' )  + ')';
				context.fillRect( x, y, 1, 1 );
			}
		}
		var canvas2	= document.createElement( 'canvas' );
		canvas2.width	= 512;
		canvas2.height	= 1024;
		var context	= canvas2.getContext( '2d' );
		context.imageSmoothingEnabled		= false;
		context.webkitImageSmoothingEnabled	= false;
		context.mozImageSmoothingEnabled	= false;
		// 画上纹理
		context.drawImage( canvas, 0, 0, canvas2.width, canvas2.height );
		return canvas2;
	}
};

new Index();