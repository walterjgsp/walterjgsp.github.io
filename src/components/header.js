import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="ui attached stackable menu">
      <div className="ui container">
        <a className="item">
          <Link to="/">
            <i className="home icon"></i> Home
          </Link>
        </a>
        <a className="item">
          <i className="grid layout icon"></i> Browse
        </a>
        <a className="item">
          <i className="mail icon"></i> Messages
        </a>
        <div className="ui simple dropdown item">
          More
          <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item"><i className="edit icon"></i> Edit Profile</a>
            <a className="item"><i className="globe icon"></i> Choose Language</a>
            <a className="item"><i className="settings icon"></i> Account Settings</a>
          </div>
        </div>
        <div className="right item">
          <div className="ui input"><input type="text" placeholder="Search..."/></div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
