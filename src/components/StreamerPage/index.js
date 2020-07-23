import React from 'react';
import { AddStreamer } from '../AddStreamer';

export const StreamerPage = () => (
  <div>
    <h1>Streamers</h1>
    <p>All of your streamer content on one page</p>
    <AddStreamer />
  </div>
);

//User adds streamer name on the input bar
// Onclick name is then passed into a function 
// Function renders out a div containing streamer's name, Twitch Page, Tweet Timeline
//Function then displays that on the streamer page
// Data is updated on Firebase