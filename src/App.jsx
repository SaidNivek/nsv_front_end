import Navbar from './components/Navbar';
import './App.css';
import styles from  './style'
import Hours from './components/Hours';

function App() {
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className="">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hours />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
