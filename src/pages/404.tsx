import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage: React.FC<PageProps> = (props) => {
  return <Layout location={props.location}>
    <h1>404 Not Found</h1>
  </Layout>;
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
