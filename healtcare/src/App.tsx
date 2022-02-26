import React, {useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import HomePage from './components/HomePage';
import AppModel from './model/AppModel';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

import  {pathToClientArrService}  from './config'
// const client = new W3CWebSocket('ws://127.0.0.1:3000/arrays');
console.log(pathToClientArrService)
const logger = (arr :any) => {
  console.log('array from server is ',arr)

}
const isJson= (str:any)=> {
  try {
      return JSON.parse(str);
  } catch (e) {
      return false;
  }
}
function App() {

  const [client,setClient] = useState(new W3CWebSocket(pathToClientArrService));
  const [list,setList] = useState([]);

  useEffect(()=>{
      
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    client.onmessage = (message :any) => {
      let data;
      if(isJson(message.data)){

        data = JSON.parse(message.data) ;

        if(data.type == 'getArrayResponse'){
          // setList(data.arr);// this is for displaying the values on screen 
          logger(data.arr);
        }
        
      }else{// not an object
        console.log(message.data);
      }
     
    };

  },[])
  const handleSubmit = async (num:number) =>{
    AppModel.sendToClient(num ,client);

  }
  return (
    <div className="App">
      <h1> Hello There Please Enter Number </h1>
      <HomePage list ={list} handleSubmit ={handleSubmit}></HomePage>
    </div>
  );
}

export default App;
