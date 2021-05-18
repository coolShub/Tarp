import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Not disabled,just differently-abled</h1>
      <h3>It doesn't define who you are!!</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/deaf.jpg"
              text='Having difficulty in seeing,use our Image Caption Generator '
              label='IMAGE-CAPTION-GENERATOR'
              path='/caption'
            />
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/blind.jpg"
              text='Having difficulty in listening,use our Speech-To-Text Module'
              label='SPEECH-TO-TEXT'
              path='/speech'
            />
            <CardItem
              src="https://raw.githubusercontent.com/coolShub/Enable/main/src/images/signlang.jpg"
              text='Having difficulty in communications,talk via Sign Language'
              label='SIGN-LANGUAGE GENERATOR'
              path='/sign'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
