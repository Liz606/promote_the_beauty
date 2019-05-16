webpackJsonp([2],{

/***/ 0:
/*!**************************!*\
  !*** ./src/js/expert.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! ../css/base.css */ 2);
	__webpack_require__(/*! ../css/public.css */ 6);
	__webpack_require__(/*! ../css/expert.css */ 21);
	__webpack_require__(/*! ./base.js */ 10);
	__webpack_require__(/*! ./jquery.waypoints.min.js */ 11);
	__webpack_require__(/*! ./scrollmoniter.js */ 12);
	var header = __webpack_require__(/*! ../tmpl/header.html */ 13);
	var footer = __webpack_require__(/*! ../tmpl/footer.html */ 17);
	$('#header').html(header);
	$('#footer').html(footer);
	__webpack_require__(/*! ./nav.js */ 18); //先载入header模板，base才能操作其中dom
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! jquery */ 1)))

/***/ },

/***/ 12:
/*!*********************************!*\
  !*** ./src/js/scrollmoniter.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/* ------------------------------------------------------------
	 * jQuery滚动监听
	 * ------------------------------------------------------------ */
	
	$(function functionName() {
	    $('.section').waypoint(function (direction) {
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

/***/ 21:
/*!****************************!*\
  !*** ./src/css/expert.css ***!
  \****************************/
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=expert.bundle.js.map