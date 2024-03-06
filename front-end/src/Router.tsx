import { Route, Routes } from "react-router-dom";
import ProductList from "./widgets/Product List/ProductList";
import Reviews from "./widgets/Reviews/Reviews";

const style = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '36px',
    fontWeight: '700'
}

const Router = () => {
    return (
            <Routes>
                <Route path="*" element={<h1 style={style}>Page not found</h1>} />
                <Route path="/" element={<h1 style={style}>Home page</h1>} />
                <Route path="/products" element={< ProductList />}/>
                <Route path="/reviews" element={<Reviews />}/>
            </Routes>
    )
}

export default Router;