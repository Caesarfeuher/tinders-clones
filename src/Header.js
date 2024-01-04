import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header() {
  return (
    <div className='header'>
        <IconButton>
             <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
    
       <img 
         className='header__logo'
         src='https://media.designrush.com/inspirations/129349/conversions/_1513706350_604_tin-preview.jpg'
         alt=''
       />

        <IconButton>
        <QuestionAnswerIcon fontSize='large' className='header__icon'/>
        </IconButton>
       
    </div>
  )
}

export default Header
