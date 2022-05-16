import React from 'react'
import logo from './logo.svg';
import './App.css';
import {PrimaryButton} from '@fluentui/react/lib/Button'


function App() {
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <PrimaryButton href='https://github.com/login'>Sign in with Github</PrimaryButton>
    </div>
  )
}

export default App;
