import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const topics =[ {
    id:1,
heading :   "Excersice 1 : Props",
path:'/card',
description:"Props, ya properties, React components ke data ko pass karne ka tareeka hai. Ye parent se child component tak information bhejta hai."
},
{
    id:2,
    heading :   "Excersice 2 : UseState counter project",
    path:'/counter',
    description:"useState React hook, component ke state ko manage karne mein madad karta hai, jiski wajah se dynamic UI banai ja sakti hai. "
},{
    id:3,
    heading :   "project 2 : BG Color changer",
    path:'/bg-color',
description:"Iss project hum seekhenge ki kaise use state ki help se hum button k click krne pr bg color change kr skte hai ."
},
{
    id:4,
    heading :   "project 3 : Password generator",
    path:'/password',
description:"Password generator ko bnaane k liye humnne useref , useCallback aur useEffect hook ka use kiya hai ."
}
,
{
    id:4,
    heading :   "project 4 : Currency calculator",
    path:'/currency',
description:"Isme hum api ki help se currencies aur values leke aayenge aur calculate kraayenge currency values ."
}
]
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-700">

    <h1 className="text-white text-3xl font-semibold text-center py-4">Learn Production grade React in HINGLISH</h1>
      <div className="flex p-5 flex-wrap justify-center  ">
        {
            topics.map((topic, key)=>(

        <Card key={key} className="mt-6 p-4 rounded-lg mx-4 shadow-md hover:shadow-2xl hover:transition-opacity bg-slate-300 w-96">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
       {topic.heading}
            </Typography>
            <Typography>
            {topic.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`${topic.path}`}><Button className="bg-slate-800 rounded-sm py-2 mt-3 hover:bg-slate-950">Read More</Button></Link>
          </CardFooter>
   
        </Card>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
