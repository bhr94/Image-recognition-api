


const getData =() =>{
    const bodyContent = {
        imgLocation: "/Users/baharmutadayin/Downloads/bahar.jpg"
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

getData()
.then(result =>{
    console.log(result)
    return result;
})
.catch(error=>{
    console.log(error)
})