window.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded!');
});
document.querySelectorAll('progress').forEach((bar) => {
    bar.addEventListener('input', () => {
        let percentage = bar.value / bar.getAttribute('max') * 100;
        if (percentage <= 33) {
            bar.style.setProperty('--progress-bar-color', 'red');
            bar.style.setProperty('--progress-value-color', 'white');
        } else if (percentage <= 66) {
            bar.style.setProperty('--progress-bar-color', 'yellow');
            bar.style.setProperty('--progress-value-color', 'black');
        } else {
            bar.style.setProperty('--progress-bar-color', 'green');
            bar.style.setProperty('--progress-value-color', 'white');
        }
    });
});
window.onload = function() {
    const images = document.querySelectorAll('.container-right img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    showImage(currentIndex);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 3000); // Change image every 2 seconds
};


document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('contactForm').style.display = 'block';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const headerText = "Unleashing Creativity: Explore My Unprofessional Odyssey!";
const paragraphText = "Step into the world of code and innovation! Explore my portfolio and witness the exciting projects that fuel my passion for computer science. From cutting-edge algorithms to dynamic web applications, discover how my technical prowess and creative solutions. Dive in, and let's build the future together!";

const headerElement = document.querySelector(".container-left h1");
const paragraphElement = document.querySelector(".container-left p");

function textTypingEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];
  // If we reached the end of the string
  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => textTypingEffect(element, text, i + 1), 3);
}

// Call the function to start the effect for the header
textTypingEffect(headerElement, headerText);

// Call the function to start the effect for the paragraph
textTypingEffect(paragraphElement, paragraphText);



const backgroundImages = document.querySelectorAll('.background-image');
const columns = document.querySelectorAll('.column');
let currentIndexes = [0, 0, 0];

function showNextImage(columnIndex) {
  const column = columns[columnIndex];
  const columnImages = column.querySelectorAll('.background-image');
  const numImages = columnImages.length;

  columnImages.forEach(image => image.style.display = 'none');

  const currentIndex = currentIndexes[columnIndex];
  columnImages[currentIndex].style.display = 'block';
  columnImages[currentIndex].addEventListener('animationiteration', () => {
    columnImages[currentIndex].style.animationName = 'bounceAtBottom';
    columnImages[currentIndex].style.animationDuration = '0.5s';
    columnImages[currentIndex].style.animationIterationCount = 'infinite';
  }, { once: true });

  currentIndexes[columnIndex] = (currentIndex + 1) % numImages;
}

function startSlideshow() {
  const intervalDuration = 5000; // Change this value to adjust the loop speed (in milliseconds)
  const interval = setInterval(() => {
    const columnsToShow = getRandomColumns();
    columnsToShow.forEach(columnIndex => showNextImage(columnIndex));
  }, intervalDuration);
}

function getRandomColumns() {
  const numColumns = columns.length;
  const numColumnsToShow = Math.floor(Math.random() * numColumns) + 1; // Random number of columns to show (1 to 3)
  const columnsToShow = new Set();

  while (columnsToShow.size < numColumnsToShow) {
    const randomIndex = Math.floor(Math.random() * numColumns);
    columnsToShow.add(randomIndex);
  }

  return Array.from(columnsToShow);
}

startSlideshow();