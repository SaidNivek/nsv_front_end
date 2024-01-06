import Navbar from './components/Navbar';
import './App.css';
import styles from  './style'

function App() {
  return (
  <div className="bg-primary w-full overflow-hidden">
    <div className="">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
