import {
  FiGithub as GithubIcon,
  FiExternalLink as ExternalLinkIcon,
  FiFolder as FolderIcon,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import "./style.scss";

const Works = () => {
  return (
    <section className="works" id="works">
      <h1>Some Things I've Built</h1>
      <div className="projects">
        <article className="item">
          <div className="poster">
            <img src="/netflix.png" alt="" loading="lazy" />
          </div>
          <div className="meta">
            <h2>Feature Project</h2>
            <h3>Netflix Clone</h3>
            <div className="info">
              <p>
                Netflix clone is a <span>Fullstack</span> Project with featuring{" "}
                <span>Authentication</span>,<span>File Upload</span>,
                <span>Infinite Scroll</span>,<span>Lazy Loading</span>,
                <span>Error Boundaries</span>. Backend is created using
                <span>NodeJS</span>,<span>Express</span>,<span>Mongodb</span>,
                <span>Custom Error Handler</span>,<span>Joi</span>
              </p>
            </div>
            <ul className="tags">
              <li>React Vite</li>
              <li>Framer Motion</li>
              <li>Context API</li>
              <li>Local Storage</li>
              <li>Axios Interceptor</li>
              <li>React-Router-Dom v6</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDb</li>
            </ul>
            <div className="links">
              <a
                href="https://github.com/AryanTy20/NetflixCloneFrontend"
                target="_blank"
                title="Frontend"
              >
                <GithubIcon />
              </a>
              <a
                href="https://github.com/AryanTy20/NetflixCloneAPI"
                target="_blank"
                title="Backend"
              >
                <GithubIcon />
              </a>
              <a
                href="https://netflixclon3.netlify.app"
                target="_blank"
                title="Live URL"
              >
                <ExternalLinkIcon />
              </a>
              {/* <Link to="https://github.com/AryanTy20/NetflixCloneFrontend">
                <GithubIcon />
              </Link>
              <Link to="https://github.com/AryanTy20/NetflixCloneAPI">
              </Link>
              <Link to="">
     
              </Link> */}
            </div>
          </div>
        </article>
        <article className="item">
          <div className="poster">
            <img src="/Interactive Comment.png" alt="" loading="lazy" />
          </div>
          <div className="meta">
            <h2>Feature Project</h2>
            <h3>Interective Comment </h3>
            <div className="info">
              <p>
                Netflix clone is a <span>Fullstack</span> Project with{" "}
                <span>Authentication</span>,<span>File Upload</span>,
                <span>Infinite Scroll</span>,<span>Lazy Loading</span>,
                <span>Error Boundaries</span>. Backend is created using {""}
                <span>NodeJS</span>,<span>Express</span>,<span>Mongodb</span>,
                <span>Custom Error Handler</span>,<span>Joi</span>
              </p>
            </div>
            <ul className="tags">
              <li>React Vite</li>
              <li>Framer Motion</li>
              <li>Context API</li>
              <li>Local Storage</li>
              <li>Axios Interceptor</li>
              <li>React-Router-Dom v6</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDb</li>
            </ul>
            <div className="links">
              <a
                href="https://github.com/AryanTy20/NetflixCloneFrontend"
                target="_blank"
                title="Frontend"
              >
                <GithubIcon />
              </a>
              <a
                href="https://github.com/AryanTy20/NetflixCloneAPI"
                target="_blank"
                title="Backend"
              >
                <GithubIcon />
              </a>
              <a
                href="https://netflixclon3.netlify.app"
                target="_blank"
                title="Live URL"
              >
                <ExternalLinkIcon />
              </a>
              {/* <Link to="https://github.com/AryanTy20/NetflixCloneFrontend">
                <GithubIcon />
              </Link>
              <Link to="https://github.com/AryanTy20/NetflixCloneAPI">
              </Link>
              <Link to="">
     
              </Link> */}
            </div>
          </div>
        </article>
        <article className="item">
          <div className="poster">
            <img
              src="/Ecommerce Landing Page.png"
              alt="project 3 images"
              loading="lazy"
            />
          </div>
          <div className="meta">
            <h2>Feature Project</h2>
            <h3>Ecommerce Landing Page</h3>
            <div className="info">
              <p>
                Ecommerce Landing Page is a challange of{" "}
                <a href="https://www.frontendmentor.io/"></a> Frontend Mentor.
                This is the first project from where I started TypeScript in
                react and with better accessibility
              </p>
            </div>
            <ul className="tags">
              <li>React Vite</li>
              <li>Framer Motion</li>
              <li>Context API</li>
              <li>Local Storage</li>
              <li>Redux-Toolkit</li>
            </ul>
            <div className="links">
              <a
                href="https://github.com/AryanTy20/NetflixCloneFrontend"
                target="_blank"
                title="Source Code"
              >
                <GithubIcon />
              </a>
              <a
                href="https://netflixclon3.netlify.app"
                target="_blank"
                title="Live URL"
              >
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </article>
      </div>
      <div className="other-projects">
        <h2>Other Noteworthy Projects</h2>
        <div className="project">
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
          <article className="item">
            <div className="header">
              <div className="foldericon">
                <FolderIcon />
              </div>
              <div className="external-links">
                <a href="#" target="_blank">
                  <GithubIcon />
                </a>
                <a href="#" target="_blank">
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
            <div className="info">
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores adipisci odio ipsum nam facilis pariatur libero ab
                quibusdam, fugiat distinctio?
              </p>
              <ul className="tags">
                <li>React</li>
                <li>Axios</li>
                <li>TypeScript</li>
              </ul>
            </div>
          </article>
        </div>
      </div>
      <button className="show-more">Show More</button>
    </section>
  );
};

export default Works;
