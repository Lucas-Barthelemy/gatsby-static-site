import * as React from "react"
import { graphql, HeadFC, Link, PageProps } from "gatsby"

import "./index.css" 

interface Edge {
  node: {
    id: string;
    frontmatter: {
      title: string;
      category: string;
      date: string;
      slug: string;
    };
  };
}

interface mdxData {
  allMdx: {
    edges: Edge[];
  };
}

const BlogIndex: React.FC<PageProps<mdxData>> = ({ data }) => (
  <>
    <div>
      <h1>Blog</h1>
      <div className="card-container">
        {data.allMdx.edges.map((edge: Edge) => (
          <Link to={`/blogs/${edge.node.frontmatter.slug}`}>
            <div className="card" key={edge.node.id}>
              <h3 className="card-title">{edge.node.frontmatter.title}</h3>
              <h3 className="card-date">{edge.node.frontmatter.date}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
)

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          id
          frontmatter {
            title
            category
            date
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex


export const Head: HeadFC = () => <title>Liste des articles</title>