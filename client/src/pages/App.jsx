import React, { section, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
// import { TouchableOpacity, Text } from 'react-native';
// import { useTheme } from '@react-navigation/native';

const App = () => {

  const handleNavigateToAboutPage = () => {
    window.location.href = '/about'
  }

  document.body.style.backgroundColor = "#7e57c2";

  // const theme = useTheme();
  // const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  // // Subset of props, to illustrate the idea.
  // const config = isMatch ? {fontSize: 26} : {fontSize: 30};

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
          <button onClick={handleNavigateToAboutPage} className='bg-DeepPurple-500'>
              Navigate to about page.
          </button>
        </div>
      </div>
      <div className='flex-footer'>

      </div>
    </section>
  )
}

export default App