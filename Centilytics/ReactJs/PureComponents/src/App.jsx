import React, { useState, memo } from 'react';
import './app.css'; // We'll define this separately

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');
  
  console.log('Parent App rendered');
  
  return (
    <div className="container">
      <h1>Pure Component Example</h1>
      
      {/* Counter section */}
      <div className="section">
        <p>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)} 
          className="button"
        >
          Increment Count
        </button>
      </div>
      
      {/* Text section */}
      <div className="section">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input"
        />
      </div>
      
      {/* Components section */}
      <div className="components-container">
        <div className="component-wrapper">
          <h2>Regular Component</h2>
          <RegularComponent message="I re-render every time!" />
        </div>
        
        <div className="component-wrapper">
          <h2>Pure Component</h2>
          <PureComponent message="I only re-render when props change!" />
        </div>
      </div>
    </div>
  );
}

// Regular functional component
function RegularComponent({ message }) {
  console.log('RegularComponent rendered');
  return (
    <div className="component">
      <p>{message}</p>
      <p className="note">Check console to see renders</p>
    </div>
  );
}

// Pure component using React.memo
const PureComponent = memo(function PureComponent({ message }) {
  console.log('PureComponent rendered');
  return (
    <div className="component">
      <p>{message}</p>
      <p className="note">Check console to see renders</p>
    </div>
  );
});

export default App;
