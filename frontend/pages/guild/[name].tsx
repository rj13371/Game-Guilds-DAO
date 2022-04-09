import { NextPage } from "next";
import { useRouter } from "next/router";

const Guild: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <div className="main">
      <h1>{name}</h1>
    </div>
  );
};

export default Guild;
