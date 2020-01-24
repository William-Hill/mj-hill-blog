/* Vendor imports */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'
import Config from '../../../config'

const Speaking = props => {
  let { speakingPhoto } = props.data
  const speakingPage = Config.pages.speaking

  const previousSpeakingGigs = {
    2016: [
      'Software Improvement Networking Group(SWING) - Livermore, CA: "Plotting Categorical Data with D3.js"',
    ],
    2017: [
      'SAP Design Thinking Deep Dive for Minority Serving Institutions - Stanford, CA: Panelist',
      'ESGF Triennal Report - Washington, DC: "ESGF Installer Status Update"',
      'ESGF Face 2 Face Conference - San Francisco, CA: "ESGF Installer Status Report"',
      '/dev/color in Motion - Menlo Park, CA: "Fireside Chat with Jeff Dean"',
      'Tapia Conference - Atlanta, CA: "Resume Writing Panel"',
    ],
    2018: [
      'ESGF Face 2 Face Conference - Washington, DC: "ESGF Installer Status Report and ESGF 3.0 Beta Release Announcement"',
    ],
    2019: [
      '/dev/color Guild Roundtable - "Recruiting and Retaining Black Software Engineers Panel"',
      'Strata Data Conference: San Francisco, CA - "The Will Test"',
      '/dev/color in Motion - Redwood City, CA - "The Will Test Panel"',
      'Tapia Conference: San Diego, CA - "The Will Test"',
      'Tapia Conference: San Diego, CA  - "Wakanda Name You Got"',
      'TrapxArt Trapathon: Oakland, CA - "Tech and Cannabis Panel"',
    ],
  }
  return (
    <Layout title="Speaking">
      <SEO
        title="Speaking"
        description="A listing of M.J. Hill's previous and upcoming speaking engagements"
        path={speakingPage}
      />
      <div className={style.container}>
        <div className={style.photo}>
          <Img fluid={speakingPhoto.childImageSharp.fluid} />
        </div>
        <div className={style.content}>
          <p>
            I have given talks and workshops on various topics including data
            visualization, web development, data science, machine learning, and
            increasing diversity in tech.
          </p>
        </div>
      </div>
      <div>
        {Object.keys(previousSpeakingGigs).map(gig => {
          return (
            <div>
              <h3>{gig}</h3>
              {previousSpeakingGigs[gig].map(previousTalk => {
                return <p>{previousTalk}</p>
              })}
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    speakingPhoto: file(name: { eq: "mj_speaking_at_strata" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default Speaking
