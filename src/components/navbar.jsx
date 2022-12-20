import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav">
            <CustomLink to="/">Now</CustomLink>
            <CustomLink to="/details">Details</CustomLink>
            <CustomLink to="/forecast">Forecast</CustomLink>
            <CustomLink to="/description">Description</CustomLink>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    
    return (
        <Link to={to} {...props} className={isActive ? "main-tabs__item  main-tabs__item--active" : "main-tabs__item"}>
            {children}
        </Link>
    );
}