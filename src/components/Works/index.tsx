import {
  FiGithub as GithubIcon,
  FiExternalLink as ExternalLinkIcon,
  FiFolder as FolderIcon,
} from "react-icons/fi";

import "./style.scss";

const Works = () => {
  const data = [
    {
      title: "Interactive Rating",
      links: {
        github: "https://github.com/AryanTy20/Frontend-Interactive-Rating",
        live: "https://frontend-interactive-rating.vercel.app/",
      },

      desc: "It's a Frontend Mentor Challange , where user can rate and it will show the rating you select.",
      tags: ["React", "Vite", "Scss"],
    },
    {
      title: "Intro section drop menu",
      links: {
        github: "https://github.com/AryanTy20/Frontend-Intro-section-drop-menu",
        live: "https://frontend-intro-section-drop-menu.vercel.app/",
      },

      desc: "It's a Frontend Mentor Challange , main task of this project was to build a drop down menu ",
      tags: ["React", "Vite", "Scss"],
    },
    {
      title: "Time Tracking",
      links: {
        github: "https://github.com/AryanTy20/frontend-time-tracking",
        live: "https://frontend-time-tracking.vercel.app/",
      },

      desc: "It's a Frontend Mentor Challange , main objective was to build responsive and load diffrent data as per button click",
      tags: ["React", "Vite", "Scss"],
    },
    {
      title: "Todo App",
      links: {
        github: "https://github.com/AryanTy20/Frontend-Todo",
        live: "https://frontend-todo-woad.vercel.app/",
      },

      desc: "It's a Frontend Mentor Challange , main objective was to build responsive layout with local storage to store theme mode , drag and drop list",
      tags: ["React", "Vite", "Scss"],
    },
    {
      title: "Static Job Listing",
      links: {
        github: "https://github.com/AryanTy20/frontend-static-job-listing",
        live: "https://frontend-static-job-listing.vercel.app/",
      },

      desc: "It's a Frontend Mentor Challange , main objective was to build responsive layout with filter search as tags are selected",
      tags: ["React", "Vite", "Scss", "local storage"],
    },
    {
      title: "Education site",
      links: {
        github: "https://github.com/AryanTy20/Education-Challange",
        live: "https://eduhub-ten.vercel.app/",
      },

      desc: "Main objective was to build responsive and load diffrent data as per button click",
      tags: ["React", "Vite", "Scss"],
    },
  ];

  return (
    <section className="works" id="work">
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
            </div>
          </div>
        </article>
        <article className="item">
          <div className="poster">
            <img src="/Interactive Comment.png" alt="" loading="lazy" />
          </div>
          <div className="meta">
            <h2>Feature Project</h2>
            <h3>Interactive Comment </h3>
            <div className="info">
              <p>
                It's a{" "}
                <a href="https://www.frontendmentor.io/">Frontend Mentor</a>{" "}
                challange . This challange was quite good as it has nested
                components , use of local strorage.Here user can post comments,
                edit, delete their comments.
              </p>
            </div>
            <ul className="tags">
              <li>React Vite</li>
              <li>Framer Motion</li>
              <li>Context API</li>
              <li>Local Storage</li>
              <li>Redux Toolkit</li>
            </ul>
            <div className="links">
              <a
                href="https://github.com/AryanTy20/Frontend-Interactive-Comments"
                target="_blank"
                title="Frontend"
              >
                <GithubIcon />
              </a>
              <a
                href="https://frontend-interactive-comments.vercel.app/"
                target="_blank"
                title="Live URL"
              >
                <ExternalLinkIcon />
              </a>
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
                <a href="https://www.frontendmentor.io/">Frontend Mentor</a> .
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
                href="https://github.com/AryanTy20/Frontend-Ecommerce-landing"
                target="_blank"
                title="Source Code"
              >
                <GithubIcon />
              </a>
              <a
                href="https://frontend-ecommerce-landing.vercel.app/"
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
          {data.map((item, i) => (
            <article className="item" key={i}>
              <div className="header">
                <div className="foldericon">
                  <FolderIcon />
                </div>
                <div className="external-links">
                  {item.links.github && (
                    <a href={item.links.github} target="_blank">
                      <GithubIcon />
                    </a>
                  )}
                  {item.links.live && (
                    <a href={item.links.live} target="_blank">
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
              <div className="info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <ul className="tags">
                  {item.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
      <a href="https://github.com/aryanty20">
        <button className="show-more">Show More</button>
      </a>
    </section>
  );
};

export default Works;
