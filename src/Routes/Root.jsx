import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Main } from "../Components/Layout/Main/Main";

const list = [
  {
    link: "women",
    title: "Frauen",
    categories: [
      { link: "bras", title: "BHs" },
      { link: "panties", title: "Unterhosen" },
      { link: "socks", title: "Socken" },
      { link: "bathrobes", title: "Bademäntel" },
      { link: "thermal", title: "Thermounterwäsche" },
      { link: "pyjamas", title: "Pyjamas" },
    ],
  },

  {
    link: "men",
    title: "Männer",
    categories: [
      { link: "panties", title: "Unterhosen" },
      { link: "socks", title: "Socken" },
      { link: "bathrobes", title: "Bademäntel" },
      { link: "thermal", title: "Thermounterwäsche" },
    ],
  },
];

export const Root = () => {
  return (
    <>
      <Header list={list} />
      <Main>
        <Outlet />
      </Main>
      <Footer list={list} />
    </>
  );
};
