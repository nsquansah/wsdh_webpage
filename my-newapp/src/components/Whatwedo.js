import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";  // calendar icon
import { GiCheckMark } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import '../styles/Whatwedo.css';

const Whatwedo = () => {
  return (
    <div className="what-we-do-section">
        <div className="icon-container">
            <div className="circle">
             <FaCalendarAlt size={32} color="#111" /> 
            </div>
    
                 <div className="checkmark">
                     <GiCheckMark size={32} color="#111" />
                         </div>
                             <div className="people-group">
                                <FaPeopleGroup size={32} color="#111" />
                                </div>
      </div>
      <div className="icon-labels">
           <p className="icon-label1">Existence <span className='first'>+5 years</span></p>
           <p className="icon-label2">Projects completed <span className='second'>+10</span></p>
           <p className="icon-label3">Beneficiaries<span className='third'>400+</span></p>
      </div>
    </div>

    
  )
}

export default Whatwedo;
