import './App.css';
import About from './components/About';
// import Contact from './components/Contact';
// import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';

function App() {
  return (
    <div class="heading">
      <h1>Parker Riddle</h1>
      <nav>
        <ul>
          <About />
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    </div>
    // <div className="bucket-app">
    //   <BucketList />
    // </div>
  );
}

export default App;
