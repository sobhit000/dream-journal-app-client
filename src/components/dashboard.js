import React from 'react';
import Navbar from './navbar';
import Welcome from './welcome';
import NewDream from './newdream';
import SearchPastDreams from './searchpastdreams';
import PastDreams from './pastdreams';

export default function Game(props) {
  return (
        <div>
          <Navbar />
          <Welcome />
          <NewDream />
          <SearchPastDreams />
          <PastDreams />          
        </div>
      );
}