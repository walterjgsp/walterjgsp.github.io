import React from 'react'

export default function ProjectItem(props){

  const {title,description,link} = props.project
  return(
    <div className="card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">
          {description}
        </div>
      </div>
      <a
        href = {link}
        className="ui bottom attached button">
        <span><i className="fab fa-github fa-1x"></i> Link</span>
      </a>
    </div>
  )
}
