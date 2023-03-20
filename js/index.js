$('.banner-main').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
  });
function minar(evt,cityName){
  var i,tabcontents,tablinks;
  var tabcontents= document.getElementsByClassName("tab-contents");
  for(i=0;i<tabcontents.length;i++){
    tabcontents[i].style.display="none";
  }
  var tablinks=document.getElementsByClassName("tab-links");
  for(i=0;i< tablinks.length;i++){
    tablinks[i].className=tablinks[i].className.replace("active","")
  }
  document.getElementById(cityName).style.display="block";
  evt.currentTarget.className +="active"
}
new VenoBox({
  selector: '.my-video-links',
});
$(".feature-slide").slick({
  slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:".slidePrev",
    nextArrow:".slideNext"

})