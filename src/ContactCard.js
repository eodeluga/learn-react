import React, { useState } from 'react';

const ContactCard = (props) => {

    // Destructuring
    const [showAge, setShowAge] = useState(false);

    return (
        <div className="contact-card">
            <img
                src={props.avatarUrl}
                alt="profile">
            </img>
            <div className="user-details">
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <button onClick={() => setShowAge(!showAge)}>Show Age</button>
                {/* Ternery operator */ }
                {showAge && <p>Phone: {props.age}</p>}
                
                {/* Demonstrates calling API from React and using a Promise*/}
                {/* <button onClick={
                    () => {
                        // Use fetch to make http request
                        fetch('https://jsonplaceholder.typicode.com/todos/1')
                            .then(response => response.json())
                            .then(json => alert(json.title))
                    }
                }>Dummy</button> */}
            </div>
        </div>
    );
}

export default ContactCard;