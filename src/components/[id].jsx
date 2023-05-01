import React from 'react'
import './Sp.css'
const single = () => {

    const [qty, setQty] = useState(1);

    const handleQtyChange = (action) => {
        if (action === "increment") {
            setQty(qty + 1);
        } else if (action === "decrement") {
            if (qty > 1) {
                setQty(qty - 1);
            }
        }
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="product-image"></div>
                    </div>
                    <div className="col-6">
                        <div className="product-name">Product Name</div>
                        <div className="product-price">$10.00</div>
                        <div className="product-qty">
                            <div className="qty-label">Qty:</div>
                            <div className="qty-actions">
                                <button className="qty-button" onClick={() => handleQtyChange("decrement")}>-</button>
                                <div className="qty">{qty}</div>
                                <button className="qty-button" onClick={() => handleQtyChange("increment")}>+</button>
                            </div>
                        </div>
                        <div className="product-buttons">
                            <button className="add-to-cart-button">Add to Cart</button>
                            <button className="buy-button">Buy Now</button>
                        </div>
                        <div className="product-description">
                            <div className="description-heading">Description</div>
                            <div className="description-content">Product Description Lorem Ipsum Dolor Sit Amet.</div>
                        </div>
                    </div>
                </div>
            </div>
            );







        </>
    )
}

export default single;