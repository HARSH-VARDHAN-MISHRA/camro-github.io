import React, { useEffect, useState } from 'react'
import './Category.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Category = () => {

    const [categ,setCateg] = useState([])
    const handleCategories= async()=>{
        try {

            const response = await axios.get("https://cooker.onrender.com/api/v1/all-product")
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleCategories()
    },[])
  return (
    <>
        <section className="page-breadcrumb">
            <div className="row">
                <div className="col-12">
                    <h2>Our Categories</h2>
                    <div aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Our Categories</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        <section className='product-categories-page mt-5'>
            <div className="container">
                <div className="row">
                    <div className="grid-cate">
                        <Link to='' className="single">
                            <img src="https://i.ibb.co/wsKJqW4/non-stick-aluminium.png" alt="non-stick-aluminium" />
                            <h4>Pressure Cooker</h4>
                            <span className='avail'>56 Items</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Category