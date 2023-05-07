import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'


const Footer = () => {
  return (
    <Container fluid 
    tag="footer"
    className="text-center bg-info text-white text-uppercase fixed-botttom p-3 mt-5"
    style={{bottom: 0 , position: 'retative'}}
    >
     Github search App with <span className='text-warning'>Firebase</span> 
    </Container>
  )
}

export default Footer
