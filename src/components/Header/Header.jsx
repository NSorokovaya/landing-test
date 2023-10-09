import React from 'react';

import  { ReactComponent as Logo }  from '../../images/logo.svg'
import  style from './Header.module.scss'

export const HeaderArea = () => { 
      return (
            <div className={style.container}>
                  <Logo width={600}></Logo>
           </div>
      )
}