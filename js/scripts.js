
console.log("sanitiy cheeck")
// // Get the modal
// var modal = document.getElementById("modal-window");

// // Get the button that opens the modal
// var btn = document.querySelector(".modal-open");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// Array of gallery images
  var galleryImages = [
    { src: 'https://picsum.photos/200', alt: 'Artwork 1', caption: 'Artwork 1' },
    { src: 'https://picsum.photos/200', alt: 'Artwork 2', caption: 'Artwork 2' },
    { src: 'https://picsum.photos/200', alt: 'Artwork 3', caption: 'Artwork 3' }
    // Add more images to the array if needed
  ];

  // Function to generate gallery images
  function generateGallery() {
    var artworkContainer = document.getElementById('projectContainer');

    galleryImages.forEach(function(image) {
      var img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.onclick = function() {
        openModal(image.src, image.caption);
      };
      artworkContainer.appendChild(img);
    });
  }

  generateGallery();

  function openModal(imageSrc, caption) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");
    
    modal.style.display = "block";
    modalImage.src = imageSrc;
    modalCaption.innerHTML = caption;
  }

  function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
  }

