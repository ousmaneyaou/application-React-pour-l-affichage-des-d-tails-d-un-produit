import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import nameImage from './ousmane.jpg';

const name = "Ousmane"; 

function App() {
  return (
    <div className="App">
      <div className="card" style={{ width: '18rem', margin: 'auto', marginTop: '50px' }}>
        <Image />
        <div className="card-body">
          <Name /><Price />
        </div>
        <Description />
      </div>
      <div style={{ marginTop: '20px' }}>
        {name ? <p>Bonjour, {name}!</p> : <p>Bonjour, là!</p>}
        {name && <img src={nameImage} alt="Placeholder" style={{ width: '150px', height: '150px' }} />}
      </div>
    </div>
  );
}

export default App;
