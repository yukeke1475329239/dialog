function Dialog(opt){
   var set={
       content:"您确定要删除吗?",
       but:["确定","取消"]
   }
   for(var key in opt){
      set[key]=opt[key];
   }
   this.but=opt.but;
   this.content=opt.content;
   this.createHTML();
   
}

Dialog.prototype={
    // 创建元素
   createHTML:function(){
    var _this=this;
     var mark=document.createElement("div"),
         dialog=document.createElement("div"),
         con=document.createElement("div");
         p = document.createElement("p");
         con.innerHTML=this.content;
         con.className="con"
         dialog.appendChild(con);
         mark.style.height=document.documentElement.clientHeight+"px";
         p.innerHTML="&times;"
         mark.className="mark";
         dialog.className="dialog";
         dialog.appendChild(p)
         for(var i=0;i<this.but.length;i++){
             var span=document.createElement("span");
             span.innerHTML=this.but[i];
             dialog.appendChild(span)
             if(span.innerHTML=="确定"){
                span.onclick=function(){
                    _this.closeHTML(mark,dialog);
                }
             }
         }
         document.body.insertBefore(dialog,document.body.childNodes[0])
         document.body.insertBefore(mark,document.body.childNodes[0])
         p.onclick=function(){
            _this.closeHTML(mark,dialog);
         }

    },
    closeHTML:function(mark,dialog){
        console.log(document.documentElement.clientHeight)
        document.body.removeChild(mark)
         document.body.removeChild(dialog)
    }



}