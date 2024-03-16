import React from 'react'
import './Sidecart.css'



const Sidecart = ({cartOpen,handleCartClose}) => {

    return (
        <>
            <aside className={`cart-side ${cartOpen ? 'active': ' '} `}>
                <div className="cart-nav">
                    <div className="back" id="close-aside-cart">
                        <a href="javascript:void(0)" onClick={handleCartClose}><i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <h3 className="nav-logo">
                        Bag <i className="fa-solid fa-bag-shopping"></i>
                    </h3>
                </div>

                <div className="cart-main">
                    <div className="login-register">
                        <p>Get Started & grab best offers!</p>
                        <a href="" className="btn">Login / Register</a>
                    </div>
                    <div className="products-container">
                        <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image"  />
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus" ></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image" />
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus"></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="product-desc row">
                                <div className="col-4 img">
                                    <img loading="lazy" decoding="async" src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png"  alt="product-image"/>
                                </div>
                                <div className="col-7">
                                    <p className="product-name">Outer lid cooker</p>
                                    <small className="size">1.5 Ltr</small>
                                </div>
                                <div className="col-1 text-end" id="deleteProduct">
                                    <i className="fa-regular fa-trash-can"></i>
                                </div>
                            </div>
                            <div className="price-qu">
                                <div className="quan">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus"></i>
                                        <input type="number" min="1" value="1" max="8" readonly name="quantity" id="quantity" />
                                            <i className="fa-solid fa-plus"></i>
                                    </div>
                                </div>
                                <div className="price">₹8850</div>
                            </div>
                        </div>
                    </div>

                    <div className="price-details">
                        <h5>Price Details</h5>
                        <div className="">
                            <small className="flex">
                                <div className="head">Bag MRP (9 items)</div>
                                <div className="price" id="bagMrpPrice">₹15600</div>
                            </small>
                            <small className="flex">
                                <div className="head">Bag Discount</div>
                                <div className="price" id="badDiscount">₹1360</div>
                            </small>
                            <small className="flex">
                                <div className="head">Shipping &#9432;</div>
                                <div className="">
                                    <div className="price cut-price" id="shippingFee">₹70 </div>
                                    <span className="free">Free</span>
                                </div>
                            </small>
                            <small className="flex final">
                                <div className="head">Pay</div>
                                <div className="price" id="finalPrice">₹14240</div>
                            </small>
                        </div>
                    </div>
                </div>

                <div className="cart-footer">
                    <div className="pricing">
                        <div className="total-price">₹14240</div>
                        <small>Grand Total &#9432;</small>
                    </div>
                    <a href="" className="proceed">
                        Proceed <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </aside>
        </>
    )
}

export default Sidecart