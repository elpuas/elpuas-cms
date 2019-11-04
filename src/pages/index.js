import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Hi, my name is Alfredo Navas, better known as el.puas and I am a Web Artisan based in the beautiful Costa Rica.</p>
        <p>I run a small workshop of Web Design & Development, I specialize in custom WordPress Development, eCommerce and JamStack with GatsbyJS</p>
        <p>I also help my local WordPress community as a organizer/speaker of the MeetUp Group , organizer and speaker of WordCamp San Jose, volunteer and speaker of several camps that include WordCamp US, WordCamp MIA, WordCamp Managua and WordPress Rome Group.</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
