// 轮播图插件

(function () {

    /**
     * 
     * @param {object} options  
     * @param {DOMException} wrap 
     */
    function Swiper(options, wrap) {
        this.wrap = wrap || $('body');
        this.animateType = options.animateType || 'fade';
        this.imgWidth = options.imgWidth || $(wrap).width;
        this.imgHeight = options.imgHeight || $(wrap).height;
        this.showChangeBtn = options.showChangeBtn != undefined ? options.showChangeBtn : true,
            this.showSpotBtn = options.showSpotBtn != undefined ? options.showSpotBtn : true;
        this.imgList = options.imgList || [];
        this.autoChangeTime = options.autoChangeTime || 1000;
        this.isAuto = options.isAuto != undefined ? options.isAuto : true;
        // 存储当前显示的图片的索引值
        this.nowIndex = 0;
        // // 判断动画是否结束  true  代表的就是 动画没有执行完
        // this.flag = true;

        this.timer = null;
        // 初始化轮播图  包含功能：  创建轮播图结构  初始化轮播图样式  轮播的功能
        this.init = function () {
            this.createDom();
            this.initStyle();
            this.bindEvent();
            if (this.isAuto) {
                this.autoChange();
            }
        }
    }
    //   创建轮播图结构 
    Swiper.prototype.createDom = function () {
        var swiperWrapper = $('<div class="my-swiper"></div>');
        var imgWrapper = $('<ul class="swiper-img-wrapper"></ul>');
        var spotDiv = $('<div class="swiper-spot"></div>');
        this.imgList.forEach(function (item, index) {
            $('<li><img src="' + item + '"></img></li>').appendTo(imgWrapper);
            $('<span></span>').appendTo(spotDiv);
        });
        if (this.animateType == 'animate') {
            $('<li><img src="' + this.imgList[0] + '"></img></li>').appendTo(imgWrapper);
        }
        swiperWrapper.append(imgWrapper);

        if (this.showChangeBtn) {
            swiperWrapper.append($('<div class="swiper-left-btn swiper-btn"></div>'))
                .append($('<div class="swiper-right-btn swiper-btn"></div>'))
        }
        if (this.showSpotBtn) {
            swiperWrapper.append(spotDiv);
        }

        $(this.wrap).append(swiperWrapper);

    }
    // 初始化样式
    Swiper.prototype.initStyle = function () {
        $('.my-swiper *', this.wrap).css({
            padding: 0,
            margin: 0,
            listStyle: 'none'
        });
        $(this.wrap).find('.my-swiper').css({
            overflow: "hidden",
            position: "relative",
            height: this.imgHeight
        }).find('.swiper-img-wrapper').css({
            overflow: 'hidden'
        }).find('img').css({
            width: '100%',
            height: "100%"
        }).end().end().find('.swiper-btn').css({
            width: 25,
            height: 35,
            position: "absolute",
            top: 'calc(50% - 17.5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundSize: '100% 80%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }).filter('.swiper-left-btn').css({
            backgroundImage: 'url(./swiper/img/back.png)',
            borderTopRightRadius: '18px 18px',
            borderBottomRightRadius: '18px 18px'
        }).end().filter('.swiper-right-btn').css({
            backgroundImage: 'url(./swiper/img/next.png)',
            borderTopLeftRadius: '18px 18px',
            borderBottomLeftRadius: '18px 18px',
            right: 0,
        });
        $('.my-swiper > .swiper-spot', this.wrap).css({
            position: "absolute",
            bottom: '10px',
            width: '100%',
            left: '20px'
        }).find('span').css({
            display: 'inline-block',
            marginRight: '10px',
            width: 10,
            height: 10,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }).eq(this.nowIndex).css({
            backgroundColor: '#f00'
        })

        if (this.animateType == 'animate') {
            $('.my-swiper >.swiper-img-wrapper', this.wrap).css({
                position: 'absolute',
                left: 0,
                width: this.imgWidth * (this.imgList.length + 1),
                height: this.imgHeight,
            }).find('li').css({
                float: 'left',
                height: this.imgHeight,
                width: this.imgWidth
            })
        } else {
            $('.my-swiper >.swiper-img-wrapper', this.wrap).css({
                width: this.imgWidth,
                height: this.imgHeight,
                position: 'relative',
            }).find('li').css({
                position: 'absolute',
                height: this.imgHeight,
                width: this.imgWidth,
                display: 'none',
            }).eq(this.nowIndex).show()
        }


    }
    // 绑定时事件
    Swiper.prototype.bindEvent = function () {
        var self = this;
        // 写作用于的原因是 防止当前这个代码对页面当中其他相同类名的元素有影响
        $('.swiper-left-btn', this.wrap).on('click', function () {
            clearInterval(self.timer);
            console.log(self.wrap)
            self.change('prev');
        })
        $('.swiper-right-btn', this.wrap).on('click', function () {
            clearInterval(self.timer);
            console.log(self.wrap)
            self.change('next')
        });
        $('.my-swiper > .swiper-spot > span', this.wrap).on('click', function () {
            clearInterval(self.timer);
            self.change($(this).index());
        })
    }
    // 轮播图片切换
    Swiper.prototype.change = function (dir) {
        switch (dir) {
            case 'prev':
                if (this.nowIndex == 0) {
                    if (this.animateType == 'animate') {
                        $('.swiper-img-wrapper', this.wrap).css({
                            left: -this.imgWidth * this.imgList.length
                        })
                    }
                    this.nowIndex = this.imgList.length - 1;
                } else {
                    this.nowIndex--;
                }
                break;
            case 'next':
                if (this.animateType == 'animate' && this.nowIndex == this.imgList.length) {
                    $('.swiper-img-wrapper', this.wrap).css({
                        left: 0,
                    })
                    this.nowIndex = 1;
                } else if (this.animateType == 'fade' && this.nowIndex == this.imgList.length - 1) {
                    this.nowIndex = 0;
                } else {
                    this.nowIndex++;
                }
                break;
            default:
                this.nowIndex = dir;
                break;
        }
        // 动画执行
        var self = this;
        if (this.animateType == 'animate') {
            $('.swiper-img-wrapper', this.wrap).animate({
                left: -this.nowIndex * this.imgWidth
            }, function () {
                clearInterval(self.timer);
                // 当动画结束之后将自动轮播的效果添加上
                if (self.isAuto) {
                    self.autoChange()
                }
            });
        } else {
            $('.swiper-img-wrapper > li', this.wrap).fadeOut().eq(this.nowIndex).fadeIn(function () {
                console.log(self.nowIndex)
                clearInterval(self.timer);
                if (self.isAuto) {
                    self.autoChange()
                }
            });
        }

        $('.my-swiper > .swiper-spot > span', this.wrap).each(function (index, item) {
            //  判断当前显示的图片是不是第一张图片   
            if (index === self.nowIndex % self.imgList.length) {
                $(this).css({
                    backgroundColor: '#f00'
                })
            } else {
                $(this).css({
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                })
            }
        })
    }
    // 自动轮播
    Swiper.prototype.autoChange = function () {
        var self = this;
        this.timer = setInterval(function () {
           self.change('next')
        }, this.autoChangeTime)
    }

    // prototype 在原型链上扩展方法
    $.fn.extend({
        // options接收的轮播图的数据
        swiper: function (options) {
            var obj = new Swiper(options, this);
            obj.init();
            // 保留jquery链式调用的特点
            return this;
        }
    })

}())
