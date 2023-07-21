const projectContainer = document.getElementById("shelf")
console.log(projectContainer)

// function getProjects() {{

// }}
pieces = [
  {
    title: "Project 1",
    slug: "project-1",
    thumbnail: "https://picsum.photos/200/300",
    description: "This is a description of project 1",
    images: ["https://picsum.photos/200/300"],
  },
  {
    title: "Project 2",
    slug: "project-2",
    thumbnail: "https://picsum.photos/200/300",
    description: "This is a description of project 2",
    images: ["https://picsum.photos/200/300", "https://picsum.photos/200/300"],
  },
  {
    title: "Project 3",
    slug: "project-3",
    thumbnail: "https://picsum.photos/200/300",
    description: "This is a description of project 3",
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
  {
    title: "Project 4",
    slug: "project-4",
    thumbnail: "https://picsum.photos/200/300",
    description: "This is a description of project 4",
    images: [
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
      "https://picsum.photos/200/300",
    ],
  },
];


   

    //  <a class="card pushable modal-open">
    //     <div class="card front">
    //       <img class="thumbnail" src="/public/anglerBeast.jpg" alt="" />
    //       <div class="card-body">
    //         <h4 class="card-title mt-3">Watch for the Depths</h4>
    //         <p class="card-text mt-3">
    //           A digital painting inspired by Fantasy Generator Book
    //         </p>
    //       </div>
    //     </div>
    //   </a>

function projectTemplate(project) {
  return `
    <a class="card pushable modal-open">
      <div class="card front">
        <img class="thumbnail" src="${project.thumbnail}" alt="">
        <div class="card-body">
          <h4 class="card-title mt-3">${project.title}</h4>
          <p class="card-text mt-3">
            ${project.description}
          </p>
        </div>
      </div>
    </a>
   
  `
}


function render(projects) {
  let projectTemplates = ``;
  for (let i = 0; i < projects.length; i++) {
    projectTemplates += projectTemplate(projects[i]);
  }
    projectContainer.insertAdjacentHTML('afterbegin', projectTemplates);
}


render(pieces);

console.log("sanitiy cheeck scripts")
// Get the modal
let modal = document.getElementById("modal-window");

// Get the button that opens the modal
let modals = document.getElementsByClassName("modal-open");
let projectImages = document.getElementById("project-images");
let projectTitle = document.getElementById("project-title");
let projectDescription = document.getElementById("project-description");
// let modalImgs = document.getElementById("modal-images");
console.log(projectImages, projectTitle, projectDescription)

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal and display the info
for (let i =0; i < modals.length; i++) {
  let btn = modals[i];
  // console.log(btn)
  let modalImgs = '';
  let modalTitle = '';
  let modalDescription = '';
  
  btn.onclick = function(e) {
    modal.style.display = "block";
    
    //get the modal data
    modalImgs = pieces[i].images;
    modalTitle = pieces[i].title;
    modalDescription = pieces[i].description;

    //insert images
    for (let i = 0; i < modalImgs.length; i++){
      projectImages.innerHTML += insertImgs(modalImgs[i]);
      projectTitle.innerText = modalTitle;
      projectDescription.innerText = modalDescription;

    } 
    // console.log(btn)
  }

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    projectImages.innerHTML = '';

  }
}

// // create the modal
// function modalTemplate(project) {
//   return `
//   <div id="modal-window" class="modal">
//         <div class="modal-content">
//           <div class="modal-header">
//             <span class="close">&times;</span>
//             <h2 id="project-title">Modal Header</h2>
//           </div>
//           <div class="modal-body">
//             <div id="modal-images"></div>
//             <p id ="project-description">Some text in the Modal Body</p>
//             <p>Some other text...</p>
//           </div>
//         </div>
//       </div>
//   `
// }

function insertImgs(img) {
  return `
  <img src=${img}> 
  `
}