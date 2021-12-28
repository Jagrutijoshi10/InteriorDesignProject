

import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


const OwlCarouselDesign = (props) => {
    let images = props.images;
    const options = {
        items: 5,
        autoplay: true,
        responsiveClass: true,
        loop: true,
        nav: true,
    };

    const events = {
        onDragged: function (event) { },
        onChanged: function (event) { }
    };

    return (<>
        <div>
        <OwlCarousel className="owl-theme" options={options} events={events}>
            {images.map(element => {
                return (
                <div className='img-size'>
                    <img className='item img-radius' src={element} alt="alt" />
                </div>
                )
            })}
        </OwlCarousel>
        </div>
     

    </>);
}

export default OwlCarouselDesign