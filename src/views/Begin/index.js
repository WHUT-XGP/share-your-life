import React from "react";
import { withRouter } from "react-router-dom";
import cammer from "../../assets/iconfont/Begin/cammer.png";
import go from "../../assets/iconfont/Begin/go.png";
import background from "../../assets/img/Begin/background.png";
import "./Begin.css";
function Begin(props) {
  const text = "打开生活，发现美好";
  const setBack = {
    backgroundImage: `url(${background})`,
  };
  // console.log(props)
  // const history = useHistory();
  const { history } = props;
  return (
    <div className="begin-box" style={setBack}>
      <div className="begin-box-item">
        <div className="begin-icon">
          <img src={cammer} className="rotate"></img>
        </div>
        <div className="begin-text">{text}</div>
        <div
          className="begin-icon"
          onClick={() => {
            history.push("/login");
            //   history.replace("/login")
          }}
        >
          <img src={go} className="move"></img>
        </div>
      </div>
    </div>
  );
}
// 以memo形式导出
export default React.memo(withRouter(Begin));
