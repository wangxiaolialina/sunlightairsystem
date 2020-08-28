import React from 'react';
import style from './WhyChooseSL.module.css';
import ppl from './people_24px.png';
import smile from './tag_faces_24px.png';
import wrench from './build_24px.png';
import dolla from './attach_money_24px.png';

const WhyChooseSL = (props) => {
  let WCSL =
    <div className={style.container}>
      <h3 className={style.titleHeader}>WHY CHOOSE SUNLIGHT</h3>
      <h6 className={style.titleText}>
        We are the leading service provider for your
        HVAC installations and repairs. Our team of professionals are
        qualified to handle all your repairs and installments in your home
        and office.
      </h6>
      <div className={style.gridbox}>
        <div className={style.team}>
          <div className={style.whyheader}>
            <img src={ppl}></img>
            <h5>Qualified Team</h5>
          </div>
          <h6 className={style.gridtext}>There’s no contractors in our work to ensure quality and trustworthy services.</h6>
        </div>
        <div className={style.prices}>
          <div className={style.whyheader}>
            <img src={dolla}></img>
            <h5>Affordable Prices</h5>
          </div>
          <h6 className={style.gridtext}>Forget the upfront costs. We work within a budget catered to what you need and want.</h6>
        </div>
        <div className={style.emoti}>
          <div className={style.whyheader}>
            <img src={smile} width="64" height="64"></img>
            <h5>Emotional Approach</h5>
          </div>
          <h6 className={style.gridtext}>Our team ensures we are communicating with you every step of the process both in-person and on the phone.</h6>
        </div>
        <div className={style.certi}>
          <div className={style.whyheader}>
            <img src={ppl}></img>
            <h5>G1 Certification</h5>
          </div>
          <h6 className={style.gridtext}>There’s no contractors in our work to ensure quality and trustworthy services.</h6>
        </div>
        <div className={style.holi}>
          <div className={style.whyheader}>
            <img src={ppl}></img>
            <h5>Holistic Approach</h5>
          </div>
          <h6 className={style.gridtext}>There’s no contractors in our work to ensure quality and trustworthy services.</h6>
        </div>
        <div className={style.services}>
          <div className={style.whyheader}>
            <img src={wrench}></img>
            <h5>Reliable Services</h5>
          </div>
          <h6 className={style.gridtext}>We fix the issue but we don’t stop fixing till we find the root cause.</h6>
        </div>
      </div>
    </div >;

  return (
    <div>
      {WCSL}
    </div>
  );
};

export default WhyChooseSL;