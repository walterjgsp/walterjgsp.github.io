import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectList from '../components/projects/projectsList'
import axios from 'axios'

export default class IndexPage extends Component{

  constructor(props){
    super(props)

    this.state = {
      avatar_url:""
    }
  }

  componentDidMount(){
    this.getUserInfo()
  }

  getUserInfo(){
    axios
      .get("https://api.github.com/users/walterjgsp")
      .then( response => {
        this.setState({
          avatar_url: response.data.avatar_url,
        })
      })
  }

  render(){
    return(
      <Layout>
        <SEO title="Home" keywords={[`algorithm`, `engineer`, `software`]} />
          <div className="main">
            <img className="ui medium centered circular image" src={this.state.avatar_url}/>
            <h2 className="ui center aligned header">
              Walter José Gonçalves da Silva Pinto
            </h2>

            <h3 className="ui header">
              Projects
            </h3>
            <ProjectList/>
          </div>

      </Layout>
    )
  }
}
