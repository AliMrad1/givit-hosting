import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.jfif";
import footer1 from "../../assets/images/footer1.png";
function Footer() {
  return (
    <div>
      <div className="p-4 bg-primary text-white">
        <div className="container">
          <div className="row justify-content-sm-center">
            <div className="col-lg-4 col-md-6 col-sm-9 text-uppercase py-2">
              <div className="about-links p-3">
                <h4>About Us</h4>
                <div className="list-group ">
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaArrowRight /> what we stand for
                  </Link>
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaArrowRight /> what we stand for
                  </Link>
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaArrowRight /> what we stand for
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-9 py-2">
              <div className="news-letter">
                <h4 className="text-uppercase">NEWSLETTERS AND ALERTS</h4>
                <p className="p-2">
                  Get the latest GIVIT news and have a list of what is needed
                  right now delivered weekly to your inbox.
                </p>
                <Link
                  to=""
                  className="btn btn-outline-light rounded-pill pt-2 px-3"
                >
                  Subscribe
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-9 py-2">
              <div className="social-media">
                <h4 className="text-uppercase">CONNECT WITH US</h4>
                <div className="list-group d-flex flex-row justify-content-between">
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaFacebook size="20px" />
                  </Link>
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaInstagram size="20px" />
                  </Link>
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaTwitter size="20px" />
                  </Link>
                  <Link
                    to="/about-us"
                    className="list-group-item list-group-item-action active"
                  >
                    <FaYoutube size="20px" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-9 py-2">
              <div className="images text-center">
                <img
                  src={Logo}
                  className="d-block w-50 py-2 m-auto"
                  alt=""
                />
                <img
                  src={footer1}
                  className="  d-block w-50 py-2 m-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="text p-4">
        <p className="text-center text-capitalize p-2 w-75 m-auto">
          GIVIT acknowledges the Traditional Owners of the land where we live
          and work. We pay our respects to Elders past, present and emerging,
          and Elders from other communities we may visit and walk beside. As an
          organisation, we recognise their connection to Country and their role
          in caring for and maintaining Country over thousands of years. May
          their strength and wisdom be with us today.
        </p>
      </div>
      {/* copyright */}
      <div className="copyright bg-primary p-3">
        <div className="container">
        <div className="text-light d-flex justify-content-md-between justify-content-center flex-md-row flex-column ">
          <div>
          © GIVIT Listed Ltd 2023 ABN 21 137 408 201{" "}
          <Link className="text-decoration-none text-light">Policies</Link> |{" "}
          <Link className="text-decoration-none text-light">Sitemap</Link>
          </div>
          <Link className="text-decoration-none text-light">
            {" "}
            Digital development :: zeroseven
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
