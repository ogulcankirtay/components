import './App.css';
import Header from './components/header';

function App(){
  return(
    <>
      <Header></Header>
      <p className='my_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae eveniet nisi debitis delectus deleniti aperiam illum autem eligendi voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae eveniet nisi debitis delectus deleniti aperiam illum autem eligendi voluptates?</p>
      <br/>
      <label htmlFor='my_input'>
        Name  
        <input id='my_input' placeholder='E-mail'></input>
      </label>
    </>
  );
}
export default App;