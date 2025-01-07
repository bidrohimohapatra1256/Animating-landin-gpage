 var page1Content = document.querySelector("#page1content")
 var cursor = document.querySelector("#cursor")

 page1Content.addEventListener("mousemove", function(dets){
cursor.style.left =dets.x+"px"
cursor.style.top =dets.y+"px"

 })