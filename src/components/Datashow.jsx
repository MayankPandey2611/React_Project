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
  "drinks.png": drinks,
  "snacks.png": snacks,
  "sweet.png": sweet
};

const DataShow = () => {
  const { id } = useParams();
  const [mydata, setMyData] = useState({});

  const loadData = async () => {
    try {
      const api = `http://localhost:3000/products/${id}`;
      const response = await axios.get(api);
      setMyData(response.data);
    } catch (err) {
      console.error("Failed to fetch product:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, [id]);

  return (
    <div style={{ padding: "2rem" }}>
      {mydata && (
        <>
          <div>
            <img
              src={images[mydata.image]}
              alt={mydata.name}
              width="300"
              height="300"
            />
          </div>
          <div>
            <h1>Product Name: {mydata.name}</h1>
            <h3 style={{ color: "green" }}>Category: {mydata.category}</h3>
            <h2 style={{ color: "red" }}>Price: ₹{mydata.price}</h2>
            <button onClick={() => window.history.back()} style={{
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "green",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
}}>
  ← Back to Products
</button>
          </div>
        </>
      )}
    </div>
  );
};

export default DataShow;
