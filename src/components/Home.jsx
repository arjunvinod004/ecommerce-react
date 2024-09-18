import React from "react";

import Navbar from "./Navbar";
import Products from "./Products";
function Home() {
  return (
    <div className="hero">
      <Navbar />


      <div class="card bg-dark text-white border-0">
        <img
          src="https://t4.ftcdn.net/jpg/05/39/99/67/360_F_539996737_T5gJEIEqsGUjMXhrLZt0lDLcrOWsSHlb.jpg"
          class="card-img"
          alt="..."
        />
        
        <div class="card-img-overlay d-flex flex-column justify-content-center text-center">
          <h5 class="card-title display-3 fw-bold ">New Season Arrivals</h5>
          <p class="card-text lead fs-2">Check out All these Trends</p>
         
        </div>

  

      </div>

      <div className="poster container">
        <img
          src="https://images.meesho.com/images/pow/supplyBannerDesktop_1106.webp"
         
          alt=""
        />
        <div className="content">
          <span
            style={{ fontWeight: "bold", fontSize: "32px", lineHeight: "40px" }}
          >
            Register as Deals of Day Customer
          </span>
          <p
            style={{ fontSize: "16px", lineHeight: "20px", marginTop: "16px" }}
          >
            Sell Your Product to customers at 0% Commission
          </p>

          <div class="text">
            <span class="SupplierBanner__StyledSpan-sc-2qsypi-1 gVQYGC border" style={{textAlign:'justify',display:'flex'}}>
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                iconsize="20"
                class="sc-pyfCe cmcxGo"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
                  fill="#06A759"
                ></path>
              </svg>
              <p class="text-point">Grow your business 10x</p>
            </span>
            <span class="SupplierBanner__StyledSpan-sc-2qsypi-1 bqXqoC border"  style={{textAlign:'justify',display:'flex'}}>
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                iconsize="20"
                class="sc-pyfCe cmcxGo"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
                  fill="#06A759"
                ></path>
              </svg>
              <p class="text-point">Enjoy 100% Profit</p>
            </span>
            <span class="SupplierBanner__StyledSpan-sc-2qsypi-1 bqXqoC"  style={{textAlign:'justify',display:'flex'}}>
              <svg
                width="20"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                iconsize="20"
                class="sc-pyfCe cmcxGo"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 10.5C0 4.98 4.48.5 10 .5s10 4.48 10 10-4.48 10-10 10-10-4.48-10-10Zm7.283 4.293c.39.39 1.02.39 1.41 0l7.58-7.59a.996.996 0 1 0-1.41-1.41l-6.88 6.88-2.88-2.88a.996.996 0 1 0-1.41 1.41l3.59 3.59Z"
                  fill="#06A759"
                ></path>
              </svg>
              <p class="text-point">Sell all over India</p>
            </span>



          </div>
          <div className="text-center container mt-4">
  <button className="btn btn-primary">Register Now</button>
</div>
        </div>
      </div>

      <Products />
    </div>
  );
}

export default Home;
