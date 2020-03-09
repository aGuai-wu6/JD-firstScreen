/* 下拉列表需要的参数
*  width: 下拉列表的宽度
*  data: [{  dl标签下面的所有数据 
    title: '', 当前块里面的标题,
    width: '', 当前块的宽度
    items: [{name: '', href: '#'}, {}], 代表当前块显示的dd元素 
}],
colWidth: 每列的宽度，
direction:  多块内容的排列方式  y代表从上到下的排列, x 代表从左到右的排列
*/
 

$('#my-JD').dropDown({
    width: 280,
    colWidth: 126,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '待处理订单'
        }, {
            href: '#',
            name : '返修退换货',
        }, {
            href: '#',
            name: '降价商品'
        }, {
            href: '#',
            name: '消息'
        }, {
            href: '#',
            name: '我的问答'
        }, {
            href: '#',
            name: '我的关注'
        }]
    }, {
        title: '',
        // col: 2,
        items: [{
            href: '#',
            name: '我的京豆'
        }, {
            href: '#',
            name: '我的优惠券'
        }, {
            href: '#',
            name: '我的白条'
        }, {
            href: '#',
            name: '我的理财'
        }]
    }]
})

$('#company').dropDown({
    width: 152,
    colWidth: 56,
    list: [{
        title: '',
        items: [{
            href: '#',
            name: '企业购'
        }, {
            href: '#',
            name : '商用场景观',
        }, {
            href: '#',
            name: '工业品'
        }, {
            href: '#',
            name: '礼品卡'
        }]
    }]
})

$('#service').dropDown({
    width: 170,
    colWidth: 70,
    list: [{
        title: '客户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
})
$('#app').dropDown({
    width: 1188,
    colWidth: 85,
    direction: 'x',
    list: [{
        title: '特色主题',
        // col: 4,
        width: 340,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        },{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        } ]
    }, {
        title: '商户',
        // col: 3,
        width: 255,
        items: [{
            href: '#',
            name: '帮助中心'
        }, {
            href: '#',
            name : '售后服务',
        }, {
            href: '#',
            name: '在线客服'
        }, {
            href: '#',
            name: '意见建议'
        }, {
            href: '#',
            name: '电话客服'
        }, {
            href: '#',
            name: '客服邮箱'
        }, {
            href: '#',
            name :'金融咨询'
        }, {
            href: '#',
            name: '全球售客服'
        }]
    }]
});



var menuList = [{
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];
