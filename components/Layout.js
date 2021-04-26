import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Link from "next/link";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>विश्व</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <div className={styles.div}>
            <Image
              src="/logo.png"
              alt="logo"
              width={30}
              height={30}
              alt="kuchnahi"
            />
            <h1>विश्व</h1>
          </div>
        </Link>

        {/* <button className={styles.themeSwitcher} onClick={switchTheme}>
          <Brightness6Rounded />
        </button> */}
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Made with 💗</footer>
    </div>
  );
};

export default Layout;
