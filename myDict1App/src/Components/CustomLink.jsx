import { Link, useLocation } from 'react-router-dom';

function CustomLink({ href, children, className = "", ...props }) {
    const location = useLocation(); 
    const path = location.pathname.replace(/\/$/, "");
    const linkHref = href.replace(/\/$/, ""); 
  
  
    const isActive = path === linkHref;
    const activeClass = isActive ? "active" : "";
  
    return (
        <Link to={href} className={`${className} ${activeClass}`} {...props}>
            {children}
        </Link>
    );
  }

  export default CustomLink
 