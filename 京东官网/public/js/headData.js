
// 封闭作用域
(function () {
    
    function MyDropDown(options, wrap) {
        this.wrap = wrap || $('body');
        this.width = options.width || 300;
        this.colWidth = options.colWidth || Math.ceil(options.width / 2);
        this.list = options.list || [];
        // x 为从左到右 y 从上到下
        this.direction = options.direction || 'y'  
        this.init = function () {
             this.createDom();
             this.addStyle();
        }
    };
    // 创建dom结构
    MyDropDown.prototype.createDom = function () {
        var myDropDown = $('<div class="secMenu"></div>');
        this.list.forEach( function (ele, index) {
            var oDl = $('<dl></dl>'); 
            if(ele.title) {
                $('<dt>'+ ele.title +'</dt>').appendTo(oDl);
            }
            ele.items.forEach( function (item) {
                $('<dd><a href=' + item.href + '>' + item.name + '</a></dd>').appendTo(oDl);
            })
           oDl.appendTo(myDropDown).css({
               width: ele.width
           });
        })
        $(this.wrap).append(myDropDown);
    }
    // 添加样式
    MyDropDown.prototype.addStyle = function() {
        console.log(this.width);
        $('.secMenu', this.wrap)
        .css({
            width: this.width,
            position: 'absolute',
            top: 31,
            left: 0,
            border: '1px solid #ccc',
            backgroundColor: '#fff'
        }).find('dl')
        .css({    
            borderBottom: '1px solid #f1f1f1',
            overflow: 'hidden',
            padding: '10px 0 10px 15px'
        })
        .find('dt').css({
            fontWeight: 'bold',
            color: '#000'
        }).end()
        .find('dd')
        .css({
            width: this.colWidth,
            float: 'left',
            whiteSpace: 'nowrap',
            lineHeight:'24px'
        })

        if(this.direction == 'x') {
            console.log(this.list.width)
            $('.secMenu', this.wrap).css({
                left: 'auto',
                right: '-84px',
                padding:'10px 0'
            }).find('dl').css({
                float: 'left',
                borderRight: '1px solid #f1f1f1',
                borderBottom: 'none',
                padding: '0px 0px 0px 20px'
            })
            
        }
    }


    $.fn.extend({
        dropDown: function (options) {
             var obj = new MyDropDown(options, this)
             obj.init();
            }
    })
}())