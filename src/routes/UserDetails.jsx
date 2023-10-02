import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'

const UserDetails = () => {
    const { userid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userid}`)
            .then(res => res.json())
            .then(data => setDetails(data))
            .catch(e => alert(e.message));
    }, [userid]);

    // one option to do if useState is null
    // if (!details) {
    //     return <h1>Loading...</h1>;
    // }

    return (
        <div className="col-12 col-md-6 m-2">
            <div className="card shadow rounded">
                <div className="card-body">
                    <h4 className="card-title">{details?.username}</h4>
                    {/* <h4 className="card-title">{details && details.username}</h4> */}
                </div>
            </div>
        </div>
    )
}

export default UserDetails;