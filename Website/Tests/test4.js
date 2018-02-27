
/*
 * this website: https://www.techrepublic.com/article/build-a-carousel-with-javascript/
 * was helpful when formulating this script
 */

 var stor = -1;
 var maxstor = 3;
 var timeout = 3500;

 function autorot() {
   showNext();
   setTimeout('autorot();', timeout);
 }

 function rotateDiv(stor){
   var divs = document.getElementById("carousel").getElementsByTagName("div");
   for (var i=0; i < divs.length; i++ ) {
     var div = divs[i];
     if ( (div.id != "")) {
       	if(i != stor){
               	div.style.display = "none";
       	}
       	else{
       		div.style.display = "block";
        }
      }
   }

   var spans = document.getElementById("nav").getElementsByTagName("span");
   for (var i=0; i < spans.length; i++ ) {
     var span = spans[i];
     if ( (span.id != "")) {
       	if(i != stor)
          span.className = "none";
       	else
       		span.className = "selStory";
     }
   }
 }

 function showNext(){
   if(stor < maxstor)
     stor++;
   else
     stor=0;

   rotateDiv(stor);
 }

 function stoprot() {
   clearTimeout(timeout);
 }

 function showPrev(){
 	if(stor > 0)
 		stor--;
 	else
 		stor=maxstor;

 	rotateDiv(stor);
 }

 function showOne(){
 	stor=0;
 	rotateDiv(stor);
 }
 function showTwo(){
 	stor=1;
 	rotateDiv(stor);
 }
 function showThree(){
 	stor=2;
 	rotateDiv(stor);
 }
 function showFour(){
 	stor=3;
 	rotateDiv(stor);
 }
