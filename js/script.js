$(document).ready(function() {
   $('#lightSlider').lightSlider({
       item:4,
       loop:true,
       slideMove:2,
       easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
       speed:600,
       responsive : [
           {
               breakpoint:1400,
               settings: {
                   item:3,
                   slideMove:1,
                   slideMargin:6,
                 }
           },
           {
               breakpoint:1070,
               settings: {
                   item:2,
                   slideMove:1
                 }
           },
           {
            breakpoint:710,
            settings: {
                item:1,
                slideMove:1
              }
        }

       ]
   });  
 });