import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { addtocart } from "../cartslice";

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
const categories = [
  "Dairy and Breads",
  "Rolling paper & tobacco",
  "Snacks & Munchies",
  "Mouth fresheners",
  "Cold Drinks & Juices",
  "Candies & Gums"
];
    
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

const SearchData=()=>{
    const {txtval} = useParams();
    const [mydata, setMydata] = useState([]);
    const dispatch = useDispatch();
    const loadData=async()=>{
        let api=`http://localhost:3000/products/?name=${txtval}`;
        const response = await axios.get(api);
        console.log(response.data);
         setMydata(response.data);
    }
    useEffect(()=>{
        loadData();
    }, []);

  const [quantities, setQuantities] = useState({});


      const renderProducts = (category) => {
    const filtered = mydata.filter(p => p.category === category);
    return filtered.map(product => {
      const imgSrc = images[product.image] || amul;

      return (
        <Card
          key={product.name}
          style={{
            flex: "0 0 auto",        // ⬅️ THIS is the key line
            width: '18rem',
            margin: '0.5rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          }}
        >
          <Card.Img variant="top" src={imgSrc} style={{
            height: "140px",
            objectFit: "contain",
            marginTop: "10px"
          }} />
          <Card.Body style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <Card.Title style={{
              fontSize: "1.1rem",
              fontWeight: "bold",
              textAlign: "center"
            }}>
              {product.name}
            </Card.Title>
            <Card.Text style={{
              color: "#666",
              fontSize: "0.9rem"
            }}>
              {product.quantity} unit{product.quantity > 1 ? "s" : ""}
            </Card.Text>
            <div style={{
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginBottom: "0.5rem"
            }}>
              {product.price}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem"
            }}>
              <Button variant="outline-success" size="sm"
                onClick={() => decreaseQuantity(product.name)}
                style={{ width: "40px", height: "4vh" }}>
                -
              </Button>
              <span>{quantities[product.name] || 0}</span>
              <Button variant="outline-success" size="sm"
                onClick={() => increaseQuantity(product.name)}
                style={{ width: "40px", height: "4vh" }}>
                +
              </Button>
            </div>
            <Button
              variant="success"
              style={{
                marginTop: "0.5rem",
                width: "80%",
                maxWidth: "150px",
                fontWeight: "bold",
                height: "8ch",
                backgroundColor:"green",
                color:"white"
              }}
              disabled={quantities[product.name] === 0}
              onClick={() => {
                dispatch(addtocart({
                  id: product.name,
                  name: product.name,
                  quantity: quantities[product.name] || 0,
                  price: product.price,
                  image: product.image
                }));
              }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      );
    });
  };

    

    return(
        <>
         <h1>Search Data</h1>     
     


        {/* STEP 1: Find categories that actually have search results */}
{categories
  .filter((cat) => mydata.some((p) => p.category === cat))
  .map((cat) => (
    <div key={cat}>
      <h1 style={{ textAlign: "center", margin: "1rem" }}>{cat}</h1>

      <div
        className="scroll-container"
        style={{
          display: "block",
          width: "100%",
          overflowX: "auto",
          padding: "1rem",
        }}
      >
        <div
          id={`product-${cat}`}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: "1rem",
            background: "#f9f9f9",
            padding: "10px",
            borderRadius: "10px",
            maxWidth: "90vw",
          }}
        >
          {renderProducts(cat)}
        </div>
      </div>
    </div>
))}


        </>
    )
}
export default SearchData;