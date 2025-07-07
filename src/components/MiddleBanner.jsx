import paan from "../images/paan.png";
import dairy from "../images/dairy.png";
import drinks from "../images/drinks.png";
import fruits from "../images/fruits.png";
import snacks from "../images/snacks.png";
import home from "../images/home.png";
import sweet from "../images/sweet.png";
import healthly from "../images/healthly.png";
import atta from "../images/atta.png";
import masala from "../images/masala.png";
import clean from "../images/clean.png";
import baby from "../images/baby.png";

const MiddleBanner = () => {
  const topImages = [
    { src: paan, alt: "Paan" },
    { src: dairy, alt: "Dairy" },
    { src: drinks, alt: "Drinks" },
    { src: fruits, alt: "Fruits" },
    { src: snacks, alt: "Snacks" },
    { src: baby, alt: "Baby" },
  ];

  const bottomImages = [
    { src: atta, alt: "Atta" },
    { src: healthly, alt: "Healthy" },
    { src: masala, alt: "Masala" },
    { src: sweet, alt: "Sweet" },
    { src: home, alt: "Home" },
    { src: clean, alt: "Cleaning" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.grid}>
        {topImages.map((img, i) => (
          <div key={i} style={styles.item}>
            <img src={img.src} alt={img.alt} style={styles.image} />
            <p style={styles.caption}>{img.alt}</p>
          </div>
        ))}
      </div>

      <div style={styles.grid}>
        {bottomImages.map((img, i) => (
          <div key={i} style={styles.item}>
            <img src={img.src} alt={img.alt} style={styles.image} />
            <p style={styles.caption}>{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "100px",
    borderRadius: "8px",
  },
  caption: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#333",
    fontWeight: "500",
  },
};

export default MiddleBanner;
