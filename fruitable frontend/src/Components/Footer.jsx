import React from "react";
import CopyRight from "./CopyRight";
function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
        <div className="container py-5">
          <div
            className="pb-4 mb-4"
            style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
          >
            <div className="row g-4">
              <div className="col-lg-3">
                <a href="#">
                  <h1 className="text-primary mb-0">FreshFarm</h1>
                  <p className="text-secondary mb-0">Fresh products</p>
                </a>
              </div>
              <div className="col-lg-6">
                <div className="position-relative mx-auto">
                  <input
                    className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                    type="number"
                    placeholder="Your Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                    style={{ top: 0, right: 0 }}
                  >
                    Subscribe Now
                  </button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="d-flex justify-content-end pt-3">
                  <a
                    className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn btn-outline-secondary btn-md-square rounded-circle"
                    href=""
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Why People Like us!</h4>
                <p className="mb-4">
                We prioritize quality, freshness, and customer satisfaction in everything we do. Our commitment to providing organic, sustainably sourced fruits ensures that every bite is both healthy and delicious. 
                </p>
                <a
                  href=""
                  className="btn border-secondary py-2 px-4 rounded-pill text-primary"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Shop Info</h4>
                <a className="btn-link" href="">
                  About Us
                </a>
                <a className="btn-link" href="">
                  Contact Us
                </a>
                <a className="btn-link" href="">
                  Privacy Policy
                </a>
                <a className="btn-link" href="">
                  Terms &amp; Condition
                </a>
                <a className="btn-link" href="">
                  Return Policy
                </a>
                <a className="btn-link" href="">
                  FAQs &amp; Help
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column text-start footer-item">
                <h4 className="text-light mb-3">Account</h4>
                <a className="btn-link" href="">
                  My Account
                </a>
                <a className="btn-link" href="">
                  Shop details
                </a>
                <a className="btn-link" href="">
                  Shopping Cart
                </a>
                <a className="btn-link" href="">
                  Wishlist
                </a>
                <a className="btn-link" href="">
                  Order History
                </a>
                <a className="btn-link" href="">
                  International Orders
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-item">
                <h4 className="text-light mb-3">Contact</h4>
                <p>Address: Sitapura, Jaipur, Rajasthan</p>
                <p>Email: chiyajamwal275@gmail.com</p>
                <p>Phone: 9103225456</p>
                <p>Payment Accepted</p>
                <img src="img/payment.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CopyRight/>
    </>
  );
}

export default Footer;
