let btn1 = $('.btn1');
let btn2 = $('.btn2');
let btn3 = $('.btn3');
function init() {
}

let currentProgress = 0;
function init() {
   btn1.click(function() {
       currentProgress += 1;
       console.log('currentProgress = ', currentProgress); 
       $('.progress-bar').attr("style", "width: " + currentProgress + "%");
   });

   btn2.click(function() {
       currentProgress += 3;
       console.log('currentProgress = ', currentProgress); 
       $('.progress-bar').attr("style", "width: " + currentProgress + "%");
   });

   btn3.click(function() {
         currentProgress += 7;
         console.log('currentProgress = ', currentProgress); 
         $('.progress-bar').attr("style", "width: " + currentProgress + "%");
     });

}


$(document).ready(init);
