const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['Anterior', 'Próximo'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
  
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(el =>{
      el.classList.remove('gallery-item1');
      el.classList.remove('gallery-item2');
      el.classList.remove('gallery-item3');
      el.classList.remove('gallery-item4');
      el.classList.remove('gallery-item5');
    });

    this.carouselArray.slice(0,5).forEach((el, i) =>{
      el.classList.add(`gallery-item${i+1}`);
    });
  }

  setCurrentState(direction){
    if(direction.className == 'gallery-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());
    }else{
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls(){
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-previous`;
      document.querySelector(`.gallery-controls-previous`).innerText = 'Anterior';

      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-next`;
      document.querySelector(`.gallery-controls-next`).innerText = 'Próximo';
  }

  useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e =>{
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }

}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();