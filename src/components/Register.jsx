import React from "react";

const Register = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Your Account</h2>
        <form style={styles.form}>
          <input type="text" placeholder="Full Name" style={styles.input} required />
          <input type="email" placeholder="Email Address" style={styles.input} required />
          <input type="password" placeholder="Password" style={styles.input} required />
          <input type="password" placeholder="Confirm Password" style={styles.input} required />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.text}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>Login</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
  },
  title: {
    marginBottom: "25px",
    fontSize: "24px",
    textAlign: "center",
    color: "#1ba672",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    backgroundColor: "#1ba672",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  text: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#1ba672",
    fontWeight: "bold",
    textDecoration: "none",
  }
};

export default Register;
