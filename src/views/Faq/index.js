import React, { useState } from "react";
import "./index.scss";

// Images
import left from "../../asset/AskQuesSponsor/FAQ/FAQ_L.png";
import right from "../../asset/AskQuesSponsor/FAQ/FAQ_R.png";

const Faq = () => {
  const [question, setQuestion] = useState("FAQ");

  return (
    <div className="Faq">
      <div className="title">
        <div className="text">常見問答</div>
        <div className="bg left">
          <img id="left" src={left} alt="左邊的圖" />
        </div>
        <div className="bg right">
          <img id="right" src={right} alt="右邊的圖" />
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          <div className="btns">
            <button
              className={`btn ${
                question === "FAQ" ? "btn-tagActive" : "btn-tag"
              }`}
              onClick={() => {
                setQuestion("FAQ");
              }}
            >
              常見問答
            </button>
            <button
              className={`btn ${
                question === "UI" ? "btn-tagActive" : "btn-tag"
              }`}
              onClick={() => {
                setQuestion("UI");
              }}
            >
              UI設計師
            </button>
            <button
              className={`btn ${
                question === "FE" ? "btn-tagActive" : "btn-tag"
              }`}
              onClick={() => {
                setQuestion("FE");
              }}
            >
              前端工程師
            </button>
            <button
              className={`btn ${
                question === "GP" ? "btn-tagActive" : "btn-tag"
              }`}
              onClick={() => {
                setQuestion("GP");
              }}
            >
              團體組
            </button>
          </div>
          <div className="content">
            <div className={`FAQ ${question === "FAQ" ? "" : "none"}`}>
              <div className="pair">
                <div className="question">
                  如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？
                </div>
                <div className="answer">
                  可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  大家都好強，我怕我做的東西沒有達到過關門檻，不敢登入作品？
                </div>
                <div className="answer">
                  這個活動並非競爭性質，每個參賽者都是你的好朋友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才到過關門檻？
                </div>
                <div className="answer">
                  主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  我已經寫到一半了，但時間快來不及，可以先投稿嗎？
                </div>
                <div className="answer">
                  可以，有投稿表示你還會持續努力在這次活動上。
                </div>
              </div>
            </div>
            <div className={`UI ${question === "UI" ? "" : "none"}`}>
              <div className="pair">
                <div className="question">
                  到時投稿到平台是提供什麼呢？我也不像是工程師可以有
                  CODEPEN上傳。
                </div>
                <div className="answer">
                  <div className="large">
                    其中投稿的欄位裡面會有一個「線上標示文件」，
                  </div>
                  <div className="large">
                    像是 Adobe XD 便有提供該服務(範例連結)，
                  </div>
                  <div className="large">
                    屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
                  </div>
                  <div className="small">
                    其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD
                    便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  <div className="large">
                    投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web
                    介面，
                  </div>
                  <div className="large">那授權部分可以設定嗎？</div>
                  <div className="small">
                    投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web
                    介面，那授權部分可以設定嗎？
                  </div>
                </div>
                <div className="answer">
                  會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY
                  等授權，以保障您的 UI 作品權益。
                </div>
              </div>
              <div className="pair">
                <div className="question">一定要上傳「線上標示文件」嗎？</div>
                <div className="answer">
                  <div className="large">
                    是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，
                  </div>
                  <div className="large">
                    將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用
                    Sketch Measure 編譯出來後，
                  </div>
                  <div className="large">
                    壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。
                  </div>
                  <div className="small">
                    是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用
                    Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP
                    到雲端空間 (Dropbox、Google Drive)。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  不能使用 PS、Illustrator 設計嗎？
                </div>
                <div className="answer">
                  <div className="large">
                    只要您能找到 PS 或 Illustrator
                    產出線上標示文件的方式就可以，
                  </div>
                  <div className="large">
                    因為前端工程師大部分皆比較少具有繪圖軟體，
                  </div>
                  <div className="large">
                    所以用線上標示文件將會減少許工程師協作上的溝通時間。
                  </div>
                  <div className="small">
                    只要您能找到 PS 或 Illustrator
                    產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  當每週一題目出來後，我有一些設計進度也可以先投稿嗎？
                </div>
                <div className="answer">
                  <div className="large">
                    可以，團隊在協作過程中，一定也會先出些進度提供前端切版，
                  </div>
                  <div className="large">
                    有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過FB
                    社團來溝通進度即可。
                  </div>
                  <div className="small">
                    可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過FB
                    社團來溝通進度即可。
                  </div>
                </div>
              </div>
            </div>
            <div className={`FE ${question === "FE" ? "" : "none"}`}>
              <div className="pair">
                <div className="question">
                  我可以不依照設計稿，自己做版面嗎？因為我想多練習 JS / 後端
                </div>
                <div className="answer">
                  可以，The F2E
                  活動是希望讓大家人人有功練，所以依照你自己想投入的方向練功即可。CSS
                  也可以用框架，例如 Bootstrap。
                </div>
              </div>
              <div className="pair">
                <div className="question">前端介面一定要長得一模一樣嗎？</div>
                <div className="answer">不用，依照自己的想法來開發也可以</div>
              </div>
              <div className="pair">
                <div className="question">
                  有現成的網頁靜態頁面嗎？我想只練習 JS / 後端就好
                </div>
                <div className="answer">
                  這段我們不會提供，畢竟每個人習慣的 Coding style
                  又不一樣，產出的 HTML、CSS 並非是自己習慣的 Layout
                  反而會更花時間。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  不能使用 PS、Illustrator 設計嗎？
                </div>
                <div className="answer">
                  <div className="large">
                    只要您能找到 PS 或 Illustrator
                    產出線上標示文件的方式就可以，
                  </div>
                  <div className="large">
                    因為前端工程師大部分皆比較少具有繪圖軟體，
                  </div>
                  <div className="large">
                    所以用線上標示文件將會減少許工程師協作上的溝通時間。
                  </div>
                  <div className="small">
                    只要您能找到 PS 或 Illustrator
                    產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  那我只想要練習 JS，HTML/CSS
                  我用陽春版，不依照設計稿開發可以嗎？
                </div>
                <div className="answer">
                  可以，你可以當做我們就是出一個主題，你依照那主題當作參考方向來開發即可。
                </div>
              </div>
            </div>
            <div className={`GP ${question === "GP" ? "" : "none"}`}>
              <div className="pair">
                <div className="question">請問團體組最多幾人？</div>
                <div className="answer">
                  最多 4 人，投稿作品時請派一位組長來投稿即可。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  我對獎項有興趣，可以只做第三道主題就好嗎？
                </div>
                <div className="answer">
                  可以，您可以在這場活動中，和組員一起打磨第三道主題，不用三個主題都做。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  那團體組第三道主題最晚投稿期限為？
                </div>
                <div className="answer">
                  團體組投稿第三週 UI 最晚投稿時間為 11/21(一)中午 12
                  點，前端最晚投稿期限為 11/28(一) 中午 12 點。
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  我們團體組比較想做手機 APP，可以投稿並符合評審門檻嗎？
                </div>
                <div className="answer">
                  <div className="large">
                    您可以開發手機 APP，若有在期限前投稿也能獲得數位獎狀。
                  </div>
                  <div className="large">
                    但評審門檻僅限 Web 瀏覽器應用開發，Android、iOS APP
                    則不在評審範圍內，故不符合評審門檻。
                  </div>
                  <div className="small">
                    您可以開發手機APP，若有在期限前投稿也能獲得數位獎狀。但評審門檻僅限
                    Web 瀏覽器應用開發，Android、iOS APP
                    則不在評審範圍內，故不符合評審門檻。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  請問除了前端開發、UI
                  設計外，還能做其他加值應用嗎？例如後端動態應用整合？
                </div>
                <div className="answer">
                  <div className="large">
                    可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API
                    的任何一 API，
                  </div>
                  <div className="large">
                    您可以依照本次主題「全台公車動態時刻查詢應用服務」
                  </div>
                  <div className="large">
                    做最大的加值整合應用，甚至搭配後端應用，整合多個外部 API
                    也是可以的。
                  </div>
                  <div className="small">
                    可以的，只要能透過網頁瀏覽器操控您的服務，並有使用到 TDX API
                    的任何一個
                    API，您可以依照本次主題「全台公車動態時刻查詢應用服務」做最大的加值整合應用，甚至搭配後端應用，整合多個外部
                    API 也是可以的。
                  </div>
                </div>
              </div>
              <div className="pair">
                <div className="question">
                  團體組的 UI 設計稿，可以讓『個人組-前端工程師』組別採用嗎？
                </div>
                <div className="answer">
                  不能，預設是不能讓『個人組-前端工程師』採用。
                </div>
              </div>
            </div>
          </div>
          <div className="joinBtn">
              <button className="btn btn-cta join" onClick={() => window.open("https://2022.thef2e.com/", "_blank")}>
                別擔心太多。報名，就對了
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
