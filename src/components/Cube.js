import React, {useState} from 'react'
import './Cube.css'

import ButtonControls from './ButtonControls';


const Cube = () => {
    //set initial state of each cube face

    const [front, setFront] = useState(Array(9).fill('green'))
    const [right, setRight] = useState(Array(9).fill('red'))
    const [left, setLeft] = useState(Array(9).fill('orange'))
    const [back, setBack] = useState(Array(9).fill('blue'))
    const [top, setTop] = useState(Array(9).fill('white'))
    const [bottom, setBottom] = useState(Array(9).fill('yellow'))
    
    const [toggle, setToggle] = useState(true)

    const toggleSwitch = () => {
    if (toggle) {
        setToggle(false)
    }
    if (!toggle){
        setToggle(true)
    }
}

    // Switch statement to handle the cube movements, each case a different movement
    const handleClickSwitch = (direction) => {
    switch(direction) {
        case 'leftClockwise':
            setFront(([top[0], front[1], front[2], top[3],front[4], front[5], top[6], front[7], front[8] ]))
            setTop(([back[8], top[1], top[2], back[5],top[4], top[5], back[2], top[7], top[8] ]))
            setBottom(([front[0], bottom[1], bottom[2], front[3],bottom[4], bottom[5], front[6], bottom[7], bottom[8] ]))
            setBack(([back[0], back[1], bottom[6], back[3], back[4], bottom[3], back[6], back[7], bottom[0] ]))
            setLeft(([left[2], left[5], left[8], left[1],left[4], left[7], left[0], left[3], left[6] ]))
             break;  
        case 'leftInverted':
             setFront(([bottom[0], front[1], front[2], bottom[3],front[4], front[5], bottom[6], front[7], front[8] ]))
             setTop(([front[0], top[1], top[2], front[3],top[4], top[5], front[6], top[7], top[8] ]))
             setBottom(([back[8], bottom[1], bottom[2], back[5],bottom[4], bottom[5], back[2], bottom[7], bottom[8] ]))
             setBack(([back[0], back[1], top[6], back[3], back[4], top[3], back[6], back[7], top[0] ]))
             setLeft(([left[6], left[3], left[0], left[7],left[4], left[1], left[8], left[5], left[2] ]))
         
             break;
        case 'rightInverted':
            setFront(([front[0], front[1], top[2], front[3],front[4], top[5], front[6], front[7], top[8] ]))
            setTop(([top[0], top[1], back[6], top[3],top[4], back[3], top[6], top[7], back[0] ]))
            setBottom(([bottom[0], bottom[1], front[2], bottom[3],bottom[4], front[5], bottom[6], bottom[7], front[8] ]))
            setBack(([bottom[8], back[1], back[2], bottom[5], back[4], back[5], bottom[2], back[7], back[8] ]))
            setRight(([right[2], right[5], right[8], right[1],right[4], right[7], right[0], right[3], right[6] ]))
             break;
        case 'rightClockwise':
            setFront(([front[0], front[1], bottom[2], front[3],front[4], bottom[5], front[6], front[7], bottom[8] ]))
            setTop(([top[0], top[1], front[2], top[3],top[4], front[5], top[6], top[7], front[8] ]))
            setBottom(([bottom[0], bottom[1], back[6], bottom[3],bottom[4], back[3], bottom[6], bottom[7], back[0] ]))
            setBack(([top[8], back[1], back[2], top[5], back[4], back[5], top[2], back[7], back[8] ]))
            setRight(([right[6], right[3], right[0], right[7],right[4], right[1], right[8], right[5], right[2] ]))
            break;
     
        case 'upInverted':
            setFront(([left[2], left[1], left[0], front[3],front[4], front[5], front[6], front[7], front[8] ]))
            setLeft(([back[2], back[1], back[0], left[3], left[4], left[5], left[6], left[7], left[8] ]))
            setRight(([front[0], front[1], front[2], right[3],right[4], right[5], right[6], right[7], right[8] ]))
            setBack(([right[0], right[1], right[2], back[3], back[4], back[5], back[6], back[7], back[8] ]))
            setTop(([top[2], top[5], top[8], top[1],top[4], top[7], top[0], top[3], top[6] ]))
            break;
        case 'upClockwise':
            setFront(([right[0], right[1], right[2], front[3],front[4], front[5], front[6], front[7], front[8] ]))
            setLeft(([front[2], front[1], front[0], left[3], left[4], left[5], left[6], left[7], left[8] ]))
            setRight(([back[0], back[1], back[2], right[3],right[4], right[5], right[6], right[7], right[8] ]))
            setBack(([left[2], left[1], left[0], back[3], back[4], back[5], back[6], back[7], back[8] ]))
            setTop(([top[6], top[3], top[0], top[7],top[4], top[1], top[8], top[5], top[2] ]))
            break;
         case 'downClockwise':
            setFront(([front[0], front[1], front[2], front[3],front[4], front[5], left[8], left[7], left[6] ]))
            setLeft(([left[0], left[1], left[2], left[3], left[4], left[5], back[8], back[7], back[6] ]))
            setRight(([right[0], right[1], right[2], right[3],right[4], right[5], front[6], front[7], front[8] ]))
            setBack(([back[0], back[1], back[2], back[3], back[4], back[5], right[6], right[7], right[8] ]))
            setBottom([bottom[2], bottom[5], bottom[8], bottom[1], bottom[4], bottom[7], bottom[0], bottom[3], bottom[6]])
            break;
        case 'downInverted':
            setFront(([front[0], front[1], front[2], front[3],front[4], front[5], right[6], right[7], right[8] ]))
            setLeft(([left[0], left[1], left[2], left[3], left[4], left[5], front[8], front[7], front[6] ]))
            setRight(([right[0], right[1], right[2], right[3],right[4], right[5], back[6], back[7], back[8] ]))
            setBack(([back[0], back[1], back[2], back[3], back[4], back[5], left[8], left[7], left[6] ]))
            setBottom([bottom[6], bottom[3], bottom[0], bottom[7],bottom[4], bottom[1], bottom[8], bottom[5], bottom[2] ])
            break;
        case 'frontClockwise':
            setTop(([top[0], top[1], top[2], top[3],top[4], top[5], left[6], left[3], left[0] ]))
            setLeft(([bottom[0], left[1], left[2], bottom[1], left[4], left[5], bottom[2], left[7], left[8] ]))
            setRight(([top[6], right[1], right[2], top[7],right[4], right[5], top[8], right[7], right[8] ]))
            setBottom(([right[6], right[3], right[0], bottom[3],bottom[4], bottom[5], bottom[6], bottom[7], bottom[8] ]))
            setFront(([front[6], front[3], front[0], front[7],front[4], front[1], front[8], front[5], front[2] ]))
            break;
        case 'frontInverted':
            setTop(([top[0], top[1], top[2], top[3],top[4], top[5], right[0], right[3], right[6] ]))
            setLeft(([top[8], left[1], left[2], top[7], left[4], left[5], top[6], left[7], left[8] ]))
            setRight(([bottom[2], right[1], right[2], bottom[1],right[4], right[5], bottom[2], right[7], right[8] ]))
            setBottom(([left[0], left[3], left[6], bottom[3],bottom[4], bottom[5], bottom[6], bottom[7], bottom[8] ]))
            setFront([front[2], front[5], front[8], front[1],front[4], front[7], front[0], front[3], front[6]])
            
            break;
        case 'bottomInverted':
            setTop(([left[8], left[5], left[2],  top[3],top[4], top[5],  top[6], top[7], top[8] ]))
            setLeft([left[0], left[1], bottom[6],  left[3], left[4], bottom[7], left[6], left[7], bottom[8]])
            setRight([right[0], right[1], top[0], right[3], right[4], top[1], right[6], right[7], top[2]])
            setBottom([bottom[0], bottom[1], bottom[2], bottom[3], bottom[4], bottom[5], right[8], right[5], right[2]])
            setBack([back[2], back[5], back[8], back[1], back[4], back[7], back[0], back[3], back[6]])
          
            break;
        case 'bottomClockwise':
            setTop(([right[2], right[5], right[8],  top[3],top[4], top[5],  top[6], top[7], top[8] ]))
            setLeft([left[0], left[1], top[2],  left[3], left[4], top[1], left[6], left[7], top[0]])
            setRight([right[0], right[1], bottom[8], right[3], right[4], bottom[7], right[6], right[7], bottom[6]])
            setBottom([bottom[0], bottom[1], bottom[2], bottom[3], bottom[4], bottom[5], left[2], left[5], left[8]])
            setBack([back[6], back[3], back[0], back[7], back[4], back[1], back[8], back[5], back[2]])
            break;
        default:
        
        
      }
    
}
    
    return (
        <>
        {/* Map through the arrays to render the correct colours on each cube face*/}
        <main>
        {/*   */}
        <div className="container">
  <div className={toggle ? "cube" : 'reverseCube'}  >
    <div className="face top">{top.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
    <div className="face bottom">{bottom.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
    <div className="face left">{left.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
    <div className="face right">{right.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
    <div className="face front">{front.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
    <div className="face back">{back.map((cube, i) => (
                <div className="individualCube" id={i} key={i} style={{backgroundColor: cube}}></div>
                
            ))}</div>
  </div>
 
</div>
<ButtonControls handleClick={handleClickSwitch} toggleSwitch={toggleSwitch}/>


</main>
        </>
    )
}

export default Cube
