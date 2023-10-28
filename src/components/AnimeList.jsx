import React from 'react'
import Card from '@mui/material/Card';
import { CardMedia, Container, Typography } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const AnimeList = ({filteredPersons,items,setItems,q}) => {


// const [loaded,setIsLoaded]=useState(false)
// // const[itemsList,setItemsList]=useState([])
// const [error, setError] = useState(null);
console.log(filteredPersons);


    // useEffect(() => {

    //     fetch("http://localhost:4000/api/getAll")
    
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 setIsLoaded(true);
    //                 setItems(result);
    //                 console.log(items);
    //             },
    //             // Note: it's important to handle errors here
    //             // instead of a catch() block so that we don't swallow
    //             // exceptions from actual bugs in components.
    //             (error) => {
    //                 setIsLoaded(true);
    //                 setError(error);
    //             }
    //         );
    // }, []);

    if (!items) {
        return <>error</>;
    } else {
        const filteredPersons = items.anime.filter((anime) => {
            console.log(anime);
            return (
              // console.log(anime[index].title.toLowerCase())
              anime.title.toLowerCase().includes(q.toLowerCase())
            );
          });
   
  return (
        
        <Container sx={{ width:"70%"}}>
            
          
        {filteredPersons.map((item=>(
             <Row style={{display:"inline-block"}}>
            <Col xs={12} md={3} lg={3}>
            <Card key={item} sx={{marginRight:"20px", marginBottom:"20px"}}>
                <Typography variant={"h6"}  gutterBottom >
                {item.title}
                </Typography>
                <CardMedia  component="img"
                            height="194"
                            image={item.image}
                            sx={{width:300, height: 300}}/>
            </Card>
            </Col>
            </Row>
        )))}
         
        </Container>
  )
}
}

export default AnimeList