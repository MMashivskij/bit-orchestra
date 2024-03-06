import { Link } from "react-router-dom";

const style = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'currentcolor'
}

const linkStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '20px',
    borderRadius: '25px',
    margin: '20px'
}

const Navigation = () => {
    return (
        <nav style={style}>
            <Link to="/reviews" style={linkStyle}>Reviews</Link>
            <Link to="/products" style={linkStyle} >Products</Link>
        </nav>
    )
}

export default Navigation;