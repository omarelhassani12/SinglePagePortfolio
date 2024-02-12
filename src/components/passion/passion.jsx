import './passion.css';

function Passion() {
  return (
    <div id="passion">
      <div className="container">
        <h2>WHAT I DO</h2>
        <div className="items">
          <div className="card">
            <div className="icon"><i className="fa fa-desktop"></i></div>
            <h3>Web Development</h3>
            <p>I'm passionate about crafting robust and scalable web applications. I specialize in frontend and backend development, using technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fa fa-mobile"></i></div>
            <h3>Mobile Development</h3>
            <p>Mobile app development is where I thrive. I enjoy building native and cross-platform mobile applications for iOS and Android using technologies like Flutter.</p>
          </div>
          <div className="card">
            <div className="icon"><i className="fa fa-paint-brush"></i></div>
            <h3>UI/UX Design</h3>
            <p>Creating delightful user experiences is at the core of my design philosophy. I specialize in crafting intuitive and visually appealing user interfaces that enhance usability and engage users.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Passion;
