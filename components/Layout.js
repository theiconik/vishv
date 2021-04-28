import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import { Brightness6Rounded } from "@material-ui/icons";
import { useEffect, useState } from 'react'

const Layout = ({ children }) => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, [])

  const switchTheme = () => {
    if(theme=== 'light') {
      saveTheme('dark');
    } else {
      saveTheme('light');
    }
  }

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme",theme);
    document.documentElement.setAttribute('data-theme',theme);
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>विश्व</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <div className={styles.div}>
            {/* <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              alt="vishw"
            /> */}
            <button className={styles.themeSwitcher} onClick={switchTheme}>
              <Brightness6Rounded style={{transform:"scale(1.2)"}} />
            </button>
            <h1>विश्व</h1>
          </div>
        </Link>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Made with 💗 & Next.js</footer>
    </div>
  );
};

export default Layout;
