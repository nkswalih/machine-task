import React,{useState,useEffect} from 'react'

function Fetch() {
    const [quotes,setQuotes] = useState([])

    useEffect(() => {
        fetch("https://dummyjson.com/quotes")
        .then((response) => response.json())
        .then(data => { setQuotes(data.quotes.slice(0,10))
        })
        .catch((error) => {
            console.log("ERROR:", error);
        });
    },[]);
    
  return (

    <div>
        {
            quotes.map((item) => (
              <h1 key={ item.id }>{ item.quote }</h1>  
            ))
        }


    </div>
  )
}

export default Quotes