"use strict";

// select gallery, assign as const
const gallery = document.querySelector(".gallery");

//create output string for html
let output = "";

//loop through each image and string together the html with object keys
pictures.forEach(function (image) {
  output += `<figure class="gallery-item">
  <img src="./assets/images/${image.path}.jpg" alt="${image.title}" style="max-width: ${image.width}px; max-height: ${image.height}px;" />
  <figcaption>${image.description}</figcaption>
  </figure>`;

  gallery.innerHTML = output;
});

/*
just to reference my old code from gallery assignment 
              <figure class="gallery-item">
                <img src="./Assets/Images/happy-gallery.jpg" alt="Happy dog" />
                <figcaption>Livin my best life</figcaption>
              </figure>
*/
