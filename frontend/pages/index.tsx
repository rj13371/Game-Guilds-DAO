import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "web3uikit";
// TODO: Use guilds from back end
import Guilds from "../mock/guilds";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Game Guilds</title>
        <meta
          name="description"
          content="Voting platform for gaming communities"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <h1 className={styles.appTitle}>Welcome to Game Guilds</h1>
        <div className={styles.guildCardList}>
          {Guilds.map((guild, index) => (
            // TODO: Change key to a unique identifier
            <div className={styles.guildCard} key={index}>
              <Card description="Click to join this community!" title={guild}>
                <h2>{guild}</h2>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
