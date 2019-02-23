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
        <div class="extra content">
          <div class="left floated author">
            <i className="fab fa-github fa-1x"></i>
          </div>
          <span class="right floated">
            {year}
          </span>
        </div>
      </a>
  )
}
