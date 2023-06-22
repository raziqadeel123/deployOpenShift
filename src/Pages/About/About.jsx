import React from 'react';
import MainHeaders from '../../Components/MainHeaders';
import Card from './Card';

const About = () => {
  return (
    <>
      <MainHeaders />
      <h3 className='has-text-centered'>About Page</h3>
      <div className='columns hero-body'>
        <div className='column'>
          <Card />
        </div>
        <div className='column'>
          <Card />
        </div>
        <div className='column'>
          <Card />
        </div>
        <div className='column'>
          <Card />
        </div>
      </div>
    </>
  );
};

export default About;
