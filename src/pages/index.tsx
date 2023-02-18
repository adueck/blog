import * as React from "react"
import {
  HeadFC,
  PageProps,
  Link,
  graphql,
} from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({
  data,
  location,
}) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes;

  return <Layout location={location}>
    <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
      {posts.map(post => {
        const title = post.frontmatter?.title || post.fields?.slug
        return (
          <div key={post.fields?.slug}>
            <div>
              <h2 className="mb-2">
                <Link to={post.fields?.slug || ""} itemProp="url">
                  <span itemProp="headline">{title}</span>
                </Link>
              </h2>
              <div className="small text-muted">{post.frontmatter?.date}</div>
            </div>
            <p
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: post.frontmatter?.description || post.excerpt || "",
              }}
              itemProp="description"
            />
          </div>
        )
      })}
    </div>
  </Layout>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Dueck - Blog</title>

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
