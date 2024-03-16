import React, { useEffect, useState } from 'react'
import './SingleProduct.css'

import bn1 from './bn-1.jpg'
import bn2 from './bn-2.jpg'
import bn3 from './bn-3.jpg'
import bn4 from './bn-4.jpg'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const [singleData,setData] = useState([]);
    const [info,setInfo] = useState("");
    const [sizes,setSize] = useState([]);
    const [num,setNum] = useState(1);

    const [active,setActive] = useState(null);

    const handleActiveClick=(size)=>{
        setActive(size);
        // console.log(size)
    }

    const handleIncreaseNumber=()=>{
        if(num >= 8){
            setNum(num)
        }
        else{
            setNum(num + 1);
        }
        
    }
    const handleDecreaseNumber=()=>{
        if(num == 1){
            setNum(num)
        }
        else{
            setNum(num - 1);
        }
    }

    const {id} = useParams()
    const handleProductData= async()=>{
        try {
            const response = await axios.post(`https://cooker.onrender.com/api/v1/single-product/${id}`)
            console.log(response.data.data)
            setInfo(response.data.data.addInfo)
            setSize(response.data.data.sizes)
            // console.log(info)
            setData(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        handleProductData()
    },[id])

    return (
        <>
            <section className="container mt-5 product-page">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-12">
                            {singleData && Array.isArray(singleData)  && singleData.map((item,index)=>(
                                    <div key={index} className="slider slide-show">
                                        <div><img src={item} alt="" /></div>
                                        <div><img src={bn2} alt="" /></div>
                                        <div><img src={bn3} alt="" /></div>
                                        <div><img src={bn4} alt="" /></div>
                                    </div>

                                ))}
                            </div>
                            <div className="col-md-12">
                                <div className="slider slider-nav">
                                    <div><div className="img"><img src={bn1} alt="" /></div></div>
                                    <div><div className="img"><img src={bn2} alt="" /></div></div>
                                    <div><div className="img"><img src={bn3} alt="" /></div></div>
                                    <div><div className="img"><img src={bn4} alt="" /></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="details">
                            <h2>{singleData.productName}</h2>
                            <div className="pricing">
                                <p>MRP </p>
                                <div className="actual-price">₹ {active ? (active.originalPrice):(singleData.originalPrice)  } </div>
                                <div className="cut-price">₹   {active ? (active.discoPrice):(singleData.discoPrice) }</div>
                            </div>:
                            <p className="desc">{singleData.Desc}</p>

                            <div className="size-btns">
                                {sizes.map((proSize,index)=>(
                                    <button key={index} className={`${active === proSize ?'active' : ''}`} onClick={()=>{handleActiveClick(proSize)}} >{proSize.size}</button>
                                ))}
                            </div>

                            <div className="main-btn">
                                <table className="table table-bordered mt-4">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Vendor : </th>
                                            <td>{singleData.vendor}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">SKU : </th>
                                            <td>{singleData.sku}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Availablity : </th>
                                            <td>{singleData.avilable ? 'Available' : 'Not Avilable'} in Stock</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Product Type : </th>
                                            <td>{singleData.productType}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="btns">
                                    <div className="quantity-input">
                                        <i className="fa-solid fa-minus" id="minus" onClick={handleDecreaseNumber}></i>
                                        <input type="number" min="1" value={num} max="8" readonly name="quantity" id="quantity" />
                                        <i className="fa-solid fa-plus" id="plus" onClick={handleIncreaseNumber}></i>
                                    </div>
                                    <div className="addToCart">
                                        <a href="javascript:void(0)">Add To Cart</a>
                                    </div>
                                </div>
                                <div className="buyNow">
                                    <a href="javascript:void(0)">BUY IT NOW </a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-desc-main">
                    <div className="row">
                        <div className="tabs">
                            <h4>Description</h4>
                            <h4>Additional Information</h4>
                        </div>
                        <div className="pills">
                            <div className="single-pill pill1">
                                <p className="text">Dish out your favorite recipes with the ultimate healthy twist! Our new top of the line Nutrimax Pressure Cooker cooks fast and comes with Maximum Nutrient Retention Technology (MNRT) enabling oil free faster cooking. Constructed using premium SAS metal technology this cooker is ultra hygienic and Induction Compatible.</p>
                                <h5>Features:</h5>
                                <ol>
                                    <li>
                                        <strong className="strong">Maximum Nutrient Retention Technology MNRT:</strong>
                                        <p>Fast Cooking: Cooks at low pressure but cooks fast while retaining maximum nutrients</p>
                                        <p>Superfast Cooking: Cooks at regular pressure for traditional superfast cooking</p>
                                    </li>
                                    <li>
                                        <strong className="strong">Smart Lock:</strong>
                                        <p>Easy smart switch lock system allows you to open and lock your cooker lid with ease.</p>
                                    </li>
                                    <li>
                                        <strong className="strong">Single-Whistle Technology:</strong>
                                        <p>Enables energy efficient cooking by releasing smaller amounts of steam continuously retaining optimum internal pressure</p>
                                    </li>
                                </ol>

                            </div>

                            <div className="single-pill pill2">
                                <table className="table table-bordered">
                                  <tbody>
                                        <tr>
                                            <th scope="row">BASE</th>
                                            <td>{info.base}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Material</th>
                                            <td>
                                                {info.material}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dishwasher safe</th>
                                            <td>{info.dishwasherSafe}</td>
                                        </tr>
                                  </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct