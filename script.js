const toggleMenu = () => {
   document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

window.addEventListener('resize', function(event) {
   document.body.dataset.nav = "false";
}, true);

$(document).ready(function(){
   var search = true;

   $("#search-btn").click(function(){
      if($(".link").is(":visible")){
         $("input").css('transform', 'translateX(0%)');
         $(".search-container").css('width', '400px');
         $("input").css('display', 'block');
         $(".link").toggle();
      }
      else {
         $(".search-container").css('width', '60px');  
         $("input").css('transform', 'translateX(50%)');       
         setTimeout(function() {
               $(".link").toggle().delay(300);
               $("input").css('display', 'none');
            }, 300);
      }
   });
 });
