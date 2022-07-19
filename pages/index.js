import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Store } from '../utils/Store'; 



const Index = () => {
    const router = useRouter();
    
    useEffect(() => {
      router.push( "/discover")
  }, []);
    
    return (
        <></>
    )
}

export default Index;