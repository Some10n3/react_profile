import React, { section, useState } from 'react'
import './App.css'

const App = () => {

  const handleNavigateToAboutPage = () => {
    window.location.href = '/about'
  }

  const handleNavigateToCoursesTakenPage = () => {
    window.location.href = '/courses_taken'
  }

  document.body.style.backgroundColor = "#7e57c2";

  return(
    <section className='flex-wrapper'>
      <div className='flex-header'>

      </div>
      <div className='flex-nav'>
          
      </div>
      <div className='flex-container'>
        <div>
          <h2>Hi, my name is Chanasorn Howattanakulphong</h2> <br />
          <h1>I'm a Software Engineeering student at KMITL</h1> <br />
          <button onClick={handleNavigateToAboutPage} className='bg-DeepPurple-500 hover:shadow-lg hover:rounded hover:overflow-hidden'>
              Navigate to about page.
          </button>
          <button onClick={handleNavigateToCoursesTakenPage} className='bg-DeepPurple-500 hover:shadow-lg hover:rounded hover:overflow-hidden'>
              Navigate to courses taken page.
          </button>
        </div>
      </div>
      <div className='flex-footer'>

      </div>
    </section>
  )
}

export default App