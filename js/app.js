//Initial Thinking For Mouse Wheel Event
//function lockScroll() {
//    var scrollPosition = [
//        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
//        self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//      ];
//    var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
//    html.data('scroll-position', scrollPosition);
//    html.data('previous-overflow', html.css('overflow'));
//    html.css('overflow', 'hidden');
//    window.scrollTo(scrollPosition[0], scrollPosition[1]);
//    console.log("Lock Scroll");
//}
//
//function unlockScroll() {
//    var html = jQuery('html');
//    var scrollPosition = html.data('scroll-position');
//    html.css('overflow','auto');
//    window.scrollTo(scrollPosition[0], scrollPosition[1])
//    console.log("Unlock Scroll");
//}

//Load Google Fonts
 WebFontConfig = {
    google: { families: [ 'Roboto:400,100,100italic,300,300italic,400italic,500,700,700italic,900,900italic,500italic:latin' ] }
  };

  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

$(document).ready(function () {
    



    
    //Go to Top of Page when Image Clicked
    $(".backToTop").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    //Scroll To Various Sections of Page

    //Listner Function for Case Studies   
    //mouseover and mouseleave
    $("#Work, #Join-Us").on('mouseover', 'div', function () {
       var check = $(this).attr('class');
        $(this).find(".overlayEffect").show();
       console.log("Hover action for " + check);
    }).mouseout(function() {
          $(this).find(".overlayEffect").hide();
    });

});