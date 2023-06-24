import React from 'react'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import "./VerticalItem.scss"


function VerticalItem ({content}) {
  const navigate = useNavigate()
  return (
    <div className='content'>
      <img src={content.imgVertical}></img>
     

      <PlayArrowIcon className='playArrow'/>
    
      
      {/* <div className='innerContent'>

        <h1>{content ? content.title : ''}</h1>
        
        <p>Type: {content ? (content.isSeries ? 'Series' : 'Movie') : ''}</p>
        <p>Year: {content ? content.year : ''}</p>
        <p>Duration: {content ? content.duration : ''}</p>
        <p>Age restriction: {content ? content.limit : ''}+</p>
        <p>Genre: {content ? content.genre : ''}</p>

       
         <div className='buttons'>
            <button
            className='play'
            onClick={() => navigate(`/watch/${content ? content._id : ''}`)}
            >
            <PlayArrowIcon />
            <span>Play</span>
            </button>
        </div> 
      </div> */}
    </div>
  )
}

export default VerticalItem
