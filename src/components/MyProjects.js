
import '../App.css'
import React from 'react'

export default function MyProjects() {
  return (
    <section class="site-section pb-0" id="section-services">
    <div class="container">

      <div class="row mb-4">
        <div class="col-md-12">
          <div class="section-heading text-center">
            <h2>My <strong style={{color:"#bac964"}}>Projects</strong></h2>
          </div>
        </div>
      </div>
      <div class="row">

        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="card mx-2">
            <div class="content">
              <div class="front">
                <h3 class="card-head title">Text Changer</h3>
                 {/* <p class="subtitle">Hover me :)</p> */}
              </div>

              <div class="back">
                <p class="description">
                  Technology used: Javascript and ReactJs <br />
                  <a href="https://pjpalaaash.github.io/TextUtils/" class="plink"> Project Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="card mx-2">
            <div class="content">
              <div class="front">
                <h3 class=" card-head title">Wikipedia Text Analysis</h3>
                 {/* <p class="subtitle">Hover me :)</p>  */}
              </div>

              <div class="back">
                <p class="description">
                  Technology used: Python and Flask <br/>
                  <a href="https://github.com/pjpalaaash/Wikipedia-Text-Analysis" class="plink"> Project Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 text-center mb-5">
          <div class="card mx-2">
            <div class="content">
              <div class="front">
                <h3 class="card-head title">Tic Tac Toe</h3>
                 {/* <p class="subtitle">Hover me :)</p>  */}
              </div>

              <div class="back">
                <p class="description">
                  Technology used: Javascript and ReactJs <br/>
                  <a href="https://pjpalaaash.github.io/tic-tac.io/" class="plink"> Project Link</a>
                </p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>
  )
}
