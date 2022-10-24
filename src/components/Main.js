import react, { useEffect, useState } from "react"
import { nanoid } from "nanoid";
import "./styles/medialarge.css"
import "./styles/main.css"
import Card from "./Card";
import Joke from "./Joke";
const cl = console.log.bind(console);

const Main = () => {



    let [title, setTitle] = useState("")
    let [text, setText] = useState("")
    let [show, setShow] = useState(false)


    // get localStorage
    let ls = localStorage
    let lastLocal = ls.getItem("notes")
    let unstringifiedNotes = JSON.parse(lastLocal)
    // let unstringifiedNotes = undefined

    const returnDate = () => {
        let sec = new Date().getSeconds();
        let min = new Date().getMinutes();
        let hr = new Date().getHours();
        let day = new Date().getDate();
        let mon = new Date().getMonth();
        let year = new Date().getFullYear();
        let addZero = hr < 10 ? "0" : "";
        return `${addZero}${hr}:${min}:${sec} ${day}.${mon + 1}.${year}`;
    };
    
    const [currentDate, setCurrentDate] = useState(returnDate());
    const [notes, setNotes] = useState(unstringifiedNotes || [])

    //update current date
    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentDate(returnDate());
            let test = new Date().getDate()
        }, 1000);
        return () => clearInterval(interval);
    }, []);

   



    // set localStorage
    useEffect(() => {
        let stringifiedNotes = JSON.stringify(notes)
        ls.setItem("notes", stringifiedNotes)
    }, [notes])


    const inputChange = (e) => {
        setTitle(e.target.value)
        
    }
    const inputChangeText = (e) => {
        setText(e.target.value)
    }
    const addNewNote = () => {
        let newNote = {
            id: nanoid(),
            title: title,
            body: text,
            date: currentDate
        }
        setShow(prev => !prev)
        setNotes(prev => {
            return title ? [newNote, ...prev] : prev
        })
        //resets the title and text 
        setTitle("")
        setText("")
    }
    
    let countNotes = notes.length
  
    
    
    const handleClick = (id) => {
        setNotes(prev => {
            return prev.filter(value => {
                return value.id !== id
            })
        })
    }
    
    
    const [dog, setDog] = useState([])
    
    useEffect(() => {


        fetch(`https://dog.ceo/api/breeds/image/random/${notes.length}`)
        .then(res => res.json())
        .then(data => setDog(data.message))
        
    }, [notes])

    // Notes and dog
    useEffect(() => {
        cl(notes)
        // cl(dog)
    }, [notes])

    const [search, setSearch] = useState("")
    
    let filteredItems = notes.filter(item => {
        return item.title.toLowerCase().includes(search) || item.body.toLowerCase().includes(search)
    })

    
    
   
    
    return (
        <>
            <div className="main">
                <div className="main__search">
                    {/* <label htmlFor="search">Search </label> */}
                    <input value={search} onChange={(e)=> setSearch(e.target.value)} placeholder="Search" id="search" type="text" />
                </div>
                {show && <div className="main__control"  >
                    <input placeholder="Title" type="text" onChange={inputChange} value={title} />
                    <textarea placeholder="Text" onChange={inputChangeText} value={text} cols="40" rows="5" />
                </div>}
                <div className="main__notes">
                    {filteredItems.map((value, index) => {
                        let dogStyle = {
                            backgroundImage: `url("${dog[index]}")`
                        }
                        return (
                            <Card
                                title={value.title}
                                body={value.body}
                                date={value.date}
                                id={value.id}
                                handleClick={() => handleClick(value.id)}
                                style={dogStyle}
                            />
                        )
                    })}
                </div>

               

            </div>
            <div className="bottom">
                <div onClick={addNewNote} className="bottom__add">{!show ? "Show" : "Add/Hide"}</div>
                <div className="bottom__joke"><Joke /></div>
                <div className="bottom__count">Number of notes : {countNotes}</div>
            </div>
        </>

)
}

export default Main;




// cl(icons)
// let url = icons.map(value => {
//     return value.url
// })
// cl(url)
// let test = url[200]

// random dog another fetch 



// cl(dog) 

// end random dog


//testing multimple fetch

// const fetchReq1 = fetch(
//     `https://jsonplaceholder.typicode.com/todos/1`
//   ).then((res) => res.json());
  
//   const fetchReq2 = fetch(
//     `https://jsonplaceholder.typicode.com/todos/2`
//   ).then((res) => res.json());
  
//   const fetchReq3 = fetch(
//     `https://jsonplaceholder.typicode.com/todos/3`
//   ).then((res) => res.json());
  
//   // do fetch requests in parallel
//   // using the Promise.all() method
//   const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);
  
//   // attach then() handler to the allData Promise
//   allData.then((res) => console.log(res));


// end