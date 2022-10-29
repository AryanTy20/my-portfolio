import "./style.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="box">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="content">
          <img src="/logo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
