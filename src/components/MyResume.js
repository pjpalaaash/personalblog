
import '../App.css'
import React from 'react'

export default function MyResume() {
  return (
    <section class="site-section " id="section-resume" >
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-5">
          <div class="section-heading text-center">
            <h2>My <strong style={{color:"#bac964"}}>Resume</strong></h2>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="mb-5">SCHOOL</h2>


          <div class="resume-item mb-4">
            <span class="date"><span class="icon-calendar"></span> March 2003 - May 2018</span>
            <h3>ST Augustine Sr Sec School</h3>
            <p>Xth Class: 2015-16 <br/> XIIth Class: 2017-18</p>

            <span class="school">Jabalpur, Madhya Pradesh</span>
          </div>



        </div>
        <div class="col-md-6">


          <h2 class="mb-5"> GRADUATION</h2>



          <div class="resume-item mb-4">
            <span class="date"><span class="icon-calendar"></span> August 2018 - June 2022</span>
            <h3>Sagar Institute of Science and Technology</h3>
            <p>Bachelor of Technology <br/>Computer Science Engineering </p>
            <span class="school">Bhopal, Madhya Pradesh</span>
          </div>




        </div>
      </div>
    </div>
  </section> 
  )
}
