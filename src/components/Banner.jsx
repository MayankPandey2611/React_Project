import banner from "../images/banner.png";
import ban1 from "../images/ban1.png";
import ban2 from "../images/ban2.png";
import ban3 from "../images/ban3.png";

const Banner = () => {
  return (
    <div style={styles.container}>
      {/* Main full-width banner */}
      <img src={banner} alt="Main Banner" style={styles.mainBanner} />

      {/* Sub banners */}
      <div style={styles.bannerRow}>
        <div style={styles.bannerBox}>
          <img src={ban1} alt="Banner 1" style={styles.subBanner} />
        </div>
        <div style={styles.bannerBox}>
          <img src={ban2} alt="Banner 2" style={styles.subBanner} />
        </div>
        <div style={styles.bannerBox}>
          <img src={ban3} alt="Banner 3" style={styles.subBanner} />
        </div>
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
  mainBanner: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  bannerRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    gap: "20px",
  },
  bannerBox: {
    flex: "1 1 250px",
    maxWidth: "300px",
  },
  subBanner: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
  },
};

export default Banner;
