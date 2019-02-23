import React from 'react'
import {StaticQuery, graphql } from "gatsby"

import ProjectItem from './projectItem'

const projectsQuery = graphql`
query{
  allMarkdownRemark{
    edges{
      node{
        html
        frontmatter{
          title
          link
          description
          year
        }
      }
    }
  }
}
`

export default function ProjectList() {

  return (
    <StaticQuery
      query={projectsQuery}
      render={ data => {
        const projects = data.allMarkdownRemark.edges
        return(
          <div className="ui cards three stackable">
            {projects.map( (project,i) =>{
              return(
                <ProjectItem
                  key= {i}
                  project = {project.node.frontmatter}
                  />
                )
              }
            )}

          </div>
        )
      }}
    />
  )
}
