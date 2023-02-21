import './App.css';
import Header from './components/header';

const name="Oğulcan"
const sureName="Kırtay"

function App(){
  return(
    <>
      <Header></Header>
      <p className='my_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae eveniet nisi debitis delectus deleniti aperiam illum autem eligendi voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae eveniet nisi debitis delectus deleniti aperiam illum autem eligendi voluptates?</p>
      <br/>
      <h1>Rendered Data by {name} {sureName} </h1>
      <h2>{`benim adım ${name} ${sureName}`}</h2>
      <label htmlFor='my_input'>
        Name  
        <input id='my_input' placeholder='E-mail'></input>
      </label>
    </>
  );
}
export default App;