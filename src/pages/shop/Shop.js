import React, { useEffect, useState } from 'react'
import './Shop.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Shop = () => {

  const [productData, setProductData] = useState([])
    const handleData = async () => {
        try {
            const response = await axios.get("https://cooker.onrender.com/api/v1/all-product");
            console.log(response.data.data);
            setProductData(response.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleData()
    }, [])
  return (
    <>
        <section className="page-breadcrumb">
          <h2>This Wali Categories</h2>
          <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Category Name</li>
              </ol>
          </div>
        </section>
         <section className="container mt-5">

            <div className="row">
                <div className="col-md-3 shop-side-view">
                    <div className="all-categories bg-rounded">
                      <h5>CATEGORIES</h5>
                      <ul>
                        <li><Link to=''> <i class="fa-solid fa-arrows-turn-right"></i> Category 1</Link></li>
                        <li><Link to=''> <i class="fa-solid fa-arrows-turn-right"></i> Category 2</Link></li>
                        <li><Link to=''> <i class="fa-solid fa-arrows-turn-right"></i> Category 3</Link></li>
                      </ul>
                    </div>

                    <div className="availability bg-rounded">
                      <h5>Availability</h5>

                      <div className="checkbox">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck1" />
                          <label class="form-check-label" for="gridCheck1">
                            Avilable in Stock
                          </label>
                        </div>
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck2" />
                          <label class="form-check-label" for="gridCheck2">
                            Out Of Stock
                          </label>
                        </div>
                      </div>
                    </div>
                </div>
                
                <div className="col-md-9">
                    <div className="product-lists main-product shop-page">
                      {productData && productData.map((item, index) => (
                          <Link to={`/Products/${item.productName}/${item._id}`} className="product" key={index}>
                              <div className="img">

                                  <img loading="lazy" decoding="async" src={item.images[0].img} className="front-img" alt="" />
                                  <img loading="lazy" decoding="async" src={item.images[1].img} className="back-img" alt="" />
                                  <span className={`property ${item.property === "Top Selling" ? 'topSelling' : ''} ${item.property === "bestseller" ? 'bestseller' : ''} ${item.property === "Hot Product" ? 'hotProduct' : ''} ${item.property === "" ? 'p-0' : ''}`}>{item.property}</span>
                                  
                              </div>
                              <div className="product-name">{item.productName}</div>
                              <div className="sizes" key={index}>
                                  {item.sizes.map((size, index) => (
                                      <small>{size.size}</small>

                                  ))}
                              </div>
                              <div className="mrp">
                                  <div className="original-price">₹{item.originalPrice}</div>
                                  <small className="cut-price">₹{item.discoPrice}</small>
                              </div>
                              <div className="grid-btn">
                                  <a href="javascript:void(0)" className="addToCart">Add to Cart <i className="fa-solid fa-cart-shopping"></i></a>
                                  {/* <Link to='' className="Wishlist"><i className="fa-regular fa-heart"></i></Link> */}
                              </div>
                          </Link>
                      ))}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop