<?php
  $bodyClass = "home";
  include('header.php');
?>


<div class="banner-hero">
  <div class="row">
    <div id="container" class="container">
      <ul id="scene" class="scene">
        <li class="layer" data-depth="0.80"><img src="img/0.png"></li>
        <li class="layer" data-depth="0.65"><img src="img/1.png"></li>
        <li class="layer" data-depth="0.40"><img src="img/3.png"></li>
        <li class="layer" data-depth="0.30"><img src="img/2.png"></li>
      </ul>
    </div>
      <h3><span class="first">WEB DEVELOPER</span> | <span class="second">DESIGNER</span> | <span class="third">SEO</span></h3>
      <a href="#info"><i class="fa fa-angle-double-down fa-4x"></i></a>
  </div>
</div>

<div id="info"></div>
  <dl class="accordion" data-accordion>
    <dd>
      <a href="#panel1" class="about-me">ABOUT / ME</a>
      <div id="panel1" class="content">
        <div class="container-about">
          <p>
            Hello! My name is Dhanto Santika Yudha and I am a full-time Front End Developer in <a href="http://www.definite.co.id" target="_blank">Definite</a>, who specializes in creating dynamic and awesome web pages. Currently I am open to Freelance work, so If you are in need of a new website, redesign web pages, or web applications, please don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </dd>
    <dd>
      <a href="#panel2" class="skills-exp">SKILLS / EXPERIENCES</a>
      <div id="panel2" class="content">
        <div class="container-skill">
            <ul class="skill-list">
              <li class="skill">
                <h2>CSS3</h2>
                <div class="skill-1">
                </div>
              </li>
              <li class="skill">
                <h2>HTML5</h2>
                <div class="skill-2">
                </div>
              </li>
              <li class="skill">
                <h2>Ruby on Rails</h2>
                <div class="skill-3">
                </div>
              </li>
              <li class="skill">
                <h2>JavaScript</h2>
                <div class="skill-6">
                </div>
              </li>
              <li class="skill">
                <h2>Social Media Marketing</h2>
                <div class="skill-4">
                </div>
              </li>
              <li class="skill">
                <h2>User Experience</h2>
                <div class="skill-5">
                </div>
              </li>

            </ul>
        </div>
      </div>
    </dd>
    <dd>
      <a href="#panel3" class="gallery-port">WORK / GALLERY</a>
      <div id="panel3" class="content active">
        <div class="container-gallery">
          <div class="portfolio-slider">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><a href="img/portfolio-garuda-open.png" title=""><img src="img/portfolio-garuda.png">GARUDA INDONESIA<br/>with a Team in Definite</a></div>
              <div class="swiper-slide"><a href="img/portfolio-pepsodent-open.png" title=""><img src="img/portfolio-pepsodent.png">PEPSODENT DEEP CLEAN<br/>with a Team in Definite</a></div>
              <div class="swiper-slide"><a href="img/portfolio-lovebirds-open.png" title=""><img src="img/portfolio-lovebirds.png">GARUDA LOVEBIRDS<br/>with a Team in Definite</a></div>
              <div class="swiper-slide"><a href="img/portfolio-gatf-open.png" title=""><img src="img/portfolio-gatf-open.png">GATF 2015<br/>with a Team in Definite</a></div>
              <div class="swiper-slide"><a href="img/portfolio-rm-open.png" title=""><img src="img/portfolio-rm-open.png">RUMAH MEGAH<br/>Freelance</a></div>
              <div class="swiper-slide"><a href="img/portfolio-zodiac-open.png" title=""><img src="img/portfolio-zodiac.png">TRAVEL ZODIAC<br/> with a Team in Definite</a></div>
              <div class="swiper-slide"><a href="img/portfolio-lusia-open.png" title=""><img src="img/portfolio-lusia.png">AXA Ingat Sehat<br/> with a Team in Definite</a></div>
            </div>
          </div>
          <div class="nav-slide">
            <a href="#">
              <i class="fa fa-chevron-left prev hide"></i>
            </a>
             <a href="#">
              <i class="fa fa-chevron-right next"></i>
            </a>
          </div>

        </div>
      </div>
    </dd>
    <dd>
      <a href="#panel4" class="snippets-misc">SOCIAL / SNIPPETS</a>
      <div id="panel4" class="content">
        <div class="container-misc">
          <div id="instafeed"></div>
        </div>
      </div>
    </dd>
  </dl>
<div class="footer-hero">
  <div class="large-6 small-centered columns">
      <div class="row-footer">
        <img src="img/self.png" >
        <h2>Dhanto S. Yudha</h2>
      </div>
        <div class="social">
        <ul>
          <li><a href="mailto:d.santika.yudha@gmail.com"><i class="fa fa-envelope-square fa-3x"></i></a></li>
          <li><a href="http://instagram.com/dhantosy" target="_blank"><i class="fa fa-instagram fa-3x"></i></a></li>
          <li><a href="https://id.linkedin.com/in/dhantosy" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a></li>
          <li><a href="https://www.facebook.com/dhantosy" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a></li>
        </ul>
      </div>
  </div>
</div>

<?php
  include('footer.php');
?>
