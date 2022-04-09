import { NextPage } from "next";
import { useMoralis } from "react-moralis";
import { Button, Icon, Input } from "web3uikit";
import useWindowWidth from "../../helpers/hooks/useWindowWidth";
import styles from "../../styles/Guild.module.css";

const CreateGuild: NextPage = () => {
  const { user } = useMoralis();
  const windowWidth = useWindowWidth(window);

  const handleSubmit = () => {
    console.log("hello");
  };

  return (
    <div className="main">
      <h2>Create Guild</h2>
      <form className={styles.formCreateGuild} onSubmit={handleSubmit}>
        <Input
          label="Guild name"
          name="Guild name"
          autoFocus
          id="name"
          placeholder="Guild name"
          type="text"
          width={windowWidth < 600 ? "80%" : "500px"}
        />
        <Input
          label="Max members"
          name="Max members"
          id="members"
          placeholder="Max members"
          type="number"
          width={windowWidth < 600 ? "80%" : "500px"}
        />
        <label className={styles.labelFile} htmlFor="file">
          Upload logo
        </label>
        <input id="file" className={styles.inputFile} type="file" />
        <Button type="submit" text="Create" />
      </form>
    </div>
  );
};

export default CreateGuild;
