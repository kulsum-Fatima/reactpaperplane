
import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import image1 from './new-image1.png';

import image2 from './perse.png';
import image3 from './perse-bag.png';
import image4 from './watch.png'; 
import image5 from './hair-belt.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Section(){
 
    const data=[
      
      { id:1, image: image1 , title:['Perse'],  description:["very best quality"], price:[1000]},
      { id:2, image: image2 , title:['Bag'],  description:["very best quality"], price:[1500]},
      { id:3, image: image3 , title:['Hand-Bag'],  description:["very best quality"], price:[3000]},
      { id:4, image: image4 , title:['Watch'],  description:["very best quality"], price:[800]},
      { id:5, image: image5 , title:['Hair-Belt'],  description:["very best quality"], price:[500]},
      
    ]
    return(
        <div>
       {/* "section page" */}
       <div className="section">
      
       

       <div  style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "20px" }}>
          {data.map((data, index) =>  
           (
           
            <>
              <Card sx={{ marginTop: "30px", maxWidth: 345 }}>

                <CardActionArea>
            
                  <CardMedia
                    component="img"
                    height="250"
                    image={data.image}
                    
                    alt="green iguana"
                  />
             <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{justifyContent:"center"}}>
                  <CurrencyRupeeIcon/>
                  {data.price}
                </CardActions>
              </Card>
            </>
          
          )
          )};
         
          
        </div>
        </div>
        </div>
    )
}
export default Section;