import Header from "./Header";
import Banner from "./Banner";
import MiddleBanner from "./MiddleBanner";
import Products from "./Products";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <Header />

      <section style={styles.bannerSection}>
        <Banner />
      </section>

      <section style={styles.middleBannerSection}>
        <MiddleBanner />
      </section>

      <section style={styles.productsSection}>
        <Products />
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    overflowX: "hidden",
  },
  bannerSection: {
    width: "100%",
  },
  middleBannerSection: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
  },
  productsSection: {
    width: "100%",
    padding: "20px",
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
};

export default HomePage;
