import React from "react";
import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>HTML, CSS, JavaScript, React.js, Redux, Webpack, REST-API</p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>Node.js, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
