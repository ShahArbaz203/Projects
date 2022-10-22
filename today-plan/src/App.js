import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import react, { useState,useEffect } from 'react';


function App() {
  const data = {
    name:"",
    email:"",
    password:""
  }
  const [input, setinput] = useState(data);
  const [flag, setflag] = useState(false);

  useEffect(() => {
    return () => {
      console.log('Registered')
    };
  }, [flag]);

  function handleData(e){
     setinput({...input , [e.target.name]:e.target.value});
     console.log(input)
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!input.name || !input.mail ||!input.password){
      alert('please fill all the field')
    }else{
          setflag(true);
    }
  }
  
  return (
    <>
    <pre>{(flag)? <h2>Hello {input.name},You have Registered successFully</h2>:""}</pre>
    <div className="App">
    <h1>Registration Form</h1>
      
      <div className='Form' >
      <form onSubmit={handleSubmit} >
        <input type="text" value={input.name} onChange={handleData} placeholder='Enter Your Full Name' name='name'  />
        <br />
        <br />
        <input type="Email" value={input.mail} onChange={handleData} placeholder='Enter Your Email'  name='mail'/>
        <br />
        <br />
        <input type="text" value={input.password} onChange={handleData} placeholder='Enter Password' name='password' />
        <br />
        <br />
        <button type="submit" className="btn btn-success">Success</button>
      </form>

      </div>
    </div>
    </>
  );
}

export default App;
