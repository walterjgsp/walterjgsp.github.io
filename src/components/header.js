import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="ui attached stackable menu">
      <div className="ui container">
        <Link
          to="/"
          className="item">
            <i className="home icon"></i> Home
        </Link>
        
        <div className="right item">
          <a
            href="https://github.com/walterjgsp"
            className="item">
              <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/walterjgsp/"
            className="item">
              <i class="fab fa-linkedin fa-2x"></i>
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
