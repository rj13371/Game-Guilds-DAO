import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card } from "web3uikit";
// TODO: Use guilds from back end
import Guilds from "../mock/guilds";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { isInitialized, isAuthenticated, isWeb3Enabled, enableWeb3 } =
    useMoralis();

  useEffect(() => {
    if (isInitialized && isAuthenticated && !isWeb3Enabled) {
      enableWeb3();
    }
  }, [isInitialized, isAuthenticated, isWeb3Enabled]);

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

      <div className="main">
        <h1 className={styles.appTitle}>Welcome to Game Guilds</h1>
        <p>
          Want to create a new community?{" "}
          <Link href="/guild/create">
            <a style={{ textDecoration: "underline" }}>Click here</a>
          </Link>
        </p>
        <div className={styles.guildCardList}>
          {Guilds.map((guild, index) => (
            // TODO: Change key to a unique identifier
            <div className={styles.guildCard} key={index}>
              <Card
                onClick={() => router.push(`/guild/${guild}`)}
                description="Click to join this community!"
              >
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
