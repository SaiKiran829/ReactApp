import './App.css';
import Navbar from './Components/Navbar';
import Photos from './Components/Photos';
function App() {

  
  //sorting array in desending order and to make ascending order make them a-b
  // const wanted = arr.sort(function(a,b){
  //   return b-a;
  // });
  return (
    <>
    <Navbar title = "ThopCinema" home = "Home" about = "about"/>  
    <div className='container my-3'>
    <Photos />
    </div>
    </>
  );
}
export default App;