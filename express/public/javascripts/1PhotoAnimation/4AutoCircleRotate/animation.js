
window.onload = function() { 
  var photosDom = document.getElementById('photos');
  //获取图片数组
  var images = photosDom.getElementsByTagName('img'); 
  //获取图片数量
  var len = images.length;        
  //计算每张图片按Y轴旋转的角度 
  var deg = Math.floor(360 / len);                    
  for(var i = 0; i < len;i++){
      images[i].style = 'transform : rotateY(' + deg * i + 'deg)'; //deg前面不要加空格
      for(var i = 0; i < len;i++){
        images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(380px)'; //deg前面不要加空格
      }
  }

  var x = 0;
  setInterval(function(){
    photosDom.style.transform = "rotateX(-10deg) rotateY("+ (x++) * 0.2 +"deg)";
  },30);

}