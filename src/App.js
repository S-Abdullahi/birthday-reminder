import React, { useState } from 'react' 
import data from './data'
import List from './list'



function App() {
  const clearClick = () => {
    setPeople([])
  }
  const [people,setPeople] = useState(data)
  return (
    
    <section className="App">
      <h2>{people.length} birthdays today</h2>
      <List people={people}/>
      <div className="profile-button">
       <button type="button" className="btn" onClick={clearClick}>Clear All</button>
      </div>
    </section>
  );
}

export default App;
