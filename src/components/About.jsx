import React from 'react';

function About () {
  return (
    <div
      style={{ height: '100vh' }}
      className='bg-primary text-white'
    >
      <div
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        className='text-center'
      >
        <h1 className='display-4'>About</h1>
        <p className='lead'>
          This project was created by <a className='text-light' href='https://github.com/avinash201199'>Avinash Singh</a> with help from the Github community {'<3'}
        </p>
        <p>
          The public repositry for this project can be found <a className='text-light' href='https://github.com/avinash201199/Free-courses-with-Certificates'>here</a>
        </p>
      </div>
    </div>
  );
}

export default About;
