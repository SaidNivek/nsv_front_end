import './App.css';
import styles from  './style'
import Navbar from './components/Generic_Components/Navbar';
import Home from './containers/Home';
import Footer from './components/Generic_Components/Footer';

function App() {
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className="">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Home />
          <Footer />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
