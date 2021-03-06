import React             from 'react'
import Title             from '../components/Title'
import ProgressContainer from '../containers/ProgressContainer'
import styles            from './Header.css'

const Header = () => (
  <header id='animHeader'>
    <Title />
    <ProgressContainer />
  </header>
)
export default Header
