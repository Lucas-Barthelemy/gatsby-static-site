import { HeadFC, PageProps, graphql } from "gatsby";
import React from "react";

interface Node {
    body: string
}

interface mdxPage {
    allMdx: {
        nodes: Node[]
    }
}

const Article: React.FC<PageProps<mdxPage>> = ({ data }) => (
    <>
      <div>
        <h1>Article</h1>
        <div className="card-container">
          {data.allMdx.nodes.map((node: Node) => (
            <article className="prose lg:prose-xl">
                {node.body}
            </article>
          ))}
        </div>
      </div>
    </>
)

export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {slug: {eq: "rugby-presentation"}}}) {
      nodes {
        body
      }
    }
  }
`

export default Article

export const Head: HeadFC = () => <title>Article</title>