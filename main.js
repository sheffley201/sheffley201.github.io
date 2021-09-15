//pull projects div from index.html
const projects = document.querySelectorAll('.projects img');
const projectListener = document.querySelector('.projects');

//base thumbnail size is 100px
currentSize = 100;
let clickedProject;

//create a function to animate the picture getting larger
const picEnlarge = function() {
  if (currentSize < 5000) {
    currentSize += 150;             
    projects[clickedProject].style.width = currentSize + 'px';
    projects[clickedProject].style.height = currentSize + 'px';
    projects[clickedProject].style.top = -((currentSize - 150) / 2) + 'px';
    projects[clickedProject].style.left = -((currentSize - 150) / 2) + 'px';
    requestAnimationFrame(picEnlarge);
  } else {
    //reset size to normal if user opens link in new tab
    currentSize = 100;
    projects[clickedProject].style.width = currentSize + 'px';
    projects[clickedProject].style.height = currentSize + 'px';
    projects[clickedProject].style.top = 0;
    projects[clickedProject].style.left = 0;
  }
  //send user to desired link after animation plays
  if (currentSize > 1500) {
    if (clickedProject == 0) {
      location.assign('dag-project.html');
    } else if (clickedProject == 1) {
      location.assign('ttt-project.html');
    } else if (clickedProject == 2) {
      location.assign('sh-project.html');
    } else if (clickedProject == 3) {
      location.assign('snake-project.html');
    } else if (clickedProject == 4) {
      location.assign('retrogames-project.html');
    }
  }
}
//event listener determines which project has been clicked
projectListener.addEventListener('click', whichPic = () => {
  event.preventDefault();
  clickedProject = Number(event.target.id);
  picEnlarge();
});
