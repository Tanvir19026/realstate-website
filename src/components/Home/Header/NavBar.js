import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div
          className="d-flex mr-5"
          style={{ backgroundColor: "black", width: "100%" }}
        >
          <h2
            style={{
              color: "grey",
              marginLeft: "20px",
              fontWeight: "600",
              marginTop: "5px",
            }}
          >
            Real <span style={{ color: "red" }}>State</span>
          </h2>

          <ul
            className="d-flex justify-content-between"
            style={{ marginLeft: "250px" }}
          >
            <Link
              to="/"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>Home-Loans</span>
            </Link>

            <Link
              to="/Sell"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>Sell</span>
            </Link>

            <Link
              to="/Buy"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>Buy</span>
            </Link>

            <Link
              to="/"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>Property Services</span>
            </Link>
            <Link
              to="/"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>Help</span>
            </Link>
            <Link
              to="/login"
              className="text-light"
              style={{
                fontWeight: "600",
                padding: "10px",
                textDecoration: "none",
                marginLeft: "20px",
              }}
            >
              <span>login</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
