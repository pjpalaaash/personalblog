import "../App.css";
import React from "react";

export default function MySkills() {
  return (
    <section class="site-section pb-0" id="section-services">
      <div class="container">
        <div class="row mb-4">
          <div class="col-md-12">
            <div class="section-heading text-center">
              <h2>
                My <strong style={{ color: "#bac964" }}>Skills</strong>
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div
              class="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span class="icon">
                <span class="icon-browser2"></span>
              </span>
              <h3 class="mb-4">Web Designing</h3>
              <p>
                Web design encompasses many different skills and disciplines in
                the production and maintenance of websites. The different areas
                of web design include web graphic design; user interface design
                (UI design); authoring, including standardised code and
                proprietary software; user experience design (UX design); and
                search engine optimization.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div
              class="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span class="icon">
                <span class="icon-presentation"></span>
              </span>
              <h3 class="mb-4">Python Programming</h3>
              <p>
                Python is a popular general-purpose programming language. It is
                used in machine learning, web development, desktop applications,
                and many other fields.
              </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 text-center mb-5">
            <div
              class="site-service-item site-animate"
              data-animate-effect="fadeIn"
            >
              <span class="icon">
                <span class="icon-video2"></span>
              </span>
              <h3 class="mb-4">JavaScript</h3>
              <p>
                JavaScript is a powerful programming language that can add
                interactivity to a website. JavaScript itself is relatively
                compact, yet very flexible. Developers have written a variety of
                tools on top of the core JavaScript language, unlocking a vast
                amount of functionality with minimum effort.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
