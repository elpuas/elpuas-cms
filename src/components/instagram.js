import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Instagram = () => (
  <StaticQuery
    query={graphql`
      query InstagramPosts {
        allInstaNode(limit: 12) {
          edges {
            node {
              localFile {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500 quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <div>
        {
          data.allInstaNode.edges.map((item, i) => (
            item.node.localFile ? (
              <div key={i}>
                <Image
                  fluid={item.node.localFile.childImageSharp.fluid}
                />
              </div>
            ) : (<div></div>)
          ))
        }
      </div>
    )}
  />
);

export default Instagram;