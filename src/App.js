
import { useEffect, useState } from 'react';
import './App.css';
import AnimeList from './components/AnimeList';
import Navbar from './components/Navbar';
import Search from './components/Search';
import anime from "../src/Animelist/db.json";

function App() {
  

  const [q, setQ] = useState("");
  const[items,setItems]=useState(anime.anime);
  console.log(items);

  // useEffect(() => {
  //   fetch("http://localhost:8000/anime")
  //       .then((res) => res.json())
  //       .then(
  //           (result) => {
  //               setItems(result);
              
  //           }
  //           );
  //         }, []);
         

  const filteredPersons = items.filter(
    anime => {
      return (
        anime
        .title
        .toLowerCase()
        .includes(q.toLowerCase()) 
      );
    }
  );


  return (
    <div >
      <Navbar/>
      <Search setQ={setQ} q={q} />
      <AnimeList  items={items} filteredPersons={filteredPersons} setItems={setItems}/>
    </div>
  );
}

export default App;
//https://ghibliapi.herokuapp.com/films
