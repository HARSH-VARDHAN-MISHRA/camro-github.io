import React from 'react'
import './UserProfile.css'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
      <section className='profile-page'>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-detail bg-rounded">
                <div className="single">
                  <i class="fa-solid fa-circle-user"></i>
                  <p className='name'>harsh vardhan mishra</p>
                </div>
                <div className="single">
                  <i class="fa-solid fa-envelope"></i>
                  <p>anish@gmail.com</p>
                </div>
                <div className="single">
                  <i class="fa-solid fa-square-phone"></i>
                  <p>+91 9876543210</p>
                </div>
                <div className="single">
                  <i class="fa-solid fa-lock-open"></i>
                  <p>HARS0987</p>
                </div>
                <div className="single">
                  <i class="fa-solid fa-location-dot"></i>
                  <p>Adresss Filed </p>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="row bg-rounded">
                <div className="col-12">

                  <div className="btns-tab-list">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">My Orders</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Canceled orders</button>
                      </li>
                      {/* <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                      </li> */}
                    </ul>
                  </div>

                </div>
                <div className="col-12 mt-3 p-0">

                  <div className="max-table">
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                        {/* ---- My Order Table ---  */}
                        <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Product</th>
                                <th scope="col">Address</th>
                                <th scope="col">Status</th>
                                <th scope="col">View</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row" className='count'>1</th>
                                <td className='product-des'>
                                  <img src="https://i.ibb.co/MVCbbWm/pro-1.webp" alt="product-image" loading='lazy' decoding='async' />
                                  Ceramica Frypan
                                </td>
                                <td className='address'>Shop No.12, Sec 24, Pocket- 26, Rohini, New Delhi, Delhi 110085</td>
                                <td className='status'>
                                  <span className='pending'></span>
                                  Pending
                                </td>
                                {/* <td className='status'>
                                  <span className='shipped'></span>
                                  Shipped
                                </td>
                                <td className='status'>
                                  <span className='cancel'></span>
                                  Canceled
                                </td> */}
                                <td className='view'> 
                                  <Link to=''><i class="fa-regular fa-eye"></i></Link>
                                </td>
                              </tr>
                            </tbody>
                        </table>
                      </div>
                      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          {/* ---- My Order Table ---  */}
                          <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col">S.no</th>
                                  <th scope="col">Product</th>
                                  <th scope="col">Address</th>
                                  <th scope="col">Status</th>
                                  {/* <th scope="col">View</th>  */}
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th scope="row" className='count'>1</th>
                                  <td className='product-des'>
                                    <img src="https://i.ibb.co/MVCbbWm/pro-1.webp" alt="product-image" loading='lazy' decoding='async' />
                                    Ceramica Frypan
                                  </td>
                                  <td className='address'>Shop No.12, Sec 24, Pocket- 26, Rohini, New Delhi, Delhi 110085</td>
                                  <td className='status'>
                                    <span className='cancel'></span>
                                    Canceled
                                  </td>
                                  {/* <td className='view'> 
                                    <Link to=''><i class="fa-regular fa-eye"></i></Link>
                                  </td> */}
                                </tr>
                              </tbody>
                          </table>
                      </div>
                      {/* <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          

        </div>
      </section>
    </>
  )
}

export default UserProfile