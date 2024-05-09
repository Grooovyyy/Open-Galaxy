import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <section className="home" id="home">
    <div className="home-content">
      <div className="text">
        <div className="text-two">
          <h3 className="span loader">
            <span className="m">O</span>
            <span className="m">P</span>
            <span className="m">E</span>
            <span className="m">N</span>
            &nbsp;
            <span className="m">G</span>
            <span className="m">A</span>
            <span className="m">L</span>
            <span className="m">A</span>
            <span className="m">X</span>
            <span className="m">Y</span>
          </h3>
        </div>
        <div className="right">
           <img src="Open Galaxy.png" alt=""></img>
        </div>
        
        <div className="text-three">Lorem, ipsum dolor.</div>
        <div className="text-four">Lorem ipsum dolor sit amet. </div>
      </div>
    </div>
  </section>
  <section className="about" id="about">
    <div className="content">
      <div className="title">
        <span>About</span>
      </div>
      <div className="about-details">
        <div className="left">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="right">
          <div className="topic">Lorem ipsum dolor sit amet.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt asperiores tempora possimus recusandae aperiam, consectetur laboriosam alias dignissimos. Nihil nulla eum incidunt, totam molestias repudiandae pariatur alias quae deleniti consequuntur laborum dolorum.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="skills" id="skills">
    <div className="content">
      <div className="title">
        <span></span>
      </div>
      <div className="skills-details">
        <div className="text">
          <div className="topic">Lorem ipsum dolor sit amet consectetur.e</div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure impedit fugit!
          </p>
        </div>
        <div className="boxes">{/* Checkboxes */}</div>
      </div>
    </div>
  </section>
  {/* Footer Section Start */}

            <footer className="text-white py-1">
                <div className="container text-center">
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://facebook.com"><img className='fblogo' src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="Facebook" /></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" className="logo" /></a></li>
                        <li className="list-inline-item"><a href="https://instagram.com"><img src="https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png" alt="" className="logo" /></a></li>
                        <li className="list-inline-item"><a href="https://linkedin.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png" alt="" className="logo" /></a></li>
                    </ul>
                </div>
            </footer>
            </>
  )
}

export default Home