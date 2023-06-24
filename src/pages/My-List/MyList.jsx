import React, { useContext } from 'react'
import { AuthContext } from '../../auth/authContext'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import VerticalItem from '../../components/VerticalItem/VerticalItem'
import "./MyList.scss"
import { Container } from '@mui/material'

function MyList () {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <Navbar />
      <Container>

      <div className="content">
      {user ? user.myList.map(content => <VerticalItem key={content._id} content={content}/>) : <span></span>}
      </div>
      </Container>
      
    </div>
  )
}

export default MyList
