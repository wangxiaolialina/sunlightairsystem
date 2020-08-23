
import React from 'react';
import { Link } from 'react-router-dom';
import style from './Brands.module.css'

const BrandWeWorkWith = (props) => {
  return(
    <div className={style.brandContent}>
      <div>
        <h3>BRANDS WE WORK WITH</h3>
      </div>
      <div className={style.brand}>
        <img className={style.logo} src='/BrandsWeWorkWith/rheem.png'></img>
        <img className={style.logo} id={style.goodman} src='/BrandsWeWorkWith/goodman.png'></img>
        <img className={style.logo} src='/BrandsWeWorkWith/carrier.png'></img>
        <img className={style.logo} src='/BrandsWeWorkWith/lennox.png'></img>
      </div>
    </div>
  )
}
export default BrandWeWorkWith;