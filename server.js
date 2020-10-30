
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');
var fs  = require("fs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


var CloudmersiveImageApiClient = require('cloudmersive-image-api-client');
var defaultClient = CloudmersiveImageApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'a9b9530f-4cfe-451d-8e58-18ee168a8a0d';
var apiInstance = new CloudmersiveImageApiClient.FaceApi();


app.post("/imgFaceLocation", (req,res) =>{
    const {imgLocation} = req.body;
    var imageFile = Buffer.from(fs.readFileSync(imgLocation).buffer); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
    const data = apiInstance.faceDetectAge(imageFile, (error, data, response)=>{
        if (error) {
            res.json(error);
          } else {
            //   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
              res.json(data);
           
          }
    });
    
})

app.post("/imgGender", (req,res) =>{
  const {imgLocation} = req.body;
  var imageFile = Buffer.from(fs.readFileSync(imgLocation).buffer); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
  const data = apiInstance.faceDetectGender(imageFile, (error, data, response)=>{
      if (error) {
          res.json(error);
        } else {
          //   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            res.json(data);
         
        }
  });
  
})

var api_instance = new CloudmersiveImageApiClient.RecognizeApi();

app.post("/imgDescription", (req,res) =>{
  const {imgLocation} = req.body;
  var imageFile = Buffer.from(fs.readFileSync(imgLocation).buffer); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.
  const data = api_instance.recognizeDescribe(imageFile, (error, data, response)=>{
      if (error) {
          res.json(error);
        } else {
          //   console.log('API called successfully. Returned data: ' + JSON.stringify(data));
            res.json(data);
         
        }
  });
  
})


// var imageFile = Buffer.from(fs.readFileSync("C:\\temp\\inputfile").buffer); // File | Image file to perform the operation on.  Common file formats such as PNG, JPEG are supported.


// var callback = function(error, data, response) {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// };
// api_instance.recognizeDescribe(imageFile, callback);



//"/Users/baharmutadayin/Downloads/bahar.jpg"


// var callback = function(error, data, response) {
//     if (error) {
//       console.error(error);
//     } else {
//         console.log('API called successfully. Returned data: ' + JSON.stringify(data));
//         return data;
     
//     }
//   };


app.listen(3001);