import React from 'react'

export default function ProjectItem(props){

  const {title,description,link,year} = props.project
  return(
      <a href={link}
        className="ui grey card raised link">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">
            {description}
          </div>
        </div>
        <div className="extra content">
          <div className="left floated author">
            <i className="fab fa-github fa-1x"></i>
          </div>
          <span className="right floated">
            {year}
          </span>
        </div>
      </a>
  )
}
