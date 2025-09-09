import type { FC } from "react";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { Main } from "./Main";

export const ContactUs: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
