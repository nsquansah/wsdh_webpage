import React from 'react';
import CountUp from 'react-countup';
import { FaCalendarAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import '../styles/Whatwedo.css';

const Whatwedo = () => {
  return (
    <div className="what-we-do-section">
      <div className="bordered-box">

        <h1 className='num'>
          <CountUp start={0} end={8} duration={2} />
        </h1>
        <h2 className='intext'>YEARS OF IMPACT</h2>

        <h1 className='num'>
          <CountUp start={0} end={10} duration={2.5} />+
        </h1>
        <h2 className='intext'>Superb Volunteers</h2>

        <h1 className='num'>
          <CountUp start={0} end={10} duration={2} />+
        </h1>
        <h2 className='intext'>Successful Projects</h2>

        <h1 className='num'>
          <CountUp start={0} end={1000} duration={3} />+
        </h1>
        <h2 className='intext'>Beneficiaries Impacted</h2>

      </div>
    </div>
  );
};

export default Whatwedo;
