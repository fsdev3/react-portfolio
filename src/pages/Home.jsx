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
              <p>JavaScript, React.js, Redux, HTML, CSS, Styled-Components</p>
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
