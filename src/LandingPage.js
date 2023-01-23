import React from "react";
import './LandingPage.css'
import { Link } from 'react-router-dom';

function LandingPage(){
  return(
    <div>
      <div className="landing-page">
      <img className="l-page-img" src={require('./images/clone.png') }/>
      <Link to="/postview">
      <button className="l-page-btn">Go to My Page</button>
    </Link>
    </div>
    <img className="b-img" src="https://images.unsplash.com/photo-1674289145833-b3ec3cd37b34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
    </div>
  )
}
export default LandingPage;