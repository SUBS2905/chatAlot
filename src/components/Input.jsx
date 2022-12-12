import React from 'react'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SendIcon from '@mui/icons-material/Send';
import { pink } from '@mui/material/colors';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Write your message...'/>
      <div className='inputIcons'>
        <AttachFileIcon />
        <input type='file' id='addpic' style={{display: 'none'}} />
        <label htmlFor='addpic'><AddPhotoAlternateIcon /></label>
        <button><SendIcon sx={{color: pink[300]}}/></button>
      </div>
    </div>
  )
}

export default Input