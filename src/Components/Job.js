import React, { useState, useEffect } from 'react';



const Job = () => {
  const [jobTitles, setJobTitles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://auto-pay-api-sgiognjnfa-uc.a.run.app/auto-pay/get-ui-params');
        const data = await response.json();
        setJobTitles(data.jobTitles);
      } catch (error) {
        console.error('Error fetching job titles data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs once on mount
      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const filteredjobTitles = jobTitles.filter((jobTitles) => 
      jobTitles.item.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div>
      <h2>Job List <tr></tr>
       <input 
        type= "text"
        placeholder="Search for Job Title"
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
                {filteredjobTitles.map((jobTitle) => (
                  <tr key={jobTitle.id}>
                    <td>{jobTitle.id}</td>
                    <td>{jobTitle.item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
      </div>
    </div>
  );
};

export default Job;
