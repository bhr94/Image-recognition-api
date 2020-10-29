


// const { constructFromObject } = require("cloudmersive-image-api-client/src/ApiClient");

const path1 = "./assets/";
const path2 = "/Users/baharmutadayin/Documents/hakathon-project/assets/"
const img_input = document.querySelector(".img_fileInput");
const container = document.querySelector(".container");
const canvas = document.querySelector(".can_vas")
let img_src =undefined;
let img_title = undefined;
// console.log(img_input.files[0])
const img = document.querySelector(".img");
console.log(parseInt(img.offsetWidth));
console.log(parseInt(img.offsetHeight));







img_input.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  if(fileList.length > 0) {
    console.log(fileList[0].name)
    img_title = fileList[0].name;
    img.src = path1 + fileList[0].name;
    img_src = img.src;
    console.log(img.naturalWidth);
    console.log(img.naturalHeight);
  }
   


getData(path2, img_title)
.then(result =>{
    
    printAge(result.data.PeopleWithAge[0].AgeClass);
    createBox();
    // createBox(result.data.PeopleWithAge[0].FaceLocation);
    // result.data.PeopleWithAge[0].FaceLocation, img
})
.catch(error=>{
    console.log(error)
})
  
}

const createBox =() =>{
    // const box = document.createElement("div");
    // box.classList.add(".bounding-box");
    // box.style.left = "10px";
    // box.style.top = "40px";
    // box.style.right = "50px";
    // box.style.bottom = "10px";
    // container.appendChild(box);
//  console.log(data)
    var ctx = canvas.getContext("2d");
    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "blue";
    // ctx.rect(data.LeftX, data.TopY, data.rightX-data.LeftX, data.bottomY-data.TopY);  
    ctx.rect(31, 50,50, 70);  
    ctx.stroke(); 
    
}



const printAge =(data) =>{
   const age = document.createElement("div");
   age.classList.add("age");
   age.innerText = data;
   container.appendChild(age);

}
const getData =(path, title) =>{
    const bodyContent = {
        imgLocation: path + title
        // imgLocation: "/Users/baharmutadayin/Downloads/bahar.jpg"
    }
   return axios.post("http://localhost:3001/imgFaceLocation", bodyContent)
    .then(response =>{
        console.log(response)
        return response;
    })
    .catch(error =>{
        console.log(error);
    })
}




    //img_input.addEventListener("load", function(){
    //     if(this.files && this.files[0]) {
    //         console.log("huhuhuh")
    //         img_input.addEventListener("change", function() {
    //             const img = document.querySelector(".img"); 
    //             img.src = URL.createObjectURL(this.files[0])
    //             console.log(img.src)
    //         })
    //         img.onload = imgLoaded;
    //     }
        
    // })
    
    // function imgLoaded(e) {
    //     alert(e)
    // }
    
    