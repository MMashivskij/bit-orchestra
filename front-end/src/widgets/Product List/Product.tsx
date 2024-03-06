const productStyle = {
    width: "200px",
    padding: "10px",
    "&:hover": {
        border: '1px solid black'
    }
}

const infoStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    creationAt: string;
    updatedAt: string;
    category: string;
}

interface ProductProps {
    product: Product
}

const Product: React.FC<ProductProps> = ({ product }) => {
    
    return (
        <div id={`product-${product.title}`} style={productStyle}>
            <img src={product.image} alt="" id={`product-${product.title}-image`}/>
            <div id={`product-${product.title}-info`} style={infoStyle}>
                <span>{product.title}</span>
                <span>${product.price}</span>
            </div>
            <span style={{ fontSize: '12px' }}>{product.category}</span>
        </div>
    );
}

export default Product;