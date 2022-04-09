import { ReactNode } from "react";
import Navbar from "./Navbar";

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
