import React from 'react'

class Header extends React.Component {
    shouldComponentUpdate() {
        return false
    }
    render() {
        return (
            <div>
                <h1 className='robo-title m-3'>RoboFriends</h1>
            </div>
        )
    }
}

export default Header