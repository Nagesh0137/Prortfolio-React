import React from "react";
import HeadTitle from "./HeadTitle";
export default function Projects() {
  return (
    <section>
      <div className="col-12 pt-5 d-flex align-items-center flex-column">
        <HeadTitle title="Skills"></HeadTitle>
        <div className="col-11 col-md-8 mb-5 p-5 shadow-lg">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-danger"
              style={{ width: "90%" }}>
              HTML
            </div>
            <b className="text-dark ms-3">90%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-success"
              style={{ width: "85%" }}>
              CSS
            </div>
            <b className="text-black ms-3">85%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-info"
              style={{ width: "90%" }}>
              BOOTSTRAP
            </div>
            <b className="text-black ms-3">90%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-warning"
              style={{ width: "55%" }}>
              JAVASCRIPT
            </div>
            <b className="text-black ms-3">55%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-primary"
              style={{ width: "80%" }}>
              REACT.JS
            </div>
            <b className="text-black ms-3">80%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-dark"
              style={{ width: "65%" }}>
              GITHUB
            </div>
            <b className="text-black ms-3">65%</b>
          </div>
          <div className="progress mt-3">
            <div
              className="progress-bar progress-bar-striped bg-secondary"
              style={{ width: "88%" }}>
              WORDPRESS
            </div>
            <b className="text-black ms-3">88%</b>
          </div>
        </div>
        <div className="col-11 col-md-8 projects_box rounded-5 mb-5">
          <div className="projects shadow-lg rounded-3">
            <h2 className="text-black d-flex align-items-center px-3">
              Profile-card
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/Profile-card/">
                <button className="btn mt-1 btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/Profile-card/"
              className=""
              title="Profile Card"></iframe>
          </div>

          <div className="po2 rounded-3 shadow-lg mt-5">
            <h2 className="text-black p2_caption d-flex align-items-center pt-2 px-3">
              Bank Account Opening Form
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/Bank-account-open-form/">
                <button className="btn btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/Bank-account-open-form/"
              className="bg-white p2 rounded-2 shadow-lg m-0"
              title="Bank Account Opening Form"></iframe>
          </div>
          <div className="mt-5 rounded-3 shadow-lg col-12 po2">
            <h2 className="text-black p2_caption d-flex align-items-center pt-2 px-3">
              Web Developer Portfolio
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/codewell_projects/">
                <button className="btn btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/codewell_projects/"
              className="bg-white p2 rounded-2 shadow-lg m-0"
              title="Web Developer Portfolio"></iframe>
          </div>
          <div className="mt-5 rounded-3 shadow-lg col-12 po2">
            <h2 className="text-black p2_caption d-flex align-items-center pt-2 px-3">
              QR-code
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/QR-code/">
                <button className="btn btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/QR-code/"
              className="bg-white p2 rounded-2 shadow-lg m-0"
              title="QR Code"></iframe>
          </div>
          <div className="mt-5 rounded-3 shadow-lg col-12 po2">
            <h2 className="text-black p2_caption d-flex align-items-center pt-2 px-3">
              Hosterr-Waitlist-Page-codwell
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/Hosterr-Waitlist-Page-codwell/">
                <button className="btn btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/Hosterr-Waitlist-Page-codwell/"
              className="bg-white p2 rounded-2 shadow-lg m-0"
              title="Hosterr Waitlist Page"></iframe>
          </div>
          <div className="mt-5 rounded-3 shadow-lg col-12 po2">
            <h2 className="text-black p2_caption d-flex align-items-center pt-2 px-3">
              results-summary
              <a
                className="ms-auto"
                target="_blank"
                rel="noopener noreferrer"
                href="https://nagesh0137.github.io/results-summary/">
                <button className="btn btn-dark">Live demo</button>
              </a>
            </h2>
            <iframe
              src="https://nagesh0137.github.io/results-summary/"
              className="bg-white p2 rounded-2 shadow-lg m-0"
              title="Results Summary"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
