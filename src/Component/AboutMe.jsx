import React from "react";

export default function AboutMe() {
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-5 left_box">
              <div>
                <div className="p_left_box float-end">
                  <div className="card w-100 h-100 d-flex align-items-center ">
                    <div className="w-100 text-center dp-background-img p-3">
                      <img
                        className="dp rounded-circle"
                        src="profile.jpg"
                        alt="Title"
                      />
                    </div>
                    <div className="card-body pt-4">
                      <h4 className="card-title">Nagesh Sonawane</h4>
                      <p className="card-text text-center">
                        Front-end React developer
                      </p>
                      <div className="card-footer">
                        <a
                          href="https://www.instagram.com/nagesh_sonawane013_7/"
                          target="_blank">
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a
                          href="https://www.instagram.com/nagesh_sonawane013_7/"
                          target="_blank">
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a
                          href="https://twitter.com/nagesh0137"
                          target="_blank">
                          <i className="bi bi-twitter"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/nagesh-sonawane-7203b828a/"
                          target="_blank">
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/Nagesh0137" target="_blank">
                          <i className="bi bi-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 right_box">
              <div className="p_right_box">
                <h1>Hello....!</h1>
                <h4>Here's who I am & what I do</h4>
                <a href="resume.html">
                  <button class="btn shadow btn-info text-white border-0 rounded-pill">
                    RESUME
                  </button>
                </a>
                <a href="project.html">
                  <button class="btn shadow btn-warning ms-1 border-0 rounded-pill">
                    PROJECTS
                  </button>
                </a>
                <p class="text-break mt-3">
                  <b>I'm a developer. </b>
                  <br />A frontend developer is a professional who specializes
                  in creating the user interface and user experience of a
                  website or web application. This involves working with
                  technologies such as{" "}
                  <b>HTML, CSS, JavaScript and React.js </b>
                  to implement designs and ensure that the website or
                  application is visually appealing, responsive, and easy to
                  use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
