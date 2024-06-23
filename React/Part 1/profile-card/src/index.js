import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Image() {
  return <img className="profile-image" src="./image.png" alt="img" />;
}

function AboutSection() {
  return (
    <section>
      <h2>Maksym Korniiko</h2>
      <p>
        Front-end web-developer. Learning React. Already learned HTML, CSS,
        JavaScript.
      </p>
      <Badge color="red" name="HTML" />
      <Badge color="blue" name="CSS" />
      <Badge color="yellow" name="JavaScript" />
    </section>
  );
}

function Badge(props) {
  return (
    <div className="badge" style={{ background: props.color }}>
      {props.name}{" "}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Image />
      <AboutSection />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
