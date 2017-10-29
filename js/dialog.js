;(function($){
$.fn.dialog=function(opt){
    var set=$.extend({
        content:"内容",
        but:["确认","取消"]
    },opt)
  return $(this).each(function(){
         var dia=`<div class="mark"></div>
               <div class="dialog">
                    <p>&times; </p>
                    <div class="con">${set.content}</div>
                    <span>${set.but[0]}</span><span>${set.but[1]}</span>
               </div>`;
          $(dia).prependTo("body"); 
          $(".mark").height($(document).height())
         function close(){
            $(".mark").remove();
            $("p").parents(".dialog").remove();
            $("span").parents(".dialog").remove();
         } 
         console.log($("p").parents(".dialog"))
         $(".dialog").on("click","span",function(){
            console.log($(this).index())
            if($(this).index()==2){
                close()
            }
         })
         
         $("p").on("mouseover",function(){
            $(this).show().css({"background":"red","color":"#fff"})
         }).on("mouseout",function(){
            $(this).css({"background":"","color":"#000"})
         })
         $("p").on("click",function(){
            close()
         })
  })


}
})(jQuery)