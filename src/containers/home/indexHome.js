import React from 'react'
import { Button } from 'react-bootstrap'
import './indexHome.css'

const Home = props => (
  <div id="homePageContainer">
    <div id="homeContent">
      <div id="homeHeader">
        <h6 id="homeHeaderMessage"><strong><em>Start uncovering fake news now by creating a FREE account</em></strong></h6>
        <Button href="/login" variant="danger" id="homeHeaderSignUp">Sign Up</Button>
      </div>
      <div id="homeBody">
        <div id="homeLeftSideBar"></div>
        <div id="homeBodyContent">
          <p>Here's more information about this website and what you can do with it.</p>
        </div>
        <div id="homeRightSideBar"></div>
      </div>
    </div>
  </div>
)

export default Home