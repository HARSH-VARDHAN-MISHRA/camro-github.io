import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const SearchByName = () => {

    const {name} = useParams()
    const [productData, setProductData] = useState([])
    const handleData = async () => {
        try {
            const response = await axios.get(`https://cooker.onrender.com/api/v1/search?searchTerm=${name}&currentPage=1`);
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
          <h2>Search By {name}</h2>
          <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="/categories">Categories</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
              </ol>
          </div>
        </section>
         <section className="container mt-5">

            <div className="row">
                <div className="col-md-12">
                    <div className="product-lists main-product shop-page grid-5">
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

export default SearchByName