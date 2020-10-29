const path1 = "./assets/";
const path2 = "/Users/baharmutadayin/Documents/hakathon-project/assets/";
const img_input = document.querySelector(".img_fileInput");
const container = document.querySelector(".container");
const canvas = document.querySelector(".can_vas");
let img_src = undefined;
let img_title = undefined;
// console.log(img_input.files[0])
const img = document.querySelector(".img");
console.log(parseInt(img.offsetWidth));
console.log(parseInt(img.offsetHeight));

// event listener for file upload

img_input.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  if (fileList.length > 0) {
    console.log(fileList[0].name);
    img_title = fileList[0].name;
    img.src = path1 + fileList[0].name;
    img_src = img.src;
    console.log(img.naturalWidth);
    console.log(img.naturalHeight);
  }

  // getting data from the API
  getData(path2, img_title)
    .then((result) => {
      printAge(result.data.PeopleWithAge[0].AgeClass);
      createBox();
      // createBox(result.data.PeopleWithAge[0].FaceLocation);
      // result.data.PeopleWithAge[0].FaceLocation, img
    })
    .catch((error) => {
      console.log(error);
    });
}

const createBox = () => {
  var ctx = canvas.getContext("2d");
  // Red rectangle
  ctx.beginPath();
  ctx.lineWidth = "2";
  ctx.strokeStyle = "blue";
  // ctx.rect(data.LeftX, data.TopY, data.rightX-data.LeftX, data.bottomY-data.TopY);
  ctx.rect(31, 50, 50, 70);
  ctx.stroke();
};

const printAge = (data) => {
  const age = document.createElement("div");
  age.classList.add("age");
  age.innerText = data;
  container.appendChild(age);
};

const getData = (path, title) => {
  const bodyContent = {
    imgLocation: path + title,
    // imgLocation: "/Users/baharmutadayin/Downloads/bahar.jpg"
  };
  return axios
    .post("http://localhost:3001/imgFaceLocation", bodyContent)
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
