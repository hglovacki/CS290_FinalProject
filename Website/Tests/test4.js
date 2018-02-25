
/*
 * this website: https://www.techrepublic.com/article/build-a-carousel-with-javascript/
 * was helpful when formulating this script
 */

 var stor = -1;
 var maxstor = 3;
 var timeout = 2500;

 function autorot() {
   showNext();
   setTimeout('autorot();', timeout);
 }


 function rotateDiv(stor){
   var divs = document.getElementById("storyContainer").getElementsByTagName("div");
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

 function showStoryOne(){
 	stor=0;
 	rotateDiv(stor);
 }
 function showStoryTwo(){
 	stor=1;
 	rotateDiv(stor);
 }
 function showStoryThree(){
 	stor=2;
 	rotateDiv(stor);
 }
 function showStoryFour(){
 	stor=3;
 	rotateDiv(stor);
 }
