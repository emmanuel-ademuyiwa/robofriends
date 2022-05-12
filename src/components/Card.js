import React from 'react'

const Card = ({name, username, email, id}) => {
  return (
    <div className="card p-2 m-2 grow">
        <img className='card-img-top' src={`https://robohash.org/${id}?50x50`} alt="robot" />

        <div className='card-body text-center'>
            {/* <p className='card-title'>{username}</p> */}
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{email}</p>
        </div>
    </div>
  )
}

export default Card;