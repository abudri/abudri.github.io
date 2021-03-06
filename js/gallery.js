// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  // let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img"); refactored in 11.2 Question 2 or so for the below
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let currentClass = "current"; // Section 11.3, Question 1

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function () {
      // Preload large images.
      let largeVersion = new Image(); // Added in Section 11.4 Question 1
      largeVersion.src = thumbnail.dataset.largeVersion;
      // Set clicked image as display image.
      // let newImageSrc = thumbnail.dataset.largeVersion; Commented out this line and next for the line right after, Section 11.4, Question 1
      // mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("src", largeVersion.src);
      mainImage.setAttribute("alt", thumbnail.dataset.description); // Section 11.2, Question 1

      // Change which image is current. Section 11.3
      document.querySelector(".current").classList.remove(currentClass); // remove the `current` class from existing thumbnail
      thumbnail.parentNode.classList.add(currentClass); // Add the `current` class to the parent of the clicked image.

      // Update image info - the title and description
      let galleryInfo = document.querySelector("#gallery-info");
      let title = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}