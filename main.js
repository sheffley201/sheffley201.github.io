//pull projects div from index.html
const projects = document.querySelectorAll('.projects img');
const projectListener = document.querySelector('.projects');

//base thumbnail size is 100px
currentSize = 100;
let clickedProject;

//create a function to animate the picture getting larger
const picEnlarge = function() {
  if (currentSize < 2000) {
    currentSize += 500;
    projects[clickedProject].style.width = currentSize + 'px';
    projects[clickedProject].style.height = currentSize + 'px';
    projects[clickedProject].style.top = -currentSize/2 + 'px';
    projects[clickedProject].style.left = -currentSize/2 + 'px';
    requestAnimationFrame(picEnlarge);
  } else {
    currentSize = 100;
    projects[clickedProject].style.width = currentSize + 'px';
    projects[clickedProject].style.height = currentSize + 'px';
    projects[clickedProject].style.top = 0;
    projects[clickedProject].style.left = 0;
  }
}
//event listener determines which project has been clicked
projectListener.addEventListener('click', whichPic = () => {
  //event.preventDefault();
  clickedProject = Number(event.target.id);
  picEnlarge();
});
