


var swiper = new Swiper('#topBanner', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    speed: 1000,
    autoplay: {
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },


    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }

});
$(".swiper-container").hover(function () {
    (this).swiper.autoplay.stop();
}, function () {
    (this).swiper.autoplay.start();
});


var swiper = new Swiper('#clientLogoSlider', {
    slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    freeMode: true,
    speed: 2000,
    autoplay: {
        delay: 1,
        disableOnInteraction: false,
    },
    breakpoints: {
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});
/*------------ menubar toggle --------------*/
function meutoggle(x) {
    x.classList.toggle("change");
}



/*---------- font size increase decrease script---------------*/
//var $affectedElements = $("body,p,li,h1,h2,h3,h4,h5,h6,a,span,tr,td,th ");

//// Storing the original size in a data attribute so size can be reset
//$affectedElements.each(function () {
//    var $this = $(this);
//    $this.data("orig-size", $this.css("font-size"));
//});

//$("#btn-increase").click(function () {
//    changeFontSize(3);
//})

//$("#btn-decrease").click(function () {
//    changeFontSize(-3);
//})

//$("#btn-orig").click(function () {
//    $affectedElements.each(function () {
//        var $this = $(this);
//        $this.css("font-size", $this.data("orig-size"));
//    });
//})

//function changeFontSize(direction) {
//    $affectedElements.each(function () {
//        var $this = $(this);
//        $this.css("font-size", parseInt($this.css("font-size")) + direction);
//    });
//}



(function ($) {

    function FontSize(dom, options) {
        var defaultSettings = {
            step: 1,
            increaseTimes: 2,
            reduceTimes: 2,
            increaseBtn: '.zoomin',
            reduceBtn: '.zoomout'
        };

        this.settings = $.extend({}, defaultSettings, options);
        this.container = dom;

        this.noFontTags = ['svg', 'IMG', 'use', 'BR', 'VIDEO', 'AUDIO', 'STYLE', 'SCRIPT', 'INPUT'];
        this._init();
        this.$increaseBtn = $(this.settings.increaseBtn);
        this.$reduceBtn = $(this.settings.reduceBtn);

        var that = this;
        this.$increaseBtn.on('click', function () {
            if (that.fontIncrease() === false) {
                that.$increaseBtn.addClass('disable');
            }
            that.$reduceBtn.removeClass('disable');
        });

        this.$reduceBtn.on('click', function () {
            if (that.fontReduce() === false) {
                that.$reduceBtn.addClass('disable');
            }
            that.$increaseBtn.removeClass('disable');
        });

    }

    FontSize.prototype._init = function () {
        this._loopNode(this.container, function () {
            $(this).css('font-size', $(this).css('font-size'));
        });

        this.zoom = 0;
        this.maxZoom = this.settings.step * this.settings.increaseTimes;
        this.minZoom = -this.settings.step * this.settings.reduceTimes;
    };


    FontSize.prototype._loopNode = function (node, fn) {
        var type = node.nodeType,
            childNodes,
            noFontTags = this.noFontTags;


        if (type === 1) {
            childNodes = node.childNodes;
            if (noFontTags.indexOf(node.nodeName) === -1) {
                fn && fn.call(node);
            }

            for (var i = 0, l = childNodes.length; i < l; i++) {
                this._loopNode(childNodes[i], fn);
            }
        }
    };


    FontSize.prototype.fontIncrease = function (step) {
        step = step ? step : this.settings.step;

        if (this.zoom >= this.maxZoom) {
            return false;
        }
        if (this.zoom + step > this.maxZoom) {
            step = this.maxZoom - this.zoom;
        }
        this._loopNode(this.container, function () {
            $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 + step + 'px');
        });
        this.zoom += step;
    };


    FontSize.prototype.fontReduce = function (step) {
        step = step ? step : this.settings.step;

        if (this.zoom <= this.minZoom) {
            return false;
        }
        if (this.zoom - step < this.minZoom) {
            step = Math.abs(this.zoom - this.minZoom);
        }
        this._loopNode(this.container, function () {
            $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 - step + 'px');
        });
        this.zoom -= step;
    };


    FontSize.prototype.clearZoom = function () {
        var zoom = this.zoom;
        console.log(this.zoom);
        this._loopNode(this.container, function () {
            $(this).css('font-size', $(this).css('font-size').slice(0, -2) - 0 - zoom + 'px');
        });
        this.zoom = 0;
    };

    $.fn.FontSize = function (options, param) {
        if (typeof options == 'string') {
            var method = $.fn.FontSize.methods[options];
            if (method) {
                return method(this, param);
            }
        }
        return this.each(function () {
            if (!$.data(this, 'FontSize')) {
                $.data(this, 'FontSize', new FontSize(this, options));
            }
        });
    };

    $.fn.FontSize.methods = {
        fontIncrease: function (jq, step) {
            return jq.each(function () {
                $.data(this, 'FontSize').fontIncrease(step);
            });
        },
        fontReduce: function (jq, step) {
            return jq.each(function () {
                $.data(this, 'FontSize').fontReduce(step);
            });
        },
        clearZoom: function (jq) {
            return jq.each(function () {
                $.data(this, 'FontSize').clearZoom();
            });
        }
    };

})(jQuery);

// Website color contrast js
function myFunction() {
    var element = document.body;
    element.classList.add("dark-mode");
}

function myFunction1() {
    var element = document.body;
    element.classList.remove("dark-mode");
}
/*---------- font size increase decrease script---------------*/
var $affectedElements = $("body,p,li,h1,h2,h3,h4,h5,h6,a,span,tr,td,th ");

//// Storing the original size in a data attribute so size can be reset
$affectedElements.each(function () {
    var $this = $(this);
    $this.data("orig-size", $this.css("font-size"));
});

//$("#btn-increase").click(function () {
//    changeFontSize(3);
//})

//$("#btn-decrease").click(function () {
//    changeFontSize(-3);
//})

$("#btn-orig").click(function () {
    $affectedElements.each(function () {
        var $this = $(this);
        $this.css("font-size", $this.data("orig-size"));
    });
})

//function changeFontSize(direction) {
//    $affectedElements.each(function () {
//        var $this = $(this);
//        $this.css("font-size", parseInt($this.css("font-size")) + direction);
//    });
//}
// Website color contrast js
function myFunction() {
    var element = document.body;
    element.classList.add("dark-mode");
}

function myFunction1() {
    var element = document.body;
    element.classList.remove("dark-mode");
}


// Accessbilitiy toggle
$(document).ready(function () {

    $("#accessbitlity-icon").click(function () {
        $(".aceesbility-div").slideToggle();
    });
});

jQuery(document).ready(function ($) {
    $("#blackContrastView").click(function () {
        localStorage.setItem('screenModeNightTokenState', 'night');
    });

    $("#whiteContrastView").click(function () {
        localStorage.setItem('screenModeNightTokenState', 'day');
    });

    if (localStorage.getItem('screenModeNightTokenState') == 'night') {
        $("body").addClass("dark-mode");
        $("body").removeClass("day");
    }

    if (localStorage.getItem('screenModeNightTokenState') == 'day') {
        $("body").addClass("day");
        $("body").removeClass("dark-mode");
    }

    $('#whiteContrastView').click(function () {
        $("body").addClass("day");
        $("body").removeClass("dark-mode");
        $(".switcher .day").addClass("active");
        $(".switcher .dark-mode").removeClass("active");
    });

    $("#blackContrastView").click(function () {
        $("body").addClass("dark-mode");
        $("body").removeClass("day");
        $(".switcher .dark-mode").addClass("active");
        $(".switcher .day").removeClass("active");
    });
});

