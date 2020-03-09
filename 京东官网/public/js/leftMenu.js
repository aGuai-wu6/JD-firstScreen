

(function () {

    function LeftMenu (options, wrap) {
        this.wrap = wrap || $('body');
        this.index = 0;
        this.init = function () {
            this.createDom();
            this.addStyle();
            this.bindEvent()
        }
        
    }

    LeftMenu.prototype.createDom = function (index) {
        console.log(this.index)
        $('#J_popCtn').empty();
        var oDiv = $('#J-cate');
        var oUl = $('<ul id="menu_left_list"></ul>');
        menuList.forEach(function (ele) {
            var oLi = $('<li class="menu_left_item"></li>');  
            ele.title.forEach(function (item, index, arr) {
                $('<a class="menu_lk">' + item + '</a>').appendTo(oLi);
                if(index != arr.length - 1) {
                    $('<span class="item_border">'+"/"+'</span>').appendTo(oLi);
                }
            })
            oLi.appendTo(oUl);
        })
        oUl.appendTo(oDiv); 
        createDomMove(this);
        
    }

    function createDomMove(wrap) {
        $('#J_popCtn').empty();
        var $Div = $('#J_popCtn');
        var thrDiv = $('<div id="J_popCtn_btm" class="clearfix"></div>')
        var secUl = $('<ul id="tabs"></ul>');
        menuList[wrap.index].content.tabs.forEach(function (data) {
            $('<li class="menu_left_item2"><a class="menu_lk2">'+ data  + '>'+ '</a></li>').appendTo(secUl)
        })
        secUl.appendTo($Div);
        var secDiv = $('<div id="subs"></div>');
        menuList[wrap.index].content.subs.forEach( function (ele) {
            var oDl = $('<dl class="clearfix"></dl>');
            $('<dt><a href="#">' + ele.title + '<span>></span></a></dt>').appendTo(oDl);
            var oDd = $('<dd></dd>');
            ele.items.forEach(function (item) {
                $('<a href="#">' + item + '</a>').appendTo(oDd);
            })
            oDd.appendTo(oDl);
            oDl.appendTo(secDiv);
        })
        secDiv.appendTo($Div);
        thrDiv.appendTo($Div)
        wrap.addStyle()
    }

    LeftMenu.prototype.addStyle = function () {
        $('#menu_left_list').css({
            overflow: 'hidden',
            padding: '10px 0',
            height: '450px',
            backgroundColor: '#fefefe',
            marginTop: '10px',
            boxSizing: 'border-box'
        }).find('.menu_left_item').css({
            overflow: 'hidden',
            paddingLeft: '18px',
            fontSize: 0,
            transition: 'background-color .2s ease',
        }).find('.menu_lk').css({
            fontSize: '14px',
            color: '#333',
            transition: 'color .2s ease',
            cursor: 'pointer'
        }).end().find('.item_border').css({
            padding: '0 2px',
            fontSize: '12px',
            lineHeight: '15px'
        })

        $('#J_popCtn > #tabs').css( {
            height: '20px',
            lineHeight: '20px',
            padding: '20px 20px 0px 20px',
        }).find('.menu_left_item2').css({
            height: '100%',
            fontSize: '12px',
            textAlign: 'center',
            float: 'left',
            marginRight: '20px'
        }).find('.menu_lk2').css({
            color:'#fff',
            backgroundColor: '#000',
            padding: '5px',
            fontWeight: 'bold'
        })

        $('#J_popCtn > #subs').css({
            width: '100%',
            padding: '20px 20px 20px 20px',
            height: '480px',
            fontSize: '13px'
        }).find('dl').css({
            marginBottom: '10px'
        }).find('dt').css({
            fontWeight: 'bold',
            marginRight: '10px',
            float: 'left',
            
        }).find('a').css({
            color: '#000',
            
        }).find('span').css({
            paddingLeft: '6px',
            color: '#000'
        }).end().end().end().find('dd').css({
            width: '700px',
            float: 'left',
        }).find('a').css({
            marginRight: '10px',
            whiteSpace: 'nowrap'
        })
        
    }

    LeftMenu.prototype.bindEvent = function () {
        var self = this;
        var timer = null;
        var showTimer = null;
        $('.menu_lk').on('mouseenter', function () {
            $('#J_popCtn').show()
            self.index = $(this).parents('li').index();
            createDomMove(self)
             $(this).css({
                 color: 'red', 
             }).parents('li').css({
                 backgroundColor: '#ccc'
             })
            
        }).on('mouseleave', function () {
            $(this).css({
                color: '#000'
            }).parents('li').css({
                backgroundColor: '#fff'
            })
            
        })

        $('#J-cate').on('mouseleave', function () {
            showTimer = setTimeout( function () {
                $('#J_popCtn').hide();
           },300)
        })

        $('#J_popCtn').on('mouseenter', function () {
            clearTimeout(showTimer);
        }).on('mouseleave', function () {
            deal(timer);
        })

        function deal(timer) {
            timer = setTimeout(function (){ 
                $('#J_popCtn').hide()}, 300);
        }
    }

   $.fn.extend({
       leftMenu: function (options) {
           var obj = new LeftMenu(options, this);
           obj.init();
        }
   })

}())