import React from 'react'
// import { Navigate } from 'react-router-dom'

// import Auth from '../utils/auth'

const Home = () => {

    // if (Auth.loggedIn){
    //     return <Navigate to="/todo" replace={true}/>
    // }


    return (
        <main>
            <div className='col-6'>This page is now being loaded properly, your welcome</div>
            <div className='col-6 p-3'>This is a bootstrap test</div>
        </main>
    )
    
}

export default Home