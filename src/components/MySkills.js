
import '../App.css'
import React from 'react'

export default function MySkills() {
  return (
    <section class="site-section pb-0" id="section-services">
    <div class="container">

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="section-heading text-center">
            <h2>My <strong style={{color:"#bac964"}}>Skills</strong></h2>
          </div>
        </div>
      </div>
      <div class="row">

        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="site-service-item site-animate" data-animate-effect="fadeIn">
            <span class="icon">
              <span class="icon-browser2"></span>
            </span>
            <h3 class="mb-4">Web Designing</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
              blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
              ocean.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="site-service-item site-animate" data-animate-effect="fadeIn">
            <span class="icon">
              <span class="icon-presentation"></span>
            </span>
            <h3 class="mb-4">Python Programming</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

          </div>
        </div>
        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="site-service-item site-animate" data-animate-effect="fadeIn">
            <span class="icon">
              <span class="icon-video2"></span>
            </span>
            <h3 class="mb-4">JavaScript</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
              One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World
              of Grammar.</p>
          </div>
        </div>



      </div>
    </div>
  </section>
  )
}
