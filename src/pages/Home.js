
//apk
import apk from '../apk/file.txt'

import Carousel from '../components/Carousel'

function App() {
  return (
    <div className="home__container">
      <div >
        <h1>BLOGIN APP</h1>
      </div>
     
      <Carousel apk={apk}/>
    </div>
  );
}

export default App;
