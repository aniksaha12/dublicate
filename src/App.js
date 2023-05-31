import React, {useState} from 'react';
import './App.css';

function App() {
  const [dateData, setDateData] = useState('');
  const [duplicatedDates, setDuplicatedDates] = useState([]);

  const handleInputChange = (event) => {
    setDateData(event.target.value);
  }
  const handleCheckDuplicates = () => {
    const dates = dateData.split(',').map(date => date.trim());

    const dateCounts = {}
    dates.forEach(date => {
      dateCounts[date] = (dateCounts[date] || 0) +1;
  });

  const filteredDates = Object.keys(dateCounts).filter(date => dateCounts[date] > 1);
  const sortedDates = filteredDates.sort((a, b) => (new Date(b)) - (new Date(a)));

  setDuplicatedDates(sortedDates);
}

  return (
    <div className="container">
        <h1 className='heading'>Duplicate Date Finder</h1>
        <div className="form-group">
          <label htmlFor="dateInput" className='heading'>Enter dates:</label>
          <input type="text" className="form-control" id="dateInput"
                 value={dateData} onChange={handleInputChange} />
        </div>
        <button className="btn btn-primary" onClick={handleCheckDuplicates}>Check Duplicates</button>
        <h2 className='heading'>Dublicates Dates:</h2>
        <ul>
            {duplicatedDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
