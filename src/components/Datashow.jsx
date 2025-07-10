import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import amul from "../images/amul.png";
import curd from "../images/curd.png";
import butter from "../images/butter.png";
import bread from "../images/bread.png";
import bread1 from "../images/bread1.png";
import bread2 from "../images/bread2.png";
import cheese from "../images/cheese.png";
import drinks from "../images/drinks.png";
import snacks from "../images/snacks.png";
import sweet from "../images/sweet.png";


const images = {
  "amul.png": amul,
  "butter.png": butter,
  "curd.png": curd,
  "bread.png": bread,
  "bread1.png": bread1,
  "bread2.png": bread2,
  "cheese.png": cheese,
  "drinks.png" : drinks,
  "snacks.png":snacks,
  "sweet.png":sweet
 
};

const DataShow = () => {
    const { id } = useParams();
    const [mydata, setMyData] = useState({})
    const loadData = async () => {
        let api = `http://localhost:3000/products/${id}`;
        const response = await axios.get(api);
        setMyData(response.data);
        console.log(response.data);
    }
    useEffect(() => {
        loadData();
    }, []);
    return (
        <>
            <div id="productShow">
                <div>
                    <img src={mydata.images} width="300" height="300" />
                </div>
                <div>
                    <h1> Product Name : {mydata.name}</h1> 
                    <h3 style={{color:"green"}}> Category : {mydata.category}</h3>
                    <h2 style={{color:"red"}}> Price  : {mydata.price}</h2>
                     </div>
            </div>

        </>
    )
}
export default DataShow;