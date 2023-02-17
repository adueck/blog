import * as React from "react";
import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import Bio from "./Bio";

const Layout: React.FC<{
    children: React.ReactNode,
    location: PageProps["location"],
}> = ({ children, location }) => {
    return <div className="container" style={{ maxWidth: "700px", marginBottom: "3rem" }}>
        <nav className="mb-4">
            <div>
                <Link to="/">
                    {location.pathname === "/"
                        ? <h1 style={{ marginTop: "3rem", marginBottom: "2rem" }}>Adam Dueck - Blog</h1>
                        : <h4>Adam Dueck - Blog</h4>}
                </Link>
            </div>
        </nav>
        {location.pathname === "/" && <Bio />}
        <main>
            {children}
        </main>
        <footer className="mt-3">
            © {new Date().getFullYear()}
        </footer>
    </div>
}

export default Layout;
