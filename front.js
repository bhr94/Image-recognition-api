


// const { constructFromObject } = require("cloudmersive-image-api-client/src/ApiClient");

const path1 = "./assets/";
const path2 = "/Users/baharmutadayin/Documents/hakathon-project/assets/"
const img_input = document.querySelector(".img_fileInput");
let img_src =undefined;
// console.log(img_input.files[0])
const img = document.querySelector(".img");

img_input.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  if(fileList.length>0) {
    console.log(fileList[0].name)
    img.src = path1 + fileList[0].name;
    img_src = img.src;
    console.log(img_src);
  }

  getData(path2, img_src)
.then(result =>{
    console.log(result)
    return result;
})
.catch(error=>{
    console.log(error)
})
  
}




const getData =(path, imgUrl) =>{
    const bodyContent = {
        imgLocation: path + imgUrl
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
    
    