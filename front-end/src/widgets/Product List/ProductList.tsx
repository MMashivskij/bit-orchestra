import { useEffect, useState, CSSProperties } from "react";
import Product from "./Product";

const style: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
}

interface ProductData {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    creationAt: string;
    updatedAt: string;
    category: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<ProductData[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000/products").then((res) => res.json())
            .then(json => {
                setProducts(json);
            })
    }, []);

    return (
        <main style={style}>
            {products ? (
                products.map((product) => <Product key={product.id} product={product} />)
            ) : (
                'Loading ...'
            )}        </main>
    )
}

export default ProductList;