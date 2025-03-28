import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import News from "./pages/news/News";
import Tariffs from "./pages/tariffs/Tariffs";
import Inner from "./pages/inner/Inner";
import Partners from "./pages/partners/Partners";

const App = () => {
  return (
    <Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="tariffs" element={<Tariffs />} />
          <Route path="news" element={<News />} />
          <Route path="faq" element={<Faq />} />
          <Route path="tariffs/:tariff" element={<Inner />} />
          <Route path="partners" element={<Partners />} />
        </Routes>
      </Layout>
    </Fragment>
  );
};

export default App;
