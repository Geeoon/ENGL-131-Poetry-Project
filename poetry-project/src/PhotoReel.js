import React, { useState, useEffect } from 'react'
import Photo from './Photo';

export default function PhotoReel() {
  const [photos, set_photos] = useState([]);
  const [current_photo, set_current_photo] = useState(0);
  useEffect(() => {
    let temp_photos = [];
    temp_photos.push({
      "src": ":)",
      "xposition": 5,
      "yposition": 20,
      "rotation": 0, /* units are degrees clockwise */
      "zoom": 1
    });
    set_photos(temp_photos);

  }, []);

  return <div id='photo-reel'>
    <div id='previous' className='link' onClick={() => {
      if (current_photo > 0) {
        set_current_photo(current_photo - 1);
      }
    }}>
      Previous
    </div>
    <div id='photo-reel-main'>
      { 
        photos[current_photo] &&
        <Photo
          src={photos[current_photo].src}
          x={photos[current_photo].xposition}
          y={photos[current_photo].yposition}
          rotation={photos[current_photo].rotation}
          zoom={photos[current_photo].zoom}
        />
      }
    </div>
    <div id='next' className='link' onClick={() => {
      if (current_photo < photos.length - 1) {
        set_current_photo(current_photo + 1);
      }
    }}>
      Next
    </div>
  </div>;
}