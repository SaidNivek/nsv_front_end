import Navbar from './components/Generic_Components/Navbar';
import './App.css';
import styles from  './style'
import Home from './containers/Home';

function App() {
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className="">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Home />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
