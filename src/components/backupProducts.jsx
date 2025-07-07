
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import amul from "../images/amul.png"
import curd from "../images/curd.png"
import butter from "../images/butter.png"
import bread from "../images/bread.png"
import bread1 from "../images/bread1.png"
import bread2 from "../images/bread2.png"
import cheese from "../images/cheese.png"
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addtocart } from '../cartslice';


const Products = () => {

  const [mydata, setdata] = useState([]);

  const [quantities, setQuantities] = useState({});

  const dispatch = useDispatch();

  const scrollRef = useRef();

  const loaddata = async () => {

    let api = "http://localhost:3000/products";
    const res = await axios(api);
    setdata(res.data);

    const initialQuantities = {};

    res.data.forEach(key => {
      initialQuantities[key.name] = 0;
    });

    setQuantities(initialQuantities);

  };




  const increaseQuantity = (productName) => {

    setQuantities(prev => ({
      ...prev,
      [productName]: prev[productName] + 1
    }));

  };

  const decreaseQuantity = (productName) => {

    setQuantities(prev => ({
      ...prev,
      [productName]: Math.max(prev[productName] - 1, 0)
    }));

  };

 

  useEffect(() => {
    loaddata();
  }, [])


  const images = {

    "amul.png": amul,
    "butter.png": butter,
    "curd.png": curd,
    "bread.png": bread,
    "bread1.png": bread1,
    "bread2.png": bread2,
    "cheese.png": cheese

  };

  const ans = mydata.map((key) => {

    const imgSrc = images[key.image] || amul;

    return (
      <>

        <Card style={{width: '18rem', margin: '0.5rem', border: '0px solid rgb(69, 73, 70)',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',flex: '0 0 auto',overflow: "hidden",cursor: "pointer" }}>

          <Card.Img variant="top" src={imgSrc} style={{ height: "140px", objectFit: "contain", marginTop: "10px" }} />

          <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <Card.Title style={{ fontSize: "1.1rem",fontWeight: "bold",textAlign: "center",marginTop: "0.5rem"}}>

              {key.name}

            </Card.Title>

            <Card.Text style={{color: "#666",fontSize: "0.9rem",margin: "0.3rem 0"}}>

              {key.quantity} unit{key.quantity > 1 ? "s" : ""}

            </Card.Text>

            <div style={{fontWeight: "bold",fontSize: "1.2rem",marginBottom: "0.5rem"}}>

              {key.price}

            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", }}>

              <Button variant="outline-success" size="sm" onClick={() => decreaseQuantity(key.name)} style={{width: "40px",height: "4vh"}}>
                -
              </Button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>
                {quantities[key.name] || 0}
              </span>
              
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => increaseQuantity(key.name)}
                style={{
                  width: "40px",
                  height: "4vh"

                }}
              >
                +
              </Button>
            </div>

            <Button
              variant="outline-success"

              style={{
                marginTop: "0.5rem",
                width: "80%",
                maxWidth: "150px",
                fontWeight: "bold",
                height: "8ch",
                color: "white",
                backgroundColor: "green",
                borderRadius: "6%"
              }}
              disabled={quantities[key.name] === 0}
              onClick={() => { dispatch(addtocart({ id: key.name, name: key.name, quantity: quantities[key.name] || 0, price: key.price, image: key.image })) }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>


      </>
    )

  });




  // PRODUCTS 2............

   const images1 = {

    "amul.png": amul,
    "butter.png": butter,
    "curd.png": curd,
    "bread.png": bread,
    "bread1.png": bread1,
    "bread2.png": bread2,
    "cheese.png": cheese

  };
  
  const ans1 = mydata.map((key) => {

    const imgSrc = images1[key.image] || amul;

    return (
      <>

        <Card style={{width: '18rem', margin: '0.5rem', border: '0px solid rgb(69, 73, 70)',borderRadius: '10px',boxShadow: '0 4px 8px rgba(0,0,0,0.2)',flex: '0 0 auto',overflow: "hidden",cursor: "pointer" }}>

          <Card.Img variant="top" src={imgSrc} style={{ height: "140px", objectFit: "contain", marginTop: "10px" }} />

          <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

            <Card.Title style={{ fontSize: "1.1rem",fontWeight: "bold",textAlign: "center",marginTop: "0.5rem"}}>

              {key.name}

            </Card.Title>

            <Card.Text style={{color: "#666",fontSize: "0.9rem",margin: "0.3rem 0"}}>

              {key.quantity} unit{key.quantity > 1 ? "s" : ""}

            </Card.Text>

            <div style={{fontWeight: "bold",fontSize: "1.2rem",marginBottom: "0.5rem"}}>

              {key.price}

            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", }}>

              <Button variant="outline-success" size="sm" onClick={() => decreaseQuantity(key.name)} style={{width: "40px",height: "4vh"}}>
                -
              </Button>

              <span style={{ minWidth: "20px", textAlign: "center" }}>
                {quantities[key.name] || 0}
              </span>
              
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => increaseQuantity(key.name)}
                style={{
                  width: "40px",
                  height: "4vh"

                }}
              >
                +
              </Button>
            </div>

            <Button
              variant="outline-success"

              style={{
                marginTop: "0.5rem",
                width: "80%",
                maxWidth: "150px",
                fontWeight: "bold",
                height: "8ch",
                color: "white",
                backgroundColor: "green",
                borderRadius: "6%"
              }}
              disabled={quantities[key.name] === 0}
              onClick={() => { dispatch(addtocart({ id: key.name, name: key.name, quantity: quantities[key.name] || 0, price: key.price, image: key.image })) }}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>


      </>
    )

  });
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "1rem" }}>  Dairy and Breads</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans}
          </div>

       
        </div>
      </div>


      <h1 style={{ textAlign: "center", margin: "1rem" }}>Rolling paper & tobacco</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans1}
          </div>

         
        </div>
      </div>

      <h1 style={{ textAlign: "center", margin: "1rem" }}>Snacks & Munchies</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans}
          </div>

         
        </div>
      </div>


      <h1 style={{ textAlign: "center", margin: "1rem" }}>Mouth fresheners</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans}
          </div>

        
         
        </div>
      </div>



      <h1 style={{ textAlign: "center", margin: "1rem" }}>Cold Drinks & Juices</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans}
          </div>

        
        </div>
      </div>




      <h1 style={{ textAlign: "center", margin: "1rem" }}>Candies & Gums</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#f9f9f9',
          padding: '10px',
          borderRadius: '10px',
        }}>


          <div
            ref={scrollRef}
            id="product1"
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              overflowX: "auto",
              gap: "1rem",
              maxWidth: "80vw",
              scrollBehavior: "smooth",
              margin: "0 10px"
            }}
          >
            {ans}
          </div>

         
        </div>
      </div>







    </>
  );

}
export default Products;



