import { useStaticQuery, Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      allStrapiArticle {
        totalCount
        edges {
          node {
            id
            title
            strapiId
          }
        }
      }
    }
    `
  )
  console.log(data)
  return (
    <header style={{ background: `rebeccapurple`,marginBottom: `1.45rem`, }}>
      <div style={{ margin: `0 auto`,maxWidth: 960,  padding: `1.45rem 1.0875rem`, }}>
        <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{ color: `white`, textDecoration: `none`, }}
          >
          {siteTitle}
          </Link>

        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>

              {data.allStrapiArticle.edges.map(link => (

                <li
                  key={link.node.title}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `white` }} to={`/${link.node.id}`}>
                    {link.node.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

    </header>


  )
}

export default Header
