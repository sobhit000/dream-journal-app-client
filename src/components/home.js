import React from 'react';
import Navbar from './navbar';
import Banner from './banner';
import Signin from './signin';
import Content from './content';
import Signup from './signup';

export default function Home(props) {
  return (
        <div>
          <Navbar />
          <Banner />          
          <Content />                    
        </div>
      );
}