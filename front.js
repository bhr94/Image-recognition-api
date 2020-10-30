const path1 = "./assets/";
const path2 = "/Users/baharmutadayin/Documents/hakathon-project/assets/";
const img_input = document.querySelector(".img_fileInput");
const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const canvas = document.querySelector(".can_vas");
let img_src = undefined;
let img_title = undefined;
const img = document.querySelector(".img");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
console.log(parseInt(img.offsetWidth));
console.log(parseInt(img.offsetHeight));
const url_age = "http://localhost:3001/imgFaceLocation";
const url_gender = "http://localhost:3001/imgGender";
const url_description = "http://localhost:3001/imgDescription";
const img_input2 = document.querySelector(".img_input");
const img_description = document.querySelector(".img__description");
const img_gender = document.getElementById("second_api");
const container3 = document.querySelector(".container3");
const img_input3 = document.querySelector(".img_input_description");
const img_description2 = document.querySelector(".img__description2");

// event listener for file upload age api
img_input.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  if (fileList.length > 0) {
    console.log(fileList[0].name);
    img_title = fileList[0].name;
    img.src = path1 + fileList[0].name;
    img_src = img.src;
    container.appendChild(img);
    console.log(img.naturalWidth);
    console.log(img.naturalHeight);
  }
  getData(path2, img_title, url_age)
    .then((result) => {
      for (let i = 0; i < result.data.PeopleIdentified; i++) {
        printAge(result.data.PeopleWithAge[i]);
      }
      print_num_people(result.data.PeopleIdentified);

      // createBox();
      // createBox(result.data.PeopleWithAge[0].FaceLocation);
      // result.data.PeopleWithAge[0].FaceLocation, img
    })
    .catch((error) => {
      console.log(error);
    });
}

// event listener for file upload  gender api
img_input2.addEventListener("change", handleFiles2, false);
function handleFiles2() {
  const fileList = this.files; /* now you can work with the file list */
  if (fileList.length > 0) {
    console.log(fileList[0].name);
    img_title = fileList[0].name;
    img2.src = path1 + fileList[0].name;
    img_src = img2.src;
    container2.appendChild(img2);
    console.log(img.naturalWidth);
    console.log(img.naturalHeight);
  }

  // getting gender data from the API
  getData(path2, img_title, url_gender)
    .then((result) => {
      for (let i = 0; i < result.data.PeopleIdentified; i++) {
        printGender(result.data.PersonWithGender[i].GenderClass);
      }
      createBox();
      // createBox(result.data.PeopleWithAge[0].FaceLocation);
      // result.data.PeopleWithAge[0].FaceLocation, img
    })
    .catch((error) => {
      console.log(error);
    });
}

// event listener for file upload description api

img_input3.addEventListener("change", handleFiles3, false);
function handleFiles3() {
  const fileList = this.files; /* now you can work with the file list */
  if (fileList.length > 0) {
    console.log(fileList[0].name);
    img_title = fileList[0].name;
    img3.src = path1 + fileList[0].name;
    img_src = img3.src;
    container3.appendChild(img3);
    // console.log(img.naturalWidth);
    // console.log(img.naturalHeight);
  }

  // getting gender data from the API
  getData(path2, img_title, url_description)
    .then((result) => {
      for (let i = 0; i < result.data.PeopleIdentified; i++) {
        print_img_description(result.data.PersonWithGender[i].GenderClass);
      }
      createBox();
      // createBox(result.data.PeopleWithAge[0].FaceLocation);
      // result.data.PeopleWithAge[0].FaceLocation, img
    })
    .catch((error) => {
      console.log(error);
    });
}

// const createBox = () => {
//   var ctx = canvas.getContext("2d");
//   // Red rectangle
//   ctx.beginPath();
//   ctx.lineWidth = "2";
//   ctx.strokeStyle = "blue";
//   // ctx.rect(data.LeftX, data.TopY, data.rightX-data.LeftX, data.bottomY-data.TopY);
//   ctx.rect(31, 50, 50, 70);
//   ctx.stroke();
// };

const printAge = (data) => {
  // const img_description = document.createElement("div");
  // img_description.classList.add("img__description");
  const age_element = document.createElement("div");
  age_element.classList.add("list-item");
  age_element.innerText = "Person age: " + data.Age.toFixed(0);
  img_description.appendChild(age_element);
  container.appendChild(img_description);
};

const print_num_people = (data) => {
  const num_people = document.createElement("div");
  num_people.classList.add("class-item__main");
  num_people.innerText = "Number of People: " + data;
  img_description.appendChild(num_people);
};

const printGender = (data) => {
  const gender_element = document.createElement("div");
  gender_element.classList.add("list-item");
  gender_element.innerText = "Person gender: " + data;
  img_gender.appendChild(gender_element);
};

const print_img_description = (data) => {
  const desc_element = document.createElement("div");
  desc_element.classList.add("list-item");
  desc_element.innerText = "Description: " + data;
  img_description2.appendChild(desc_element);
};

// getting img face location and age from an api
const getData = (path, title, url) => {
  const bodyContent = {
    imgLocation: path + title,
    // imgLocation: "/Users/baharmutadayin/Downloads/bahar.jpg"
  };
  return axios
    .post(url, bodyContent)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

// scroll function
const scrollTo = (element) => {
  element.scrollIntoView();
  element.scrollIntoView(false);
  element.scrollIntoView({ block: "end" });
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
};

// applying scroll function to nav elements
const cards_section = document.querySelector(".section-cards");
const features = document.querySelector(".features");
features.addEventListener("click", () => {
  scrollTo(cards_section);
});
const hero_section = document.querySelector(".hero");
const home = document.querySelector(".home");
home.addEventListener("click", () => {
  scrollTo(hero_section);
});

const card_one = document.querySelector(".card1");
const card_one_api = document.querySelector(".age-gender__section");
card_one.addEventListener("click", () => {
  scrollTo(card_one_api);
});
