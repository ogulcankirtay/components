import './App.css';
import User from './components/User';

function App(){
  return(
    <>
  <User name="Oğulcan" sname="Kırtay" age={23} isLogIN={true} friends={["Serkan","Candaş","Remzi"]}></User>

    </>
  );
}
export default App;