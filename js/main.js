$('.modal').on('hidden.bs.modal', function(e){
  $(this).find(".playerid").attr("src",$(this).find(".playerid").attr("src"));

})

function toggle(btn){
  var video=$(btn).paretns(".modal-content").find("iframe")
  let videoLink=$(video).attr("src")
  $(video).currentTime=0;
  $(video).attr("src","");
  $(video).attr("src",videoLink);

}