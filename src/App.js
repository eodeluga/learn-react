import React, { useState, useEffect } from 'react';

import './App.css';
import ContactCard from './ContactCard';

const App = () => {

    // State is initialised as an empty array
    const [results, setResults] = useState([]);

    // useEffect with empty array param ensures React only fetches data once
    useEffect(() => {

        // Get users from API
        fetch("https://randomuser.me/api?results=5")
            .then(res => res.json())
            .then(data => {
                setResults(data.results)
            })
    }, [])


    return (
        <div>
            {results.map((result, index) => {
                return (
                    <ContactCard
                        // These are props
                        avatarUrl={result.picture.large}
                        name={result.name.first}
                        email={result.email}
                        age={result.dob.age}
                    />
                )
            })}
        </div>
    )

    /* // The array to hold the contacts
    let contacts = []
    
    // Iterate over returned contacts to produce components
    getContacts()
    .forEach(contact => {
        contacts.push(
            <div>
                <ContactCard
                    // These are props
                    //avatarUrl={item.avatarUrl}
                    name={contact.name}
                    email={contact.email}
                    phone={contact.phone}
                />
            </div>
        )
    }) */
    /* 
    const getContacts = (cb) => {
        // Get contacts from API
        conts =  fetch('https://jsonplaceholder.typicode.com/users',  {
            method: 'get',
        })
        cb(conts);
        
    }
    
    
    getContacts((item) => {
        console.log("yes", item);
    });
    return; */






    /* const contacts = [
        {
            avatarUrl: "https://via.placeholder.com/150",
            name: "Jenny Han",
            email: "jenny.han@notreal.com",
            age: 25
        },
        {
            avatarUrl: "https://via.placeholder.com/150",
            name: "Paul Jones",
            email: "paul.jones@notreal.com",
            age: 45
        },
        {
            avatarUrl: "https://via.placeholder.com/150",
            name: "Peter Pan",
            email: "peter.pan@neverland.com",
            age: 100
        }
    ] */

    /* let display = [];
    // Create components by iterating over array
    conts.forEach(item => {
        // Store each component in array element
        display.push(
            <div>
                <ContactCard
                    // These are props
                    //avatarUrl={item.avatarUrl}
                    name={item.name}
                    email={item.email}
                    phone={item.phone}
                />
            </div>
        );
    }); */

    // Render the components


}

export default App;