import { useState } from 'react'
import {puppyList} from './data'

import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    // some logic here
    setFeatPupId(puppyId);
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={() => { console.log("puppy id: ", puppy.id); handleClick(puppy.id) }} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
    {featPupId && (
        <div>
          <h2>{puppies.find(puppy => puppy.id === featPupId)?.name}</h2>
          <ul>
            <li>Age: {puppies.find(puppy => puppy.id === featPupId)?.age}</li>
            <li>Email: {puppies.find(puppy => puppy.id === featPupId)?.email}</li>
            {/* Add more details as needed */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
