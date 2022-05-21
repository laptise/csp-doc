import { FC, ReactNode } from "react";
import styles from "../styles/Home.module.css";
import { Header } from "./header";
import SearchAppBar from "./nav";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <SearchAppBar />
      <div className={styles.container}>
        <Header title={title} />
      </div>
      <main>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}></span>
        </a>
      </footer>
    </>
  );
};
