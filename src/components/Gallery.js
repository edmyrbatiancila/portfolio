import React from 'react';
import UnderConstruction from './assets/img/under_construction.webp';

function Gallery() {
    return(
        <div className='maintenance'>
            <img src={UnderConstruction} alt="Under Contstruction" />
        </div>
    );
}

export default Gallery;