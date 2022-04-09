import styles from "./Navbar.module.css";
import { ConnectButton } from "web3uikit";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navBar}>
      <h4 className={styles.logo}>Game Guilds</h4>
      <ConnectButton />
    </nav>
  );
}
