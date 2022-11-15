import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <div className="line-1"></div>
        <header className="header-1">
          <div className="border-1">
            <h1>MATAS ŠKIMELIS</h1>
            <div className="border-2">
              <h2>PROGRAMMER</h2>
            </div>
          </div>
        </header>

        <article className="article-1">
          <div className="container-1">
            <h3>ABOUT ME</h3>
            <hr />
            <div className="border-3"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend
              diam vel tempor lacinia. Suspendisse non augue egestas, dapibus
              justo et, lobortis ex. Nullam tortor diam, venenatis at enim a,
              lacinia porttitor erat. Vivamus tempor dictum leo id aliquam.
              Praesent elit lacus, tempus ac vehicula in, imperdiet dapibus
              elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
              libero. Vestibulum vitae mattis diam.
            </p>
          </div>
          <div className="container-links">
            <h3>LINKS</h3>
            <hr />
            <div className="border-3"></div>
            <ul className="socials-f">
              <li>
                <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                  >
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"></path>
                  </svg>
                  <p className="link-c">LINKEDIN/username</p>
                </a>
              </li>
              <li>
                <a
                  href="http://www.twitter.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z M18,8.999c0,4.08-2.957,8.399-8.466,8.943C10.28,17.413,11,16.662,11,16.662 S8,14,7.775,10.522C8.81,10.838,9.888,10.999,11,10.999h2v-2.5c0-0.001,0-0.001,0-0.001C13.002,7.118,14.12,6,15.5,6 C16.881,6,18,7.119,18,8.5C18,8.5,18,8.92,18,8.999z"></path>
                  </svg>
                  <p className="link-c">TWITTER/@user-handle</p>
                </a>
              </li>
              <li>
                <a
                  href="http://www.github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                  <p className="link-c">GITHUB/username</p>
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/t/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.896 13.401c-0.245-0.213-0.615-0.308-1.125-0.308h-0.771l0.027 3.256 0.052 3.265 0.749-0.027c0.547 0 0.839-0.093 1.104-0.348 0.323-0.319 0.349-0.48 0.349-2.933 0-2.547-0.027-2.613-0.385-2.905zM0 6.588v18.824h32v-18.824zM11.412 20.401c-0.584 0.771-1.412 1.025-3.371 1.025h-1.76v-10.052h1.864c2.229 0 2.881 0.24 3.469 1.199 0.359 0.572 0.385 0.801 0.427 3.427 0.063 2.973-0.025 3.64-0.629 4.401zM18.197 13.104h-3.291v2.365h2.025v1.703l-0.959 0.057-1 0.036v2.36l1.625 0.041 1.599 0.052v1.708h-2.129c-2.041 0-2.136-0.015-2.495-0.4l-0.401-0.376v-4.213c0-4.025 0.016-4.24 0.333-4.635 0.307-0.417 0.333-0.417 2.511-0.417h2.181v1.735zM24.437 20.375c-0.224 0.573-0.849 1.052-1.333 1.052-0.24 0-0.599-0.197-0.891-0.52-0.427-0.428-0.599-0.839-1.093-2.771l-1.199-4.521-0.604-2.229h1.016c0.531 0 1 0.027 1 0.068 0 0.077 1.547 6.052 1.683 6.443 0.052 0.197 0.421-0.937 0.968-3.068l0.88-3.359 0.991-0.057c0.531-0.027 0.973 0 0.973 0.057 0 0.181-2.229 8.504-2.401 8.905z" />
                  </svg>
                </a>
                <p className="link-c">BLOG/blog-name</p>
              </li>
            </ul>
          </div>
        </article>
        <article className="article-2">
          <div className="container-education">
            <div className="education">
              <h3>EDUCATION</h3>
              <hr className="hr-1" />
              <div className="border-3"></div>
              <ul>
                <li>SCHOOL NAME</li>
                <li>2009 - 2013</li>
                <li>Degree</li>
              </ul>
              <div class="border-4"></div>
              <ul>
                <li>SCHOOL NAME</li>
                <li>2009 - 2013</li>
                <li>Degree</li>
              </ul>
            </div>
            <div className="skills-1">
              <h3>PERSONAL SKILLS</h3>
              <hr />
              <div className="per-1">TEAMWORK</div>
              <div className="per-2">COMMUNICATION</div>
              <div className="per-3">ORGANIZATION</div>
            </div>
            <div className="skills-2">
              <h3>TECHNICAL SKILLS</h3>
              <hr />
              <div className="html-1">HTML</div>
              <div className="css-2">CSS/SCSS</div>
              <div className="js-3">JAVASCRIPT</div>
              <div className="rc-4">REACT.JS</div>
            </div>
          </div>
        </article>
        <article className="article-3">
          <h3>WORK EXPERIENCE</h3>
          <hr className="hr-1" />
          <div className="border-3"></div>
          <div className="container-2">
            <div className="job">
              <div className="job-p">
                <li>JOB POSITION</li>
                <li>Company</li>
                <li>2018 - present</li>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div>
            <hr className="vertical" />
            <hr className="hidden-1" />
            <div className="job">
              <div className="job-p">
                <li>JOB POSITION</li>
                <li>Company</li>
                <li>2017 - 2018</li>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div>
            <hr className="vertical" />
            <hr className="hidden-1" />
            <div className="job">
              <div className="job-p">
                <li>JOB POSITION</li>
                <li>Company</li>
                <li>2015 - 2017</li>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus
                eleifend diam vel tempor lacinia. Suspendisse non augue.
              </p>
              <ul>
                <li>Lorem ipsum dolor</li>
                <li>Consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>
        </article>
        <footer className="footer-1">
          <hr />
          <div className="container-3">
            <div className="contacts">
              <p>LOCATION</p>
              <li>Vilnius, Žirmūnai</li>
            </div>
            <div className="contacts">
              <p>CONTACT</p>
              <a href="tel:+37066738682">+37066738682</a> <br />
              <a href="mailto:matasskimelis@gmail.com">
                matasskimelis@gmail.com
              </a>
            </div>
            <div className="contacts">
              <p>SOCIAL</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin/username
              </a>
              <br />
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter/@user-handle
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
