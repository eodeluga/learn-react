import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
    const contacts = [
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
    ]

    let display = [];
    // Create components by iterating over array
    contacts.forEach(item => {
        // Store each component in array element
        display.push(
            <div>
                <ContactCard
                    // These are props
                    avatarUrl={item.avatarUrl}
                    name={item.name}
                    email={item.email}
                    age={item.age}
                />
            </div>
        );
    });

    // Render the components
    return display;
}

export default App;