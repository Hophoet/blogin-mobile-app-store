
//apk
import '../static/css/home.css'
// import Carousel from '../components/Carousel'
import m8 from '../static/images/m4.png'

function App() {
  return (
    <div className="home">
      <div className="home__image" >
        <img className="mockup" src={m8} />
      </div>
      <div className="home__info">
        <h1>BloGin</h1>
        <p>open source <span>bloging</span> project
        </p>
        <div>
          <ul>
            <li>Source code : <a target="_blank"  href="hophoet.com">click here</a></li>
            <li>Developer: <a target="_blank" href='http://www.hophoet.com/'>hophoet</a> </li>
          </ul>
        </div>
        <a className="btn btn-info" href='' >Download now</a>
        
      </div>
     
    </div>
  );
}

export default App;
