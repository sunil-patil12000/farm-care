import { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function Product() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(() => {
        const existingCart = sessionStorage.getItem('cart');
        return existingCart ? JSON.parse(existingCart) : [];
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:4545/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (item) => {
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        console.log(updatedCart);
        toast.success('Successfully Add To Cart')
    };

    return (
        <div className="container" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-lg-3" style={{ marginTop: '1rem', margin: '2rem' }} key={index}>
                        <div className="product-card">
                            <img src={'http://localhost:4545/' + product.path} style={{ height: '10rem' }} alt={product.title} />
                            <div className="product-details">
                                <h3>{product.title}</h3>
                                <span style={{ marginTop: '.5rem' }}>₹{product.price}</span>
                                <button
                                    style={{ marginTop: '.5rem' }}
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
