import axios from 'axios'
import {React, useState, useEffect} from 'react'



export default function Jokes(){

    const getJokes = () => {
        axios.get("https://official-joke-api.appspot.com/jokes/programming/ten")
        .then(res => {
            const setup =  res.data[0].setup
            const punchline = res.data[0].punchline
       })
        .catch(error  => {
         console.log(error.message)
       })
    }

    useEffect(() => {
        getJokes()
    }, [])
  
}