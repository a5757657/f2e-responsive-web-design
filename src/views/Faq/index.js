import React , {useState} from  "react";
import "./index.scss";

const Faq = () => {
  const [question, setQuestion] = useState("FAQ")
  return (
    <div className="Faq">
      <div className="title">常見問答</div>
      <div className="container">
        <div className="bg">
          {/* <img src="" /> */}
        </div>
        <div className="bg">
          {/* <img src="" /> */}
        </div>
        <div className="wrapper">
          <div className="btns">
            <button className={`btn btn-tag ${question == "FAQ" ? "" : "tagActive"}`} onClick={()=>{setQuestion("FAQ")}}>常見問答</button>
            <button className={`btn btn-tag ${question == "UI" ? "" : "tagActive"}`} onClick={()=>{setQuestion("UI")}}>UI設計師</button>
            <button className={`btn btn-tag ${question == "FE" ? "" : "tagActive"}`} onClick={()=>{setQuestion("FE")}}>前端工程師</button>
            <button className={`btn btn-tag ${question == "GP" ? "" : "tagActive"}`} onClick={()=>{setQuestion("GP")}}>團體組</button>
          </div>
          <div className="cotent">
            <div className={`FAQ ${question == "FAQ" ? "" : "none"}`}>
              <div className="pair">
                <div className="question">如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？</div>
                <div className="answer">可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。</div>
              </div>
              <div className="pair">
              <div className="question">大家都好強，我怕我做的東西沒有達到過關門檻，不敢登入作品？</div>
                <div className="answer">這個活動並非競爭性質，每個參賽者都是你的好朋友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。</div>
              </div>
              <div className="pair">
              <div className="question">我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才到過關門檻？</div>
                <div className="answer"></div>
              </div>
              <div className="pair">
              <div className="question"></div>
                <div className="answer"></div>
              </div>
            </div>
            <div className={`UI ${question == "UI" ? "" : "none"}`}></div>
            <div className={`FE ${question == "FE" ? "" : "none"}`}></div>
            <div className={`GP ${question == "GP" ? "" : "none"}`}></div>
          </div>
          <div className="joinBtn">
            <button className="btn btn-cta">別擔心太多。報名，就對了</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
