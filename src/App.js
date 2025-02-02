import React, { useState } from 'react';
import WordSlideshow from './components/wordslideshow';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
  };

  return (
    <div className='main'>
      <h1>Memory</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select..</option>
        <option value="sign_language">Sign Language</option>
        <option value="japanese">Japanese</option>
      </select>

      {selectedOption === 'sign_language' && <div className='slideshow-box'><WordSlideshow option='sign_language'/></div>}
      {selectedOption === 'japanese' && <div className='slideshow-box'><WordSlideshow option='japanese'/></div>}
    </div>
  );
}

export default App;
