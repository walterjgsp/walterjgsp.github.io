import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="ui inverted attached  menu">
      <div className="ui container">
        <Link
          to="/"
          className="item">
            <i className="home icon"></i> Home
        </Link>

        <div className="right icon menu">
          <a
            href="https://github.com/walterjgsp"
            className="item">
              <i className="fab fa-github fa-1x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/walterjgsp/"
            className="item">
              <i className="fab fa-linkedin fa-1x"></i>
          </a>
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
