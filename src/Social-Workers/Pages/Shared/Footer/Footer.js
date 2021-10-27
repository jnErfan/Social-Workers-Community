import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="container">
        <div className="text-start pt-3">
          <img width="20%" src="https://i.ibb.co/qNbKtMb/logo.png" alt="" />
        </div>
        <h4 className="footer-Text fw-bold pt-5"> ABOUT US </h4>
        <div className="d-flex row row-cols-3 mt-4 mb-4">
          {/* About Me   */}
          <div className="col col-12 col-md-6 col-lg-4">
            <p className="footer-Text fw-bolder text-start">
              Hello. Assalamualaikum Guys. <br />
              Red Onion Restaurant This Is Our Online Restaurant We Hope You
              Enjoy Visiting This Website. Thanks For Visit Our Web Site.
            </p>
          </div>
          <div className="col col-12 col-md-6 col-lg-4">
            <p className="footer-Text fw-bolder text-start">
              {" "}
              Location: Purbadhala Netrokona, Dhaka Bangladesh
              <br />
              Phone: +8801314580860
              <br />
              Contract: +706-763-8296
            </p>
          </div>
          <div className="col col-12 col-md-6 col-lg-4">
            <p className="fw-bolder text-start supp">
              <Nav.Link className="text-white py-0" href="#GetHelp">
                Get Help
              </Nav.Link>
              <Nav.Link className="text-white py-0" href="#About">
                About Our Online Food
              </Nav.Link>
              <Nav.Link className="text-white py-0" href="#Blog">
                Read Our Blog{" "}
              </Nav.Link>
              <Nav.Link className="text-white py-0" href="#NearMe">
                Restaurant Near Me{" "}
              </Nav.Link>
            </p>
          </div>
        </div>
        <div className="mb-4">
          <button
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/j-n-erfan-8368b0216/")
            }
            className="btn btn-outline-light rounded-pill pt-1 pb-1 ps-3 pe-3"
            type="button"
          >
            HIRE ME
          </button>
        </div>
      </div>
      <div className="footar-icon text-center mt-3">
        <a href="https://www.facebook.com/jnerfan">
          {" "}
          <i className="fab fa-facebook fb pe-3"></i>{" "}
        </a>
        <a href="https://www.instagram.com/j.n.erfan/">
          <i className="fab fa-instagram ins pe-3"></i>
        </a>
        <a href="https://twitter.com/login?lang=en">
          <i className="fab fa-twitter twt pe-3"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCRJ5d8nP2PBmv6rYdtNfFag">
          <i className="fab fa-youtube yt"></i>
        </a>
      </div>

      <div className="text-center pb-3">
        <hr className="footer-Text" />
        <span>
          <i className="far fa-copyright text-light text-center"></i>{" "}
          <span className="footer-Text">Design By J.N.Erfan</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
