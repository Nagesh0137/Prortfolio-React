import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-6 col-md-2 mt-3 mt-md-0 foot_right">
              <span>
                <b>Call</b>
                <br />
                123-456-7890
              </span>
            </div>
            <div className=" ps-5 ps-md-0 col-6 col-md-2 mt-3 mt-md-0 foot_right">
              <span>
                <b>Write</b>
                <br />
                info@mtsite.com
              </span>
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-center mt-3 mt-md-0 foot_right">
              <span>
                <b>Follow</b>
                <br />
                <a
                  href="https://www.instagram.com/nagesh_sonawane013_7/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ms-3 ms-md-2 bi bi-facebook "></i>
                </a>
                <a
                  href="https://www.instagram.com/nagesh_sonawane013_7/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ms-3 ms-md-2 bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com/nagesh0137"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ms-3 ms-md-2 bi bi-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/nagesh-sonawane-7203b828a/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ms-3 ms-md-2 bi bi-linkedin"></i>
                </a>
                <a
                  href="https://github.com/Nagesh0137"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="ms-3 ms-md-2 bi bi-github"></i>
                </a>
              </span>
            </div>
            <div className="col-12">
              <hr />
              <div className="text-center">
                <b>© 2024 by Nagesh Sonawane</b>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
