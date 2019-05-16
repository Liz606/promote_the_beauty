webpackJsonp([3],{

/***/ 0:
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! ../css/base.css */ 2);
	__webpack_require__(/*! ../css/public.css */ 6);
	__webpack_require__(/*! ../css/index.css */ 23);
	__webpack_require__(/*! ./base.js */ 10);
	__webpack_require__(/*! ./slider.js */ 25);
	__webpack_require__(/*! ./inforSlider.js */ 26);
	__webpack_require__(/*! ./jquery.waypoints.min.js */ 11);
	/* ------------------------------------------------------------
	 * 载入公共模板
	 * ------------------------------------------------------------ */
	var header = __webpack_require__(/*! ../tmpl/header.html */ 13);
	var footer = __webpack_require__(/*! ../tmpl/footer.html */ 17);
	$('#header').html(header);
	$('#footer').html(footer);
	__webpack_require__(/*! ./nav.js */ 18); //先载入header模板，base才能操作其中dom
	
	
	/* ------------------------------------------------------------
	 * 新闻模块悬停切换效果
	 * ------------------------------------------------------------ */
	var newBigList = $('.newBig').children();
	var newLookbookList = $('.newLookbook').children();
	newBigList.each(function () {
	    $(this).mouseenter(function () {
	        var index = $(this).attr('index');
	        newLookbookList.filter('.block').removeClass('block').addClass('none');
	        newLookbookList.eq(index).removeClass('none').addClass('block');
	    });
	});
	/* ------------------------------------------------------------
	 * 专家滚动栏
	 * ------------------------------------------------------------ */
	$('.expertList').sliderFunc();
	/* ------------------------------------------------------------
	 * jQuery滚动监听
	 * ------------------------------------------------------------ */
	
	$(function functionName() {
	    $('.section1, .section2, .section3, .section4, .section5').waypoint(function (direction) {
	        if (direction === 'down') {
	            $(this.element).addClass('animation-slide-up');
	        }
	    }, {
	        offset: '70%'
	    });
	    $('#footer').waypoint(function (direction) {
	        if (direction === 'down') {
	            $(this.element).addClass('animation-slide-up');
	        }
	    }, {
	        offset: '100%'
	    });
	});
	
	$('.newsSlider').inforSlider(5);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 18:
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function () {
		/**
	  * 导航条
	  * 
	  */
		var hashTag = location.hash.indexOf('?') != -1 ? location.hash.indexOf('?') : location.hash.length;
		var locationHash = location.hash.slice(0, hashTag);
	
		var navList = $('.navList').children();
		var underLine = $('.underLine');
		var BarSecend = $('.BarSecend').children();
		var width0 = parseInt(navList.eq(0).css('width'), 10),
		    width1 = parseInt(navList.eq(1).css('width'), 10),
		    width2 = parseInt(navList.eq(2).css('width'), 10),
		    width3 = parseInt(navList.eq(3).css('width'), 10),
		    width4 = parseInt(navList.eq(4).css('width'), 10),
		    width5 = parseInt(navList.eq(5).css('width'), 10),
		    width6 = parseInt(navList.eq(6).css('width'), 10);
		var left0 = 0,
		    left1 = width0,
		    left2 = left1 + width1,
		    left3 = left2 + width2,
		    left4 = left3 + width3,
		    left5 = left4 + width4,
		    left6 = left5 + width5;
		var widthList = [width0, width1, width2, width3, width4, width5, width6];
		var leftList = [left0, left1, left2, left3, left4, left5, left6];
		var currentNav = locationHash.slice(1, 2) || 0;
		underLine.css({
			left: leftList[currentNav],
			width: widthList[currentNav]
		});
		navList.each(function () {
			var $this = $(this);
			$this.mouseenter(function () {
				var index = $this.attr('index');
				underLine.stop();
				underLine.animate({ left: leftList[index], width: widthList[index] }, 300);
				BarSecend.filter('.h120').removeClass('h120').addClass('h0');
				BarSecend.eq(index).removeClass('h0').addClass('h120');
			});
		});
		$('.navBar').mouseleave(function () {
			BarSecend.filter('.h120').removeClass('h120').addClass('h0');
			underLine.animate({ left: leftList[currentNav], width: widthList[currentNav] }, 300);
		});
		/**
	  * 二级导航条
	  * 
	  */
		var secendNavList = $('.secendNavList').children();
		var secendNavunderLine = $('.secendNavunderLine');
		var secendContent = $('.secendContent').children();
		secendNavList.each(function () {
			var $this = $(this);
			var index = $this.attr('index');
			$this.mouseenter(function () {
				secendNavunderLine.stop();
				secendNavunderLine.animate({ left: index * 150 }, 300);
			});
		});
		$('.secendNavList').mouseleave(function () {
			secendNavunderLine.animate({ left: parseInt(secendContent.filter('.block').attr('index'), 10) * 150 });
		});
		/**
	  * 二级导航条显示情况
	  * 
	  */
		secendNavunderLine.css({ left: parseInt(secendContent.filter('.block').attr('index'), 10) * 150 });
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 23:
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 25:
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.sliderFunc = function () {
	    var _super = this;
	    var animated = false;
	    var _const = _super.children().length;
	    var timer;
	    var _point = 'point';
	    var index = 0; //记录点击
	    var sliderWidth = Math.round(parseInt($(_super).width(), 10)) / 3;
	    var _stat = false;
	    //将轮播图最后一个移动到第一个
	
	    var Children = $(_super).children();
	    var p = 1; //错位个数
	    var start = {},
	        current = {};
	    //动态设置滚动元素的宽度，left和index编号
	    $.each(Children, function (i) {
	        $(this).attr({ 'index': i });
	        $(this).css({ 'width': sliderWidth + 'px', 'left': $(this).attr('index') * sliderWidth + 'px' });
	        $(this).attr({ 'index': i });
	        // $(this).html($(this).attr('index'));//输出当前页号
	    });
	    if (_const > 3) {
	        autoPlay(sliderWidth);
	    };
	
	    //向左滚动一页
	    function Arrow_r(sw) {
	        console.log('Arrow_r' + index);
	        if (!animated) {
	            index++;
	            if (index == _const) {
	                index = 0;
	            }
	            console.log("当前页面" + index);
	            animate(-sw);
	        }
	    }
	    //向右滚动一页
	    function Arrow_l(sw) {
	        console.log('Arrow_l' + index);
	        if (!animated) {
	            index--;
	            if (index == -1) {
	                index = _const - 1;
	            }
	
	            animate(sw);
	        }
	    }
	    //自动向左滚动
	    function autoPlay(sw) {
	        console.log('autoPlay' + index);
	        timer = setInterval(function () {
	            Arrow_r(sw);
	        }, 5000);
	    }
	    //停止自动滚动
	    function stopAuto() {
	        console.log('stopAuto');
	        clearInterval(timer);
	    }
	    //滚动函数
	    function animate(wid) {
	        //wid是绝对偏移量，带符号
	        animated = true;
	        stopAuto();
	        if (wid == 0) {
	            return;
	        };
	        var time = sliderWidth / 1000; //滚动时间
	        var left; //目的偏移量
	        var leftCorrt; //当前偏移量
	        var stat = 0; //记录动画次数
	
	
	        $.each(Children, function () {
	            leftCorrt = parseInt($(this).css('left'), 10);
	            left = leftCorrt + wid;
	            //移动
	            $(this).animate({ left: left }, { quequ: false, complete: function () {
	                    stat++;
	                    if (stat == _const) {
	                        //监听移动次数以便允许用户其他操作
	                        animated = false;
	                        autoPlay(sliderWidth);
	                        Children.filter(function () {
	                            if (parseInt($(this).css('left'), 10) == -sliderWidth) {
	                                return $(this);
	                            }
	                        }).css('left', (_const - 1) * sliderWidth);
	                    };
	                } });
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 26:
/*!*******************************!*\
  !*** ./src/js/inforSlider.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {$.fn.inforSlider = function (_stat) {
	    var _super = this;
	    var animated = false;
	    var _const = _super.children().length;
	    var timer;
	    var _point = 'point';
	    var index = 0; //记录点击
	    var sliderWidth = Math.round(parseInt($('.container').width() / _stat, 10));
	
	    var Children = $(_super).children();
	    var p = 1; //错位个数
	    var start = {},
	        current = {};
	    //动态设置滚动元素的宽度，left和index编号
	    $.each(Children, function (i) {
	        $(this).attr({ 'index': i });
	        $(this).css({ 'width': sliderWidth + 'px', 'left': ($(this).attr('index') - 1) * sliderWidth + 'px' });
	    });
	    $(_super).parent().children().filter('.arr-l').click(function () {
	        Arrow_l(sliderWidth);
	    });
	    $(_super).parent().children().filter('.arr-r').click(function () {
	        Arrow_r(sliderWidth);
	    });
	
	    //向左滚动一页
	    function Arrow_r(sw) {
	        if (!animated) {
	            if (parseInt(Children.eq(_const - 1).css('left'), 10) == (_stat - 1) * sliderWidth) {
	                return;
	            };
	            index++;
	            if (index == _const) {
	                index = 0;
	            }
	            console.log("当前页面" + index);
	            animate(-sw);
	        }
	    }
	    //向右滚动一页
	    function Arrow_l(sw) {
	        if (!animated) {
	            if (parseInt(Children.eq(0).css('left'), 10) == 0) {
	                return;
	            };
	            index--;
	            if (index == -1) {
	                index = _const - 1;
	            }
	
	            animate(sw);
	        }
	    }
	    //滚动函数
	    function animate(wid) {
	        //wid是绝对偏移量，带符号
	        animated = true;
	        if (wid == 0) {
	            return;
	        };
	        var time = sliderWidth / 1000; //滚动时间
	        var left; //目的偏移量
	        var leftCorrt; //当前偏移量
	        var stat = 0; //记录动画次数
	
	
	        $.each(Children, function () {
	            leftCorrt = parseInt(this.style.left);
	            left = leftCorrt + wid;
	            //移动
	            $(this).animate({ left: left }, { quequ: false, complete: function () {
	                    stat++;
	                    if (stat == _const) {
	                        //监听移动次数以便允许用户其他操作
	                        animated = false;
	                    };
	                } });
	        });
	    }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ }

});
//# sourceMappingURL=index.bundle.js.map