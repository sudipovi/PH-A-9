import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CareTips from "../components/CareTips";
import Expert from "../components/Expert";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar className="container mx-auto"></Navbar>
      </header>
      <main>
        <section className="container mx-auto my-5">
          <CareTips></CareTips>
        </section>
        <section className="container mx-auto my-5">
          <Expert></Expert>
        </section>
      </main>
      <footer>
        <Footer className="container mx-auto"></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
