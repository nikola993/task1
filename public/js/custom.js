$(document).ready(function(){
    // slide show za background
 var background = $('html');
 var backgrounds = ['url(public/images/img_about_bg_1.jpg)'
                  , 'url(public/images/img_about_bg_2.jpg)'
                  , 'url(public/images/img_about_bg_3.jpg)'
                  , 'url(public/images/img_about_bg_5.jpg)'];
 var current = 0;
     function nextBackground() {
        current++;
        current = current % backgrounds.length;
        background.css('background-image', backgrounds[current]);
    }
 setInterval(nextBackground, 5000);
    background.css('background-image', backgrounds[0]);
 });

$(document).ready(function(){
    //slide show za fun div
    var next = $('#slide_next');
    var back = $('#slide_back');
    var slide_img = ['url(public/images/img_fun_0.jpg)'
        , 'url(public/images/img_fun_0_1.jpg)'
        , 'url(public/images/img_fun_1.jpg)'
        , 'url(public/images/img_fun_8.jpg)'
        , 'url(public/images/img_fun_9.jpg)'
        , 'url(public/images/img_fun_10.jpg)'
        , 'url(public/images/img_fun_11.jpg)'
        , 'url(public/images/img_fun_12.jpg)'
        , 'url(public/images/img_fun_13.jpg)'
        , 'url(public/images/img_fun_14.jpg)'];
 var current_next = 1;
 var current_back = 0;
    next.click(function() {
        if (current_next == (slide_img.length)-1)
            current_next = 0;
        else
            current_next++;
        if (current_back == (slide_img.length)-1)
            current_back = 0;
        else
            current_back ++;
        next.css('background-image', slide_img[current_next]);
        back.css('background-image', slide_img[current_back]);
        });

   back.click(function() {
       if (current_next == 0)
           current_next = (slide_img.length)-1;
       else
           current_next --;
       if (current_back == 0)
           current_back = (slide_img.length)-1;
       else
           current_back --;
       next.css('background-image', slide_img[current_next]);
       back.css('background-image', slide_img[current_back]);
    });
    next.css('background-image', slide_img[current_next]);
    back.css('background-image', slide_img[current_back]);
});

