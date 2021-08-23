import React from 'react'
import { Link, Route } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>Hello From Welcome Component.</h1>
            <Link to='/welcome/new-user'>user profile</Link>
            {/* if welcome page is active this route will be
             evaluated , if not so never will be executed */}
            <Route path='/welcome/new-user'>
                <p>welcome new, user!</p>
            </Route>
        </div>
    )
}

export default Welcome