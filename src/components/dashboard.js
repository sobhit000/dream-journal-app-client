import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome';
import NewDream from './newdream';
import SearchPastDreams from './searchpastdreams';
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