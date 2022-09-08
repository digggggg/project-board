import React from 'react'

import Auth from '../utils/auth'
const Logout = () => {
    const toHome = () => {
        window.location.assign('/')
    }
    
    return (
        <>
            <button className='btn primary' onClick={Auth.logout}>Logout</button>
            <button className='btn primary' onClick={toHome}>To Home</button>
        </>
        )
}

export default Logout