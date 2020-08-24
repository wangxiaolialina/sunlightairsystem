import React, { useState } from 'react';
import styles from './TypesOfJobsWeDo.module.css'
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
      <div className={styles.title}><h3>TYPES OF JOBS WE DO</h3></div>
      <div className={styles.slides}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
              <div className={styles.residential} >
                <div className={styles.content}>
                  <div className={styles.text}>
                  <h4>Residential Services</h4>
                  <h6>From regular maintenance to renovation projects. Sunlight Air System is the GTA's leading provider for your home's HVAC solutions.</h6>
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
                  <h4>Commercial Services</h4>
                  <h6>Ventillation isn't working in the warehouse? Or the office's AC is acting weird? Sunlight Air System will make sure your business' HVAC systems are running smoothly during your work days. </h6>
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