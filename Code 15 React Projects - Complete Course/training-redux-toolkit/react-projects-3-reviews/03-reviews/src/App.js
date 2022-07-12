import './App.scss';
import { useDispatch ,useSelector} from 'react-redux'

import {
  currentIndex,
  nextReview,
} from './features/reviewSlice'

import {reviews} from './utils/data'
import { useState } from 'react';

function App() {

  const index = useSelector(currentIndex)
  const {image, name, job, text} = reviews[index]

  
  const dispatch = useDispatch()

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'></img>
      </div>
      <div className='button-container'>
        <button className='next-btn' onClick={() => {dispatch(nextReview())}}>Next
        </button>
      </div>
    </article>
  );
}

export default App;
