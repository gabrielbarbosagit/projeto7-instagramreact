import React from 'react';
import Story from './story';

export default function Stories() {
  const stories = [
    { id: 1, usuario: '9gag', image: 'assets/img/9gag.svg' },
    { id: 2, usuario: 'meowed', image: 'assets/img/meowed.svg' },
    { id: 3, usuario: 'barked', image: 'assets/img/barked.svg' },
    { id: 4, usuario: 'nathanwpylestrangeplanet', image: 'assets/img/nathanwpylestrangeplanet.svg' },
    { id: 5, usuario: 'wawawicomics', image: 'assets/img/wawawicomics.svg' },
    { id: 6, usuario: 'respondeai', image: 'assets/img/respondeai.svg' },
    { id: 7, usuario: 'filomoderna', image: 'assets/img/filomoderna.svg' },
    { id: 8, usuario: 'memeriagourmet', image: 'assets/img/memeriagourmet.svg' }
  ];

  return (
    <div className="stories">
      {stories.map(Story)}

      <div className='setinha'>
      <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}


