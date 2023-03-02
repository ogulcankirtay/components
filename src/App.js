import './App.css';
import User from './components/User';
const friends=[
  {
    id: 0,
    name:"Candaş"},
    {
      id: 1,
      name:"Remzi"},
      {
        id: 2,
        name:"Serkan"},
        
]
function App(){
  return(
    <>
  <User name="Oğulcan" sname={"Kırtay"} age={23} isLogIN={true} friends={friends}></User>

    </>
  );
}
export default App;