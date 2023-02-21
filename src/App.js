import './App.css';
import Header from './components/header';

const name="Oğulcan";
const sureName="Kırtay";
const isLoggedIn=false;
function App(){
  return(
    <>
     <h1>{isLoggedIn &&  `Welcome`}</h1>
     <h1>{isLoggedIn ? `Welcome with ?` : 'Log in with ?'}</h1>
     <h1>{!isLoggedIn &&  `Log in`}</h1>

    </>
  );
}
export default App;