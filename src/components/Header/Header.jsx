import React from 'react';

import  { ReactComponent as Logo }  from '../../images/logo.svg'
import {
 Header
} from './Header.styled';

export const HeaderArea = () => { 
      return (
            <Header>
                  <Logo/>
           </Header> 
      )
}