// import axios from 'axios'
// import '../styles/jokes.css'
// import React from  'react';
// import {useState, useEffect} from 'react'



// export default function Jokes(){
//     const [post, setPost] = useState('')
  
//     useEffect(() => {
//         axios.get("https://official-joke-api.appspot.com/jokes/random")
//         .then(response => { 
//             console.log(response.data[0].setup)
//             setPost(response.data)
//        })
//         .catch(error  => {
//          console.log(error.message)
//        })
//     }, [])


//     return(
//         <div>
//       {post ? 
//       <div>
//         <h1>jokes</h1>
//         <span>
//             {JSON.stringify(post, null, 2)}
//         </span>
//       </div>
//       : 
//       <div>Loading.....</div>}
//       </div>

//     )
  
// }