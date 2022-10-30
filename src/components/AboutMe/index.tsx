import profile from "../../assets/profile.jpg";
import "./style.scss";

const AboutMe = () => {
  return (
    <section className="aboutme" id="about">
      <h1>About Me</h1>
      <article className="container">
        <div className="meta">
          <p>
            Hello! My name is Aryan Tirkey , I'm self-taught Fullstack web
            developer. My interest in web development started back in 2020 . I'm
            always passionate about how new techology works and how to build
            them. Sometimes i also like to do web scrapping and automation
            testing to upskill my knowledge gather data. As of today I'm looking
            for job . My main focus is to build best web apps with modern tools
            and as per requirements .
          </p>
          <h2>Here are few technologies i've been working with recently.</h2>
          <ul className="skills">
            <li>JavaScript(ES6+)</li>
            <li>Node.js</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>React Vite</li>
            <li>Scss</li>
            <li>Framer-Motion</li>
            <li>React-Router-Dom (v6)</li>
            <li>Redux Toolkit</li>
            <li>React Query</li>
            <li>JEST</li>
            <li>Express</li>
            <li>Mongodb</li>
            <li>Jsonwebtokens</li>
          </ul>
        </div>
        <div className="profile">
          <div className="img-container">
            <img src={profile} alt="profile pic" loading="lazy" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
