import './App.css';
// import {Image1} from './images';

function App() {
  return (
    <div className="App">
      <div className='Left'>
        <div className='Logo'></div>
        <div className='Content'>
          <div className='Title'>
            WE'RE COMING SOON
          </div>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem psum has been the industry’s standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button>&gt;</button>
        </div>
      </div>
      <div className='Right' >
        <img className='Pic' src="./images/HeroDog.jpg" alt='pic' />
      </div>
    </div>
  );
}

export default App;
