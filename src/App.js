import './App.css';
import Navbar from './components/navbar';
import SymptomsBox from './components/sym';
import Dashboard from './lander/dashboard';
function App() {
  return (
    <div className="App">
      <div className='flex'>
        <div className='w-full flex justify-center'>
          <div className='w-fit h-fit rounded-3xl bg-[#F9FDFF] mt-16 mb-16'>
            {<Navbar/>}
            {<Dashboard/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
