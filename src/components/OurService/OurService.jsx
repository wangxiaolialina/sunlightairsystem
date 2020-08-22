import React, { useState } from 'react';
import styles from './OurService.module.css'
import Carousel from 'react-bootstrap/Carousel';
import residentialPic from './residentialpic.png'
import commercialPic from './commercialpic.png';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.ourService}>
      <div className={styles.title}>OUR SERVICES</div>
      <div className={styles.slides}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
              <div className={styles.residential} >
                <div className={styles.content}>
                  <div className={styles.text}>
                  <h3>Residential Services</h3>
                  <p>From regular maintenance to renovation projects. Sunlight Air System is the GTA's leading provider for your home's HVAC solutions.</p>
                  </div>
                  <button className={styles.button}>
                    Contact Us
                  </button>
                </div>
                <div className={styles.picture}>
                  <img
                    className={styles.imgpic}
                    src={residentialPic}
                    alt="residential slide"
                  />
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className={styles.residential} >
                <div className={styles.content}>
                  <h3>Commercial Services</h3>
                  <p>Ventillation isn't working in the warehouse? Or the office's AC is acting weird? Sunlight Air System will make sure your business' HVAC systems are running smoothly during your work days. </p>
                  <button className={styles.button}>
           Contact Us
        </button>
                </div>
                <div className={styles.picture}>
                <img className={styles.imgpic}
                    
                    src={commercialPic}
                    alt="Second slide"
                  />
                </div>
              </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

// render(<ControlledCarousel />);

export default ControlledCarousel;