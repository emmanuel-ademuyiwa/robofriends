import React from 'react'
import Card from './Card'

function Page({robots}){

  return (
    <div className='row d-flex justify-content-center'>
        {
          robots.map(robot => {
            return( 
             <Card 
                 key={robot.id} 
                 id={robot.id} 
                 name={robot.name}    
                 username={robot.username}
                 email={robot.email}
             />)
         }) 
        }
    </div>
  )
}

export default Page;