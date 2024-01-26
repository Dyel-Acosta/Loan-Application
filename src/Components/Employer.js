import React, { useState, useEffect } from 'react';

const Employer = () => {
  const [employers, setEmployers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://auto-pay-api-sgiognjnfa-uc.a.run.app/auto-pay/get-ui-params');
        const data = await response.json();
        setEmployers(data.employers);
      } catch (error) {
        console.error('Error fetching employer data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployers = employers.filter((employer) =>
    employer.item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  
  return (
    <div>
      <h2>
        Employer <tr></tr>
        <input
          type='text'
          placeholder='Search for Employer'
          value={searchTerm}
          onChange={handleSearch}
        />
      </h2>
      <div className='scrollable-content'>
        <div className='sticky-container'>
        
            <table>
            <thead>
                <tr>
                <th className='sticky-header'>ID</th>
                <th className='sticky-header'>ITEM</th>
                </tr>
            </thead>
            </table>
        </div>
  
      
        <table>
          <tbody>
          
           {filteredEmployers.map((employer) => (
            <tr key={employer.id}>
              <td>{employer.id}</td>
              <td>{employer.item}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employer;
