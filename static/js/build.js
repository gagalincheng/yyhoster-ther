/**
 * Created by zhengjialin on 2017/1/16.
 */

$.get('http://legox.yy.com/mock/api/134',function(result){
    var provinces = {
        //23个省
        "台湾": "taiwan",
        "河北": "hebei",
        "山西": "shanxi",
        "辽宁": "liaoning",
        "吉林": "jilin",
        "黑龙江": "heilongjiang",
        "江苏": "jiangsu",
        "浙江": "zhejiang",
        "安徽": "anhui",
        "福建": "fujian",
        "江西": "jiangxi",
        "山东": "shandong",
        "河南": "henan",
        "湖北": "hubei",
        "湖南": "hunan",
        "广东": "guangdong",
        "海南": "hainan",
        "四川": "sichuan",
        "贵州": "guizhou",
        "云南": "yunnan",
        "陕西": "shanxi1",
        "甘肃": "gansu",
        "青海": "qinghai",
        //5个自治区
        "新疆": "xinjiang",
        "广西": "guangxi",
        "内蒙古": "neimenggu",
        "宁夏": "ningxia",
        "西藏": "xizang",
        //4个直辖市
        "北京": "beijing",
        "天津": "tianjin",
        "上海": "shanghai",
        "重庆": "chongqing",
        //2个特别行政区
        "香港": "xianggang",
        "澳门": "aomen"
    };
    //var special = ["北京","天津","上海","重庆","香港","澳门"];
    var text = '全国主播热力图';
    var subtext = '显示最近30天内的数据';
    var classes = ['class1','class2','class3'];  //分类

    var genSeries = function (map,data) {
        var series = [];
        for(var i in classes){
            series.push({
                name: classes[i],
                type: 'map',
                mapType: map,
                roam: true,
                label: {    //地图字体
                    normal:{
                        show:true,
                        textStyle:{
                            color:'#000',
                            fontSize:13
                        },
                    }
                },
                itemStyle: {    //地图图形
                    normal: {
                        borderColor:'#666',
                    }
                },
                data: data[classes[i]] == undefined ? '' : data[classes[i]]
            });
        }
        return series;
    }
    var randomData = function () {
        return Math.round(Math.random()*1000);
    };
    var chinadata = {'class1':[
        {name: null,value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '河南',value: randomData() },
        {name: '云南',value: randomData() },
        {name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },
        {name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },
        {name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '青海',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
    ],'class2':[
        {name: '',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '河南',value: randomData() },
        {name: '云南',value: randomData() },
        {name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },
        {name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },
        {name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '青海',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
    ],'class3':[
        {name: '',value: randomData() },
        {name: '天津',value: randomData() },
        {name: '上海',value: randomData() },
        {name: '重庆',value: randomData() },
        {name: '河北',value: randomData() },
        {name: '河南',value: randomData() },
        {name: '云南',value: randomData() },
        {name: '辽宁',value: randomData() },
        {name: '黑龙江',value: randomData() },
        {name: '湖南',value: randomData() },
        {name: '安徽',value: randomData() },
        {name: '山东',value: randomData() },
        {name: '新疆',value: randomData() },
        {name: '江苏',value: randomData() },
        {name: '浙江',value: randomData() },
        {name: '江西',value: randomData() },
        {name: '湖北',value: randomData() },
        {name: '广西',value: randomData() },
        {name: '甘肃',value: randomData() },
        {name: '山西',value: randomData() },
        {name: '内蒙古',value: randomData() },
        {name: '陕西',value: randomData() },
        {name: '吉林',value: randomData() },
        {name: '福建',value: randomData() },
        {name: '贵州',value: randomData() },
        {name: '广东',value: randomData() },
        {name: '青海',value: randomData() },
        {name: '西藏',value: randomData() },
        {name: '四川',value: randomData() },
        {name: '宁夏',value: randomData() },
        {name: '海南',value: randomData() },
        {name: '台湾',value: randomData() },
        {name: '香港',value: randomData() },
        {name: '澳门',value: randomData() }
    ]};  //随机数据
    //var chinadata = result;
    var renderMap = function (map,data){    //地图渲染
        option.title.text = map+'主播热力图';
        option.series = genSeries(map,data);
        option.visualMap.max = 200;
        //渲染地图
        provinceChart.setOption(option);
    };
    var option = {
        title: {
            text: text,
            subtext: subtext,
            left: 'center',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: classes,
            textStyle: {
                color: '#fff'
            },
        },
        visualMap: {
            min: 0,
            max: 2500,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            calculable: true,
            textStyle: {
                color: '#fff'
            },
            borderColor: '#000'
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: genSeries('china',chinadata)
    };

    var chinaChart = echarts.init(document.getElementById('china'));    //全国地图
    var provinceChart = echarts.init(document.getElementById('province'),'shine');      //省份地图
    chinaChart.setOption(option);
    chinaChart.on('click', function (params){      //省份点击事件
        if( params.name in provinces ){
            //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
            $.getJSON('static/map/province/'+ provinces[params.name] +'.json', function(data){
                provinceChart.dispose();
                provinceChart = echarts.init(document.getElementById('province'),'shine');
                echarts.registerMap( params.name, data);
                var d = [];
                for( var i=0;i<data.features.length;i++ ){
                    d.push({
                        name: data.features[i].properties.name,
                        value: randomData()
                    })
                }
                var rd = [];
                for(var c in classes){
                    rd[classes[c]] = d;
                }
                renderMap(params.name,rd);
                // $.get('http://legox.yy.com/mock/api/135',function(result){
                //     if(result[params.name]) renderMap(params.name,result[params.name]);
                // });
            });
        // }else if( params.seriesName in provinces ){
        //     //如果是【直辖市/特别行政区】只有二级下钻
        //     if(  special.indexOf( params.seriesName ) >=0  ){
        //         renderMap('china',mapdata);
        //     }else{
        //         //显示县级地图
        //         $.getJSON('static/map/city/'+ cityMap[params.name] +'.json', function(data){
        //             echarts.registerMap( params.name, data);
        //             var d = [];
        //             for( var i=0;i<data.features.length;i++ ){
        //                 d.push({
        //                     name:data.features[i].properties.name,
        //                     value:randomData()
        //                 })
        //             }
        //             renderMap(params.name,d);
        //         });
        //     }
        }
    });
});





