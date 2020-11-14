import MyCarousel from '../Carousel/Carousel'
import WhatsNew from '../WhatsNew/WhatsNew'
import Newsletter from '../Newsletter/Newsletter'
import AuthUserContext from '../UserAuthentication/Session/context';
import React, { useContext } from 'react';

export default function Home(props) {
  const authUser = useContext(AuthUserContext);
    

    return (
        <>
      
          <MyCarousel/>
          <WhatsNew/>
          <Newsletter/>
        </>
    )
}
