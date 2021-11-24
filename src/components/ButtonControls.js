import React from 'react'
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import './ButtonControls.css'

const ButtonControls = ({handleClick, toggleSwitch}) => {
    console.log(handleClick)
    return (
        <div>
           <Paper elevation={3} sx={{width:350}} >
<div className="cubeButtons">
       
       <div className='leftSide'>
       <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('frontFaceClockwise')}>Front Clockwise</Button>
        </div>
        <div>
        <Button variant='contained'  className='direction_button' size='small' onClick={() => handleClick('rightClockwise')}>Right Clockwise</Button>
        </div>
        <div>
        <Button variant='contained'  className='direction_button' size='small' onClick={() => handleClick('upClockwise')}>Up Clockwise</Button>
        </div>
        
      
    
        <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('bottomClockwise')}>Bottom Clockwise</Button>
        </div>
        <div>
        <Button variant='contained'  className='direction_button' size='small' onClick={() => handleClick('leftClockwise')}>Left Clockwise</Button>
        </div>
        <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('downClockwise')}>Down Clockwise</Button>
        </div>
      
     
        </div>
        <div className='rightSide'>
        <div>
        <Button variant='contained' className='direction_button'  size='small' onClick={() => handleClick('frontFaceAntiClockwise')}>Front Inverted</Button>
        </div>
        <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('rightInverted')}> Right Inverted</Button>
        </div>
        <div>
        <Button variant='contained'  className='direction_button' size='small' onClick={() => handleClick('upInverted')}>Up Inverted</Button>
        </div>
        <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('bottomInverted')}>Bottom Inverted</Button>
        </div>
        <div>
        <Button variant='contained'  className='direction_button' size='small' onClick={() => handleClick('leftInverted')}>Left Inverted</Button>
        </div>
    
        <div>
        <Button variant='contained' className='direction_button' size='small' onClick={() => handleClick('downInverted')}>Down Inverted</Button>
        </div>
       
       
    
     
       
        </div>
       
        
</div>
<Button variant='outlined' className="flipButton" size='small'  onClick={() => toggleSwitch()}>Flip Cube</Button>
</Paper>
        </div>
    )
}

export default ButtonControls
