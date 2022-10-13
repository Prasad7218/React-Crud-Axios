import './App.css'
import Axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const[data,setData]=useState([]);


  useEffect(()=>{

    Axios.get('http://localhost:3000/comments').then((res)=>{
      console.log(res.data);
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  return (
    <div className="App">
      {
        data.map(ele=>{
          return(
            <>
          <h1>{ele.id}</h1>
          <h2>{ele.body}</h2>
          <h3>{ele.postId}</h3>
          </>
          )
        })
      }
      
    </div>
  )
}

export default App
