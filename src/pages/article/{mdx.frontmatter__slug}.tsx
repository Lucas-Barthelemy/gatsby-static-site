import { HeadFC, graphql } from "gatsby";
import React from "react";

// const ArticlePage: React.FC<PageProps<any>> = ({data}) => (
//     <>
//       <div className="prose">
//         <MDXProvider>
//           {data.mdx.body}
//         </MDXProvider>
//       </div>
//     </>
// )

function ArticlePage({ data: { mdx }, children }: { data: any, children: any}) {

  return (
    <div className="container mx-auto px-4">
      <h1>{mdx.frontmatter.title}</h1>
      <article className="prose prose-stone">
        {children}
      </article> 
    </div>
  )
}

export const query = graphql`
  query ArticlePage($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
      }
    }
  }
`;

export default ArticlePage

export const Head: HeadFC = () => <title>Article</title>