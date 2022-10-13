import './App.css'
import Axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const[data,setData]=useState([]);

  const[body,setBody]=useState('');
  const[age,setAge]=useState('');


  useEffect(()=>{

    Axios.get('http://localhost:3000/comments').then((res)=>{
      console.log(res.data);
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  const postData=(e)=>{
    e.preventDefault();
    Axios.post("http://localhost:3000/comments",{
      body,
      age
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="App">
      <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/><br></br>
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/><br></br>
      <button onClick={postData}>Post data</button>
      {
        data.map(ele=>{
          return(
            <>
          <h1>{ele.id}</h1>
          <h2>{ele.body}</h2>
          <h3>{ele.postId}</h3>
          <h4>{ele.body}</h4>
          <h4>{ele.age}</h4>
          </>
          )
        })
      }
      
    </div>
  )
}

export default App
