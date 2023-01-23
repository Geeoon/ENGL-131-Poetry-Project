import './App.css';
import PhotoReel from './PhotoReel.js'

function App() {
  return (
    <div id='container'>
      <div id='header'>
        In the Midst of Chaos<br />
      </div>
      <div id='body'>
        <div>
          <PhotoReel />
        </div>
      </div>
      <div id='footer'>
        <div id='signature'>
          Geeoon Chung
        </div>
      </div>
    </div>
  );
}

export default App;
