import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome';
import NewDream from './newdream';
import PastDreams from './pastdreams';

export default function Dashboard(props) {
  return (
        <div>
          <Navbar />
          <Welcome />
          <NewDream />
          <PastDreams />                    
        </div>
      );
}