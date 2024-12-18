import React from 'react'
import './TableOfContents.css'
import { useState, useEffect } from 'react'


function TableOfContents({data}) {

    const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      data.forEach((id) => {
        const section = document.getElementById(id.trim().replace(' ', '-'));
        const bounding = section.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.top < window.innerHeight / 2) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [data]);


  return (
    <div className='table-of-contents'>
      <h4>Table of Contents</h4>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.trim().replace(' ', '-')}`}
              className={activeSection === item ? 'active' : ''}
            >
              {item.replace(/^./, item[0].toUpperCase())}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents