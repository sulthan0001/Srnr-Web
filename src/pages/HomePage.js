import React from 'react'
import OurTeam from '../components/OurTeam';
import Greatness from '../components/Greatness';
import Define from '../components/Define';
import Ourservices from '../components/Ourservices';
import OurTechnologies from '../components/OurTechnologies';

function HomePage() {
  return (
    <div>
      <Greatness/>
      <Define/>
      <Ourservices/>
      <OurTechnologies/>
      <OurTeam />
    </div>
  )
}

export default HomePage