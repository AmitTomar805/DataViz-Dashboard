import React from 'react';
import styles from '../styles/Layout.module.css'; // Assuming you are using CSS Modules

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutContainer}>
      <nav className={styles.navBar}>Navigation Bar</nav>
      <aside className={styles.hamburgerMenu}>Hamburger Menu</aside>
      <main className={styles.mainContent}>
        <div className={styles.chart} id="lineChart">{(children as React.ReactNode[])[0]}</div>
        <div className={styles.chart} id="pieChart">{(children as React.ReactNode[])[1]}</div>
        <div className={styles.chart} id="candlestickChart">{(children as React.ReactNode[])[2]}</div>
        <div className={styles.chart} id="barChart">{(children as React.ReactNode[])[3]}</div>
      </main>
    </div>
  );
};

export default Layout;
