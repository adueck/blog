import * as React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import Bio from "./Bio";

const Layout: React.FC<{
    children: React.ReactNode,
    location: PageProps["location"],
}> = ({ children, location }) => {
    const homePage = ["/", "/blog/"].includes(location.pathname);
    return <div className="container" style={{ maxWidth: "700px", marginBottom: "3rem" }}>
        <nav className="mb-4">
            <div>
                <Link to="/">
                    {homePage
                        ? <h1 style={{ marginTop: "3rem", marginBottom: "2rem" }}>Adam Dueck - Blog</h1>
                        : <h4>Adam Dueck - Blog</h4>}
                </Link>
            </div>
        </nav>
        {homePage && <Bio />}
        <main>
            {children}
        </main>
        <footer className="mt-3">
            © {new Date().getFullYear()}
        </footer>
    </div>
}

export default Layout;
