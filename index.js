console.log("This is index.js file");
// first we will contain all variables
//   1.collect all arrows

let arrows = document.querySelectorAll(".arrow");
//   2.collect container to put pictures
let imageContainer = document.querySelector("#canvas");
// console.log("canvas",canvas);
//   3.collect pictures in Array 
let pictureArray = ['image1','image2','image3','image4'];
//   4.for each loop in arrow
let counter = 0;
arrows.forEach((arrow)=>{
    // console.log(arrow);
    arrow.addEventListener("click",(e)=>{
        if(e.target.parentElement.classList.contains("left")){
            counter--;
            if(counter<0){
                counter = pictureArray.length-1;
            }
            imageContainer.style.backgroundImage = `url(img/${pictureArray[counter]}.png)`
    
        }
        if(e.target.parentElement.classList.contains("right")){
            counter++;
            if(counter>pictureArray.length-1){
                counter = 0;
            }
            imageContainer.style.backgroundImage = `url("img/${pictureArray[counter]}.png")`
        }
    })
    })

