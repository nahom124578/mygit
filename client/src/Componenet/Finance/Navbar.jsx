import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/salary-payment" style={styles.navLink}>
            Record Salary
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/pay-expense" style={styles.navLink}>
            Record Expense
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/sold-products" style={styles.navLink}>
            Products
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/hospitalService" style={styles.navLink}>
            Services
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/expense" style={styles.navLink}>
            Expenses
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/revenue" style={styles.navLink}>
            Revenues
          </Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/paidsalry" style={styles.navLink}>
            Paid Salary
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  navbar: {
    marginTop: "5%",
    display: "flex",
    backgroundColor: "rgb(0, 136, 214)",
    width: "200px",
    height: "100%",
    borderRadius: "15px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    marginLeft: "15%",
    padding: "10px",
  },
  navItem: {
    marginRight: "20px",
    padding: "10px",
    fontWeight: "bold",
    borderBottom: "1px solid #666",
  },
  navLink: {
    textDecoration: "none",
    color: "black",
  },
};

export default Navbar;
