import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import skills from './components/skills';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [type, setType] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);
  
  useEffect(() => {
    if (type === 'all') {
      setFilteredSkills(skills);
    } else {
      // Filter skills based on the selected category
      const filtered = skills.filter((skill) => skill.tech === type);
      setFilteredSkills(filtered);
    }
  }, [type]);



  function search(skill) {
    setType(skill);
  }
  const uniqueSkills = [...new Set(skills.map((e) => { return e.tech }))];
  uniqueSkills.unshift("all");
  return (
    <div className='container'>
      <div className='text-centre'>
        <ul className="nav border boder-dark">
          {uniqueSkills.map((Skills, index) => (
            <li className="nav-item" key={index}>
              <button onClick={() => search(Skills)} className='btn btn-success m-2'>{Skills}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='container'>
        <div >
          <div className='row m-3' >
            {filteredSkills.map((skill, index) => (
              <div className='col-4 mt-2'>
                <div className="card" style={{ width: '8rem' }} key={index}>
                  <div>{index}</div>
                  <img src={skill.icon} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
