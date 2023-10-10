import React from 'react';

import  { ReactComponent as Logo }  from '../../images/logo.svg'
import  style from './Header.module.scss'
export const HeaderArea = () => { 
      return (
            <div className={style.header}>
                  <Logo width={150}></Logo>
                    <h2>Our IT solutions in reliable hands</h2>

            </div>
            
      )
}