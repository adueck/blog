import * as React from "react"
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Bio from "../components/Bio";
import Seo from "../components/Seo";

const BlogPostTemplate: React.FC<PageProps<Queries.BlogPostBySlugQuery>> = ({
  data,
  location,
  children,
}) => {
  return <Layout location={location}>
    <article itemType="http://schema.org/Article">
      <h1>{data.mdx?.frontmatter?.title || ""}</h1>
      <section itemProp="articleBody">
        {children}
      </section>
    </article>
    <hr style={{ marginTop: "3rem" }} />
    <Bio />
    <nav className="blog-post-nav" style={{ marginTop: "2.5rem" }}>
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {data.previous && (
            <Link to={data.previous.fields?.slug || ""} rel="prev">
              ← {data.previous.frontmatter?.title}
            </Link>
          )}
        </li>
        <li>
          {data.next && (
            <Link to={data.next.fields?.slug || ""} rel="next">
              {data.next.frontmatter?.title} →
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </Layout>;
}

export const Head = ({ data }: PageProps<Queries.BlogPostBySlugQuery>) => {
  const post = data.mdx;
  return <Seo
      title={post?.frontmatter?.title || data.site?.siteMetadata?.title || ""}
      description={post?.frontmatter?.description || post?.excerpt || data.site?.siteMetadata?.description || ""}
      image={post?.frontmatter?.image?.childImageSharp?.fixed?.src || ""}
    />
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        description
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              src
            }
          }
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;