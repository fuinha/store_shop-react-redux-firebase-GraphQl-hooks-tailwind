import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component.jsx'
const HomePage = () => {
  return (
    <main className='homepage flex flex-col items-center'>
      <Directory />
    </main>
  );
};

export default HomePage;
