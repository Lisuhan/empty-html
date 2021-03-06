import "./style/style.css"
import "./style/normalize.css"
import "./style/main.scss"

import $ from "jquery"

import { setInterval } from "timers"

const initLineMap = () => {
    const MapHeight = [
        10,
        20,
        15,
        32,
        40,
        12,
        28,
        22,
        41,
        55,
        30,
        38,
        50,
        60,
        43,
        53,
        59,
        76,
        40,
        43,
        54,
        64,
        69,
        80,
        70,
        82,
    ]
    let DomMap = []
    MapHeight.forEach(item => {
        DomMap.push(
            `<div class="line-map-item" style="position:relative;height:${item}%;width:3%;float:left; background-color: #71c9ff; margin-right:1%">
            
            </div>`
        )
    })
    const container = $(".line-chart-container .part-2")
    container.append(DomMap)
    setInterval(() => {
        container.removeClass("line-chart-run")
        setTimeout(() => {
            container.addClass("line-chart-run")
        }, 1000)
    }, 5000)
}
const setText = (index = 0) => {
    let Dom = []
    textCollection[index].forEach(item => {
        Dom.push(
            `<div class="company-item">
                <span class="title company-item-title">${
                    item.title
                } • 企业</span>
                ${getCompanyList(item.company)}
            </div>`
        )
    })
    $("#company-container").html(Dom)
}
const getCompanyList = list => {
    let _Dom = list
        .map((item, index) => `<li class="company-item-li">${item}</li>`)
        .join("")
    return `<ul class="company-item-ul">${_Dom}</ul>`
}
const bindEvent = () => {
    $("[data-name=btn]").on("click", e => {
        $("[data-name=btn]").removeClass("active")
        let node = $(e.currentTarget)
        node.addClass("active")
        let index = node.data("index")
        setText(index)
    })
}
const bindTextScroll = () => {
    $("div.list_lh").myScroll({
        speed: 40, //数值越大，速度越慢
        rowHeight: 30, //li的高度
    })
}
const textCollection = {
    0: [
        {
            title: "市北",
            company: [
                "土木工坊绿色科技工程有限公司",
                "山东大匠环保催化技术有限公司",
                "青岛追实智能装备有限公司",
                "青岛拓康基因检测有限公司",
                "青岛泛米科技有限公司",
                "青岛阿卡德科技有限公司",
                "青岛菁城环境科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛海博德新材料科技有限公司",
                "青岛维尼生物科技有限公司",
                "青岛华科博能环境科技有限公司",
                "青岛华彦景云健康产业科技有限公司",
                "青岛融合创新科技有限公司",
                "青岛东源德瑞科技有限公司",
                "青岛北奥生物科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛麦迪森生物科技有限公司",
                "青岛新创生物科技有限公司",
                "青岛冉科生物科技有限公司",
            ],
        },
    ],
    1: [
        {
            title: "市北",
            company: [
                "青岛泰达海洋工程有限公司",
                "青岛国能浩源海洋科技有限公司",
                "青岛形康三维科技有限公司",
                "青岛和海绿建创新科技有限公司",
                "青岛东海生命科学有限公司",
                "青岛华信数云信息技术有限公司",
                "青岛动动吧动画科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛鑫吉新材料科技有限公司",
                "青岛中科贝尔机器人有限公司",
                "青岛绎德声光电有限公司",
                "青岛海汇医学科技有限公司",
                "青岛耕海海洋科技有限公司",
                "青岛微芯科技有限责任公司",
                "青岛博新特科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                " 青岛隆鑫科技有限公司",
                "青岛纳米催化科技公司",
                "青岛姳悠生物技术有限公司",
                "青岛沃农晖农业科技有限公司",
                "青岛易生态环保科技有限公司",
                "青岛恒盈源环保工程科技有限公司",
            ],
        },
    ],
    2: [
        {
            title: "市北",
            company: [
                "青岛乾元环境科技有限公司",
                "青岛予升科技拓展有限公司",
                "青岛维晟视觉科技有限公司",
                "青岛艾科泰克智能科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛海若智慧科技有限公司",
                "青岛安能环境科技有限公司",
                "青岛万嘉环保新材料有限公司",
                "青岛中科瑞信电力技术有限公司",
                "青岛万叶文化科技有限公司",
                "青岛源茵生物技术有限公司",
            ],
        },
    ],
    3: [
        {
            title: "市北",
            company: [
                "青岛英能电子科技有限公司",
                "青岛机目科技有限公司",
                "青岛旺海源生物科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛启明生物科技有限公司",
                "青岛北美油气田环保科技有限公司",
                "青岛易方园林科技有限公司",
                "青岛千寻茶业科技有限公司",
                "青岛亚欧慧能环保科技有限公司",
                "青岛淳净源环保科技有限公司",
                "青岛科信安全技术有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛菲特测控节能科技有限公司",
                "青岛联汇通网络科技有限公司",
            ],
        },
    ],
    4: [
        {
            title: "市北",
            company: [
                "青岛橙光互动网络有限公司",
                "青岛简易生活科技有限公司",
                "青岛中科远医养老健康科技有限公司",
                "青岛隆极科技有限公司",
            ],
        },
        {
            title: "市北",
            company: [
                "青岛云策略科技有限公司",
                "青岛魔灯科技有限公司",
                "青岛中科智绘科技有限公司",
                "青岛优云物联科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛海虹水族科技有限公司",
                "青岛普兰泰克机械科技有限公司",
                "青岛科润博特生物科技有限公司",
                "青岛小海智能科技有限公司",
                "青岛罗升智能科技有限公司",
                "青岛三合中农生物科技有限公司",
            ],
        },
    ],
    5: [
        {
            title: "市北",
            company: [
                "青岛惠童堂生物科技有限公司",
                "华夏云信（青岛）智能科技有限公司",
                "中美博赛（青岛）医疗科技有限公司",
                "青岛理正建设科技有限公司",
                "青岛小玖万维网络科技有限公司",
                "青岛瑞博鑫新能源有限公司",
                "青岛凯鲁苹能源科技有限公司",
                "青岛奶为鲜食品科技有限公司",
                "青岛艾诺胶新材料有限责任公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛阳光智惠能源科技有限公司",
                "青岛禾新优创信息科技有限公司",
                "青岛海和创兴海洋生物科技有限公司",
                "青岛农大鲜道生物科技有限公司",
                "青岛昆布生物工程有限公司",
                "青岛莱博瑞生物科技有限公司",
                "青岛东上数字科技有限公司",
                "青岛伊威特生物科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛艺和星辰文化传播科技有限公司",
                "青岛主流科技有限公司",
                "青岛天绘大地园林科技有限公司",
                "青岛依可森环保科技有限公司",
                "青岛华腾中鼎智能科技有限公司",
                "青岛新海东高科技发展有限公司",
                "青岛金诺益农生物科技有限公司",
                "青岛艾格蒙龙农业自动化设备有限公司",
                "青岛云际码联科技有限公司",
            ],
        },
    ],
    6: [
        {
            title: "市北",
            company: [
                "青岛联盛创能源科技有限公司",
                "青岛易可润能源科技有限公司",
                "青岛胜算云上科技有限公司",
                "山东旭晟东阳新材料科技有限公司",
                "青岛海普纳生物科技有限公司",
                "青岛汇星集成建筑科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛阳光智惠能源科技有限公司",
                "青岛禾新优创信息科技有限公司",
                "青岛海和创兴海洋生物科技有限公司",
                "青岛农大鲜道生物科技有限公司",
                "青岛昆布生物工程有限公司",
                "青岛莱博瑞生物科技有限公司",
                "青岛东上数字科技有限公司",
                "青岛伊威特生物科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛艺和星辰文化传播科技有限公司",
                "青岛主流科技有限公司",
                "青岛天绘大地园林科技有限公司",
                "青岛依可森环保科技有限公司",
                "青岛华腾中鼎智能科技有限公司",
                "青岛新海东高科技发展有限公司",
                "青岛金诺益农生物科技有限公司  ",
                "青岛艾格蒙龙农业自动化设备有限公司",
                "青岛云际码联科技有限公司",
            ],
        },
    ],
    7: [
        {
            title: "市北",
            company: [
                "青岛智创图灵科技网络有限公司",
                "青岛新五指峰环保科技有限公司",
                "青岛爱雪康生物科技有限公司",
                "青岛益柏生物科技有限公司",
                "青岛耐德生物技术有限公司",
                "青岛旭晟东阳新材料科技有限公司",
            ],
        },
        {
            title: "李沧",
            company: ["青岛天和清原科技有限公司"],
        },
        {
            title: "城阳",
            company: [
                "青岛安雅自动化研究所有限公司",
                "青岛华茂环保科技有限公司",
                "青岛科信安全技术有限公司",
                "青岛每家园艺科技有限公司",
                "青岛小队网络科技有限公司",
                "青岛元富矿业科技有限公司",
                "青岛未来智能科技有限公司",
                "青岛必福高分子科技有限公司",
                "青岛贞正分析仪器有限公司",
                "青岛增益高校信息科技有限公司",
                "青岛浩釜铭车辆科技有限公司",
            ],
        },
    ],
    8: [
        {
            title: "城阳",
            company: [
                "青岛世纪京泰家居科技有限公司",
                "青岛绿意生物科技有限公司",
                "青岛骐骏新材料科技有限公司",
                "青岛福来恩科技技术有限公司",
                "青岛友利科技发展有限公司",
                "青岛沃特环保科技开发有限公司",
                "青岛益益联信息科技有限公司",
                "青岛亨云信息科技有限公司",
                "青岛盛唐新材料科技有限公司",
                "青岛正济中药微生态制剂科技有限公司",
                "青岛众赢高科技信息技术有限公司",
                "青岛格霖梵环保科技有限公司",
                "青岛泰信远景科技有限公司",
                "青岛兆意精细化工有限公司",
                "青岛江盈自控装备制造有限公司",
                "青岛嘉庆兽药检测有限公司",
                "青岛悦途网络科技有限公司",
                "山东军浩苑环保科技有限公司",
                "青岛中循欧倍特海洋科技有限公司",
                "青岛华微紫外光电科技有限公司",
                "青岛华大华微生物科技有限公司",
                "青岛温舟电子有限责任公司",
                "青岛诶创生物科技有限公司",
                "青岛博爱功能食品科技有限公司",
                "青岛（索蓝）电驱动科技有限公司",
                "青岛云溯源健康科技有限公司",
                "青岛众芯微电子科技有限公司",
                "青岛正扬物联信息科技有限责任公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛畜康健业农业科技有限公司",
                "青岛赛博工业科技有限公司",
                "青岛耐德生物技术有限公司",
                "青岛久创信息科技有限公司",
                "青岛汉宏信息科技有限公司",
                "青岛博尔汇能源科技开发有限公司",
                "魔迪多维数码科技（青岛）有限公司",
                "青岛奥迪特生物技术有限公司",
                "青岛北普海洋科技有限公司",
                "青岛博创海洋技术有限公司",
                "山东诚功律师事务所",
                "青岛浩釜铭车辆科技有限公司",
                "青岛博赛德生物信息科技有限公司",
                "青岛贝特艾尔物联网科技有限公司",
                "青岛孚尔德科技发展有限责任公司",
                "青岛环游节能服务有限公司",
                "青岛中润半岛运动营养品研发有限公司",
                "青岛华创机械科技有限公司",
                "青岛增益高校信息科技有限公司",
                "青岛华城科技有限公司",
                "青岛唐友医学科技有限公司",
                "青岛赛尔环境保护科技有限公司",
                "青岛丰硕能源科技有限公司",
                "青岛微源生物科技有限公司",
                "青岛山海信息科技有限公司",
                "青岛图微视觉技术有限公司",
                "青岛臣灵智能科技有限公司",
                "青岛速康医疗科技有限公司",
            ],
        },
        {
            title: "城阳",
            company: [
                "青岛普裕电气科技有限公司",
                "青岛思博达生物科技有限公司",
                "青岛敏森电子技术有限公司",
                "青岛七棵树海洋技术有限公司",
                "青岛必福高分子科技有限公司",
                "青岛泰来高科技医疗有限公司",
                "青岛波恩特生物技术有限责任公司",
                "青岛肽安生物科技有限公司",
                "青岛量食电子信息有限公司",
                "青岛国海研环境科技有限公司",
                "青岛蓝图高科信息技术有限公司",
                "青岛阿斯利康生物技术有限公司",
                "青岛华炫环保科技有限公司",
                "博士园环境生态科技有限公司",
                "青岛理工新能源科技有限公司",
                "青岛世纪超越科贸有限公司",
                "智英地铁新能源科技有限公司",
                "青岛钻全光电有限公司",
                "青岛高喜宝能源科技有限公司",
                "青岛生物光工程有限公司",
                "青岛韦天信息技术有限公司",
                "青岛创维科技有限公司",
                "青岛天诚环境科技有限公司",
                "青岛元富矿业科技有限公司",
                "青岛奥格斯堡生物技术有限公司",
                "青岛睿思分析技术有限公司",
                "青岛TNIS科技发展有限公司",
                "青岛万能生物科技有限公司",
                "智慧人工环境科技有限公司",
            ],
        },
    ],
}

initLineMap()
setText()
bindEvent()
