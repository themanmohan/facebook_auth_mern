import React,{useEffect,useState} from 'react'
import Auth from './component/Auth/auth';
import Im from './api/image'
import axios from 'axios'
function App() {
  const [picture,setPicture]=useState([])
  const [pictureurl, setPictureUrl] = useState()
  useEffect(()=>{
    async function getapi(){
         const res = await axios.get("https://graph.facebook.com/v11.0/2984476105123040/photos?access_token=EAAOUWfcsmFUBADrF1r8PoZAUZCwYV3Oc6PwmqjxAX3UZCpRNZBtEoSqpIBXyjYt2FzqsqqpPex5SVMYsMQZAfSR1odTb1V4CZBzshkLjwRA5ZAMJ5wHjAIdnZCJzNeEOzUDcIg7KpPj2vJbyOZByU8sx1iAaf44OdFcF0QnKlZBdcNuh1Etse4jQPpCCwaDNXbjP8OJFrYqeZA8kZCu1sdtseyJUgeqjB7IZAJ7TSY0A5trhAViYURjjSB5Fh")
     
        setPicture(res.data.data)
    }
    getapi()

  })
   let data1 = []; 
   console.log(data1)

   picture.map((data) => {
   
     fetch(`https://graph.facebook.com/v11.0/${data.id}/picture?access_token=EAAOUWfcsmFUBADrF1r8PoZAUZCwYV3Oc6PwmqjxAX3UZCpRNZBtEoSqpIBXyjYt2FzqsqqpPex5SVMYsMQZAfSR1odTb1V4CZBzshkLjwRA5ZAMJ5wHjAIdnZCJzNeEOzUDcIg7KpPj2vJbyOZByU8sx1iAaf44OdFcF0QnKlZBdcNuh1Etse4jQPpCCwaDNXbjP8OJFrYqeZA8kZCu1sdtseyJUgeqjB7IZAJ7TSY0A5trhAViYURjjSB5Fh`).then(response => {

       data1.push(response.url);
     }).then(data => {

     }).catch(err => {

     });

   })
  const check="shdbjh"
  return (
    <div className="App">
      <Auth/>
      <p>{
        data1.map((data2)=>{
          <h1>jewjfgjwef</h1>
          console.log("dwnbvnw")
         return(
           <div>
             <img src={data2}/>
             
           <h1>jewjfgjwef</h1>
           </div>
         )
        })
      }</p>
      {
        picture.map((data) => {

         return fetch(`https://graph.facebook.com/v11.0/${data.id}/picture?access_token=EAAOUWfcsmFUBADrF1r8PoZAUZCwYV3Oc6PwmqjxAX3UZCpRNZBtEoSqpIBXyjYt2FzqsqqpPex5SVMYsMQZAfSR1odTb1V4CZBzshkLjwRA5ZAMJ5wHjAIdnZCJzNeEOzUDcIg7KpPj2vJbyOZByU8sx1iAaf44OdFcF0QnKlZBdcNuh1Etse4jQPpCCwaDNXbjP8OJFrYqeZA8kZCu1sdtseyJUgeqjB7IZAJ7TSY0A5trhAViYURjjSB5Fh`).then(response => {
             return <img src={response.url}/>
            
          })
        })
      }
      <Im/>
    </div>
  );
}

export default App;
