import react, { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import "./styles/main.css"
import "./styles/medialarge.css"
const cl = console.log.bind(console);

const Joke = () => {
  
    const [joke, setJoke] = useState("")
    const [flip, setFlip] = useState(false)
    useEffect(() => {
        fetch(`https://official-joke-api.appspot.com/random_joke`)
        .then(res => res.json())
        .then(data => setJoke(data))        
    }, [flip])
    
    const addNew = () =>{
        setFlip(prev=> !prev)
    }

    
    
    return (
        <div onClick={addNew} className="joke">
            <p className="joke__setup">{joke.setup}</p>
            <p className="joke__punchline">{joke.punchline}</p>
        </div>
    );
}

export default Joke;