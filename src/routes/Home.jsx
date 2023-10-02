import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="col-12 col-md-6">
            <h1 className="text-center">Home Page</h1>
            <div className="d-flex justify-content-center">
                <Link className='btn btn-primary' to='/users'>List of Users</Link>
            </div>
        </div>

    )
}

export default Home;