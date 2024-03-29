import { useEffect, useState } from "react";
import "./App.css";
import AnimeList from "./components/AnimeList";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";

function App() {
  // const List = {
  //   anime:[{
  //     title:"One piece",
  //   image:"https://staticg.sportskeeda.com/editor/2022/11/a402f-16694231050443-1920.jpg"

  //   },
  //   {
  //     title:"Death note",
  //   image:"https://th.bing.com/th/id/OIP.zPs1BjEfEHhRG3t9qDZnFgHaFj?pid=ImgDet&rs=1"
  //   },

  //   {title:"yu yu hakusho",
  //   image:"https://th.bing.com/th/id/OIP.MiuRLMlHUdcWxtWOR1Z3RAHaEK?pid=ImgDet&rs=1"},

  //   {title:"clannad",
  //   image:"https://th.bing.com/th/id/OIP.KAOkZs3_AkZXN0-yqgjY4wHaEK?pid=ImgDet&rs=1"},

  //   {title:"Dragon ball Z",
  //   image:"https://th.bing.com/th/id/R.e9b956036e1128154721620dde8b1f1e?rik=w2Rw9k%2fZVFWSgA&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f25500000%2fDragonball-Z-dragon-ball-z-25544707-1600-1057.jpg&ehk=SGtR1AsVF%2b4p5%2bt2NGk%2b4Hhm0c0z91Y5ymN0KZzCX7k%3d&risl=&pid=ImgRaw&r=0"},

  //   {title:"Naruto",
  //   image:"https://th.bing.com/th/id/R.7ff15ac5398102d9a8baff1a68732f8a?rik=2MsXQXPxutLS9Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f_92eLzaN7hAU%2fTGMeEO9XPBI%2fAAAAAAAAAG4%2f_0ukwwb3zr8%2fs1600%2fnaruto.jpg&ehk=8Pm4kbd2%2blluszsWdCqC9lGm6CXOwWY842M2TebPHsk%3d&risl=&pid=ImgRaw&r=0"},

  //   {title:"Bleach",
  //   image:"https://th.bing.com/th/id/R.53c6394df7e63b483849069d8a3d9393?rik=jrCmCmQtsPkP7Q&riu=http%3a%2f%2f1.bp.blogspot.com%2f-UZ6GmDxQOh0%2fTmcjaLajqJI%2fAAAAAAAAFe4%2ft52MrQEsvzM%2fs1600%2fBleach.jpg&ehk=ByssUHevjqVpr54OXkbMbsFthnlX4CZeYLxZsRo2xsk%3d&risl=&pid=ImgRaw&r=0"},

  //   {title:"Fullmetal metal alchemist",
  //   image:"https://th.bing.com/th/id/OIP.TpcVp1EVg9Pcrp-AO2ZlXAHaJS?pid=ImgDet&rs=1"},

  //   {title:"Monster",
  //   "image":"https://th.bing.com/th/id/OIP.em0PbsIjqNThZsvAjFEqJQHaKK?pid=ImgDet&rs=1"},

  //   {title:"Code geass",
  //   image:"https://th.bing.com/th/id/R.988fd1892caaaaabea03e7acfc7dc591?rik=w6%2fjZoZ77erUCg&riu=http%3a%2f%2fcodegeasswallpaper.com%2fpage+8+full%2fCode+Geass+Season+2.jpg&ehk=qVO1x6VmLuqoq%2bR5AhnzkzMj60qbHUrbukcGXRs66d8%3d&risl=&pid=ImgRaw&r=0"}
  //   ]
  // }

  const [q, setQ] = useState("");
  const [items, setItems] = useState();


  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getAll");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  console.log(items);

  return (
    <div>
      <Navbar />
      <Search setQ={setQ} q={q} />
      <AnimeList
        items={items}
        setItems={setItems}
        q={q}
      />
    </div>
  );
}

export default App;

