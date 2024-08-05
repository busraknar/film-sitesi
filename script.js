const arrows= document.querySelectorAll(".arrow");
// console.log(arrows); 1.53 sonrası
const movieLists= document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
   arrow.addEventListener("click", function(){
    movieLists[i].style.transform = `translateX(${movieLists[i].
    computedStyleMap().get("transform")[0].x.value}px)`
});   //alt+ 96, alt gr + virgül  //backtick keyword
  

   //console.log(movieLists[i].computedStyleMap().get("transform")[0].x.value);
});


