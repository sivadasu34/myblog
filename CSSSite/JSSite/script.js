// function to change text
function changeText() {
    var paragraph = document.querySelector('main p');
    paragraph.textContent = 'This text has been changed!';
  }
  
  // function to change images
  function changeImages() {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
      if (image.alt === 'Playing basketball') {
        image.src = 'images/tennis.jpg';
        image.alt = 'Playing tennis';
      } else if (image.alt === 'Watching movies') {
        image.src = 'images/tv.jpg';
        image.alt = 'Watching TV';
      } else if (image.alt === 'Reading books') {
        image.src = 'images/kindle.jpg';
        image.alt = 'Using Kindle';
      } else if (image.alt === 'Listening to music') {
        image.src = 'images/podcast.jpg';
        image.alt = 'Listening to Podcasts';
      }
    });
  }
  
  // function to reset gallery
  function resetGallery() {
    var images = document.querySelectorAll('.gallery img');
    images.forEach(function(image) {
        if (image.alt === 'Playing tennis') {
          image.src = 'images/basketball.jpg';
          image.alt = 'Playing basketball';
        } else if (image.alt === 'Watching TV') {
          image.src = 'images/movies.jpg';
          image.alt = 'Watching movies';
        } else if (image.alt === 'Reading books') {
          image.src = 'images/books.jpg';
          image.alt = 'Using Kindle';
        } else if (image.alt === 'Listening to Podcasts') {
          image.src = 'images/music.jpg';
          image.alt = 'Listening to music';
        }
      });
  }
  
  // function to check value of required field
  function checkValue() {
    var input = document.getElementById('required-field');
    var errorMessage = document.getElementById('error-message');
    if (input.value !== 'example') {
      errorMessage.textContent = 'Please enter "example".';
      errorMessage.style.color = 'red';
    } else {
      errorMessage.textContent = '';
    }
  }
  
  // function to toggle accordion sections
  function toggleAccordion() {
    var accordion = document.querySelector('.accordion');
    accordion.addEventListener('click', function(event) {
      var target = event.target;
      if (target.tagName === 'H2') {
        target.classList.toggle('active');
        var panel = target.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }
    });
  }

  function checkValue() {
    const input = document.getElementById("required-field");
    const errorMessage = document.getElementById("error-message");
    
    if (isNaN(input.value)) {
      errorMessage.innerHTML = "Please enter a valid number";
      errorMessage.style.color = "red";
      input.style.borderColor = "red";
    } else {
      errorMessage.innerHTML = "";
      input.style.borderColor = "";
    }
  }
  

// Get all accordion section headers
const accordionHeaders = document.querySelectorAll(".accordion h2");

// Add click event listener to each section header
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    // Toggle the "active" class on the clicked header
    header.classList.toggle("active");

    // Get the sibling div element and toggle its display style
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

  toggleAccordion();
  