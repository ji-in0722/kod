var _documentRoot = '';
var _fileRoot = _documentRoot + '/datas';
/* LOADING */
var Loading = function() {
    $('div#dev932Loading').remove();
    var baseLoading = $('<div>').addClass('loadingBase').attr('id','dev932Loading').css({ "filter":"alpha(opacity=0)", "opacity":"0" });
    var bgLoading = $('<div>').addClass('loadingBg');
    var aniLoading = $('<div>').addClass('loadingContent').html('<span>로딩중입니다 잠시만 기다려주세요 ( Wait Please! Loading... )</span>');
    baseLoading.append(bgLoading, aniLoading);
    $('body').append(baseLoading);
    baseLoading.animate({ "filter":"alpha(opacity=100)", "opacity":"1" }, 300);
};

var UnLoading = function() {
    $('div#dev932Loading').stop().animate({ "filter":"alpha(opacity=0)", "opacity":"0" }, 200, function() { $(this).remove(); });
};
/* LOADING */


var browser = (function() {
  var s = navigator.userAgent.toLowerCase();
  var match = /(webkit)[ \/](\w.]+)/.exec(s) ||
              /(opera)(?:.*version)?[ \/](\w.]+)/.exec(s) ||
              /(msie) ([\w.]+)/.exec(s) ||
              /(mozilla)(?:.*? rv:([\w.]+))?/.exec(s) ||
             [];
  return { name: match[1] || "", version: match[2] || "0" };
}());

var WarningBrowser = function() {
    if (browser.name == 'msie' && browser.version <= 8) {
        var warning = $('<div>').attr('id', 'warningBrowser');
        var warningBg = $('<div>').addClass('warningBg');
        var warningInfor = $('<div>').addClass('warningInfor');
        var warningMsg = $('<span>').addClass('warningMsg').html('&quot;Microsoft Internet Explorer 7.0&quot; 이하 버전에서는 스크립트가 작동하지 않거나 화면일부가 일그러져 보일 수 있습니다');

        var warningControl = $('<div>').addClass('warningControl');
        var warningIgnore = $('<a>').attr({ 'href':'javascript:;', 'title':'무시하고 사용하기' }).addClass('warningIgnore').html('무시하고 사용하기').click(function() {
            warning.remove();
        });
        var upgradeBrowser = $('<div>').addClass('upgradeBrowser');
        var upgradeBrowserTitle = $('<span>').addClass('title').text('최신브라우저 다운로드');
        var upgradeBrowserList = $('<ul>').addClass('browserList');
            var msie = $('<li>');
            var msieLink = $('<a>').addClass('msie').attr({ 'href':'http://windows.microsoft.com/ko-kr/internet-explorer/download-ie', 'target':'_blank', 'title':'Microsoft Internet Explorer'}).text('Internet Explorer');
            var chrome = $('<li>');
            var chromeLink = $('<a>').addClass('chrome').attr({ 'href':'http://www.google.com/chrome', 'target':'_blank', 'title':'Google Chrome'}).text('Chrome');
            var firefox = $('<li>');
            var firefoxLink = $('<a>').addClass('firefox').attr({ 'href':'https://www.mozilla.org/ko/firefox/', 'target':'_blank', 'title':'Mozilla Firefox'}).text('Firefox');
            var opera = $('<li>');
            var operaLink = $('<a>').addClass('opera').attr({ 'href':'http://www.opera.com/ko', 'target':'_blank', 'title':'Opera'}).text('Opera');
            var safari = $('<li>');
            var safariLink = $('<a>').addClass('safari').attr({ 'href':'http://www.apple.com/kr/safari/', 'target':'_blank', 'title':'Apple Safari'}).text('Safari');

            msie.append(msieLink);
            chrome.append(chromeLink);
            firefox.append(firefoxLink);
            opera.append(operaLink);
            safari.append(safariLink);
        upgradeBrowserList.append(msie, chrome, firefox, opera, safari);
        upgradeBrowser.append(upgradeBrowserTitle, upgradeBrowserList);
        warningControl.append(upgradeBrowser, warningIgnore);

        warning.append(warningBg, warningInfor.append(warningMsg, warningControl));
        $('body').append(warning);
    };
};

var Alert = function(msg, act) {
    alert(msg);
    if (act) act();

    // msg = !msg.length ? '' : msg.replace(/\\r\n/g, '<br />');

    // var newAlert = $('<div>').html(msg);
    // $('body').append(newAlert);
    //
	// try {
	// 	newAlert.dialog({
	// 		modal: true,
	// 		buttons: {
	// 			"OK": function() {
	// 				$(this).dialog('close');
	// 				newAlert.remove();
	// 				if (act) { act(); };
	// 			}
	// 		}
	// 	});
	// } catch(e) {
	// 	alert(msg);
	// 	if (act) { act(); };
	// };
};

var Confirm = function(msg, ConfirmAct, CancelAct) {
    var qu = confirm(msg);

    if (qu == true) {
        if (ConfirmAct) ConfirmAct();
    } else {
        if (CancelAct) CancelAct();
    };
    // msg = !msg.length ? '' : msg.replace(/\\r\n/g, '<br />');
    //
    // var newAlert = $('<div>').html(msg);
    // $('body').append(newAlert);
    //
    // newAlert.dialog({
    //     modal: true,
    //     buttons: {
    //         "OK": function() {
    //             $(this).dialog('close');
    //             newAlert.remove();
    //             if (ConfirmAct) { ConfirmAct(); };
    //         },
    //         "CANCEL": function() {
    //             $(this).dialog('close');
    //             newAlert.remove();
    //             if (CancelAct) { CancelAct(); };
    //         }
    //     }
    // });
};

var Anchor2Href = function() {
    if ($(this).data("href")) {
        window.location = $(this).data("href");
    } else {
        if ($(this).data("open")) {
            window.open($(this).data("open"));
        };
    };
};

var UrlDecode = function(value) {
    return decodeURIComponent(value).replace(/\+/g, ' ');
};


var AddZero = function(value, length) {
    value = "" + value;
    if (value.length < length) {
        do {
            value = "0" + value;
        } while (value.length < length);
    };

    return value;
};

var AddCommas = function(digit) {
    digit += '';
    x = digit.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
};

var EngOnly = function() {
    $(this).val($(this).val().replace( /\W/gi, '' ));
};

var ChkEmail = function(email) {
	var returnValue = false;

	email = $.trim(email);
	if (email.length) {
		var regExp = /[a-z0-9]{2,}@[a-z0-9-]{2,}\.[a-z0-9]{2,}/i;
	    if (regExp.test(email)) {
	    	returnValue = true;
	    };
	};

	return returnValue;
};

var GotoTop = function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
};



var FrameAutoHeight = function() {
    var minHeight = $(this).data('min-height');
    var chkHeight = $(this).contents().find('body')[0].scrollHeight + 20;
    var confirmHeight = minHeight > chkHeight ? minHeight : chkHeight;
    $(this).height(confirmHeight);
};
var FrameAutoHeightInit = function() {
    $('iframe#boardCmt').load(FrameAutoHeight);
    $('iframe.autoResize').load(FrameAutoHeight);
};

var ZoomResize = function() {
    var img = $('img#gsZoomImg');
    if (img.length) {
        var imgW = img.width();
        var imgH = img.height();

        var oriDocW = $(window).width();
        var oriDocH = $(window).height();

        var docW = $(window).width() - 200;
        var docH = $(window).height() - 100;

        var setW = 0;
        var setH = 0;

        if(imgW > docW || imgH > docH) {
            if((imgW / docW) == (imgH / docH)) {
                setW = docW;
                setH = docH;
            } else if((imgW / docW) < (imgH / docH)) {
                setW = docH * (imgW / imgH);
                setH = docH;
            } else {
                setW = docW;
                setH = docW * (imgH / imgW);
            };
        } else {
            setW = imgW;
            setH = imgH;
        };

        // img.css({ 'width':setW + 'px', 'height': setH + 'px' });
        // img.parent('div.content').css({ 'left':((oriDocW - img.outerWidth(true)) / 2) + 'px', 'top':((oriDocH - img.outerHeight(true)) / 2) + 'px' });

        img.animate({'filter':'alpha(opacity=100)', 'opacity':'1'}, 200);
    };
};

var ZoomPopup = function() {
	var newPop = $('<div>').attr('id', 'gsPopup');
	var newPopBg = $('<div>').addClass('background');

	var newPopContents = $('<div>').addClass('contents');

	var newPopControl = $('<div>').addClass('control');
	var newPopClose = $('<button>').attr({ 'type':'button', 'title':'CLOSE' }).addClass('close').html('<span>CLOSE</span>').click(function() {
		$('div#gsPopup').remove();
	});

	var newPopContent = $('<div>').addClass('content');
	var imgUrl = $(this).children('img').length ? $(this).children('img').attr('src') : $(this).attr('src');
    imgUrl = imgUrl ? imgUrl : $(this).children('span.thumb').css('background-image');
    console.log(imgUrl);
	var newSpan = $('<span>').css({'background-image': 'url('+ imgUrl +')'}).addClass('thumb');
	var newImg = $('<img>')
					.attr({ 'src':imgUrl, 'alt':'확대 이미지 :: 클릭하시면 창이 닫힙니다', 'id':'gsZoomImg' })
					.click(function() {
						$('div#gsPopup').remove();
					})
					.bind('load', ZoomResize);
	var txt = $(this).children('div.title').text();
    txt = txt ? txt : $(this).attr('title');
	var newImgTitleBox = $('<div>').addClass('popupTitle');
	var newImgTitle = $('<span>').text(txt);


	newPopControl.append(newPopClose);
	newPopContent.append(newSpan.append(newImgTitleBox.append(newImgTitle)).append(newImg).append(newPopControl));
	newPop.append(newPopBg, newPopContents.append(newPopContent));
	$('body').append(newPop);

	// var imgWidth = $('div#gsPopup .content img').width();
	// var imgHeight = $('div#gsPopup .content img').height() / 2;
	//
	// $('div#gsPopup .contents .thumb').css({'margin-top': '-' + imgHeight + 'px'});
	// if($('div#gsPopup .contents .thumb .popupTitle').text()) {
	// 	$('div#gsPopup .contents .thumb .popupTitle').css({'width': imgWidth + 'px', 'margin-left': '-' + (imgWidth / 2) + 'px'});
	// } else {
	// 	$('div#gsPopup .contents .thumb .popupTitle').hide();
	// }
	// $('div#gsPopup .contents .thumb .control').css({'width': (imgWidth + 10) + 'px'});

    return false;
};



$(function() {
    WarningBrowser();

    $("button.anchor").click(Anchor2Href);

    $('input.engOnly').bind('blur, change', EngOnly);
    $('button.gotoTop').click(GotoTop);

    FrameAutoHeightInit();
});
