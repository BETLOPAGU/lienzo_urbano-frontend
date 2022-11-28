// import { ImageListItem, ImageList } from '@mui/material';
import { Carousel } from "react-responsive-carousel";

import '../../styles.css';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  }
];


const renderSlides = itemData.map((image) => (
  <div key={image.img} >
    <img src={image.img} alt={image.title} />
  </div>
));


export const ImageGallery = () => {

  return (
    <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel-container"
    >
        { renderSlides }
    </Carousel>
  );
}



