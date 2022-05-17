import React from 'react'
import './App.css';
import {createTheme, PrimaryButton, ThemeProvider} from '@fluentui/react'

const myTheme = createTheme({
  palette: {
    themePrimary: '#171515',
    themeLighterAlt: '#e3e1e1',
    themeLighter: '#cac5c5',
    themeLight: '#b0abab',
    themeTertiary: '#979090',
    themeSecondary: '#7d7777',
    themeDarkAlt: '#645e5e',
    themeDark: '#4a4545',
    themeDarker: '#302d2d',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#595959',
    neutralSecondary: '#373737',
    neutralSecondaryAlt: '#373737',
    neutralPrimaryAlt: '#2f2f2f',
    neutralPrimary: '#000000',
    neutralDark: '#151515',
    black: '#0b0b0b',
    white: '#ffffff',
  }});

function App() {
  return (
    <ThemeProvider applyTo='body' theme={myTheme}>
    <div className='App'>
      <h1>Hello Buttons</h1>
      <PrimaryButton text='Sign in with Github' href='https://github.com/login' />
    </div>
    </ThemeProvider>
  )
}

export default App;
