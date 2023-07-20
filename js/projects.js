const projectContainer = document.getElementById("shelf")
console.log(projectContainer)

// function getProjects() {{

// }}
pieces = [
  { "name": "Project 1", "slug": "project-1", "thumbnail": "https://picsum.photos/200/300", "description": "This is a description of project 1" },
  { "name": "Project 2", "slug": "project-2", "thumbnail": "https://picsum.photos/200/300", "description": "This is a description of project 2" },
  { "name": "Project 3", "slug": "project-3", "thumbnail": "https://picsum.photos/200/300", "description": "This is a description of project 3" },
  { "name": "Project 4", "slug": "project-4", "thumbnail": "https://picsum.photos/200/300", "description": "This is a description of project 4" },
]


   // <a href="/${project.slug}" class="card pushable">
        //   <div class="card front">
        //     <img class="thumbnail" src="${project.thumbnail}" alt="">
        //     <div class="card-body">
        //       <h4 class="card-title mt-3">${project.name}</h4>
        //       <p class="card-text mt-3">
        //         ${project.description}
        //       </p>
        //     </div>
        //   </div>
        // </a>
function projectTemplate(project) {
  return `
     
        <a class="card pushable modal-open">
        <div class="card front">
          <img class="thumbnail" src="/public/anglerBeast.jpg" alt="" />
          <div class="card-body">
            <h4 class="card-title mt-3">Watch for the Depths</h4>
            <p class="card-text mt-3">
              A digital painting inspired by Fantasy Generator Book
            </p>
          </div>
        </div>
      </a>
  `
}

function render(projects) {
  let loadedProjects = [];
  for (let i = projects.length - 1; i > -1; i--) {
    loadedProjects[i] == projects[i];
  }
  projectContainer.insertAdjacentHTML('afterbegin', projectTemplate(loadedProjects));
console.log(loadedProjects)
console.log(projects)

}


render(pieces);
