import "./App.css";
import * as React from "react";

function expandShlokas(data) {
  let shlokas = [];

  const startSplit = data.start.split(".");
  const startChapter = parseInt(startSplit[0]);
  const startShloka = parseInt(startSplit[1]);

  const endSplit = data.end.split(".");
  const endChapter = parseInt(endSplit[0]);
  const endShloka = parseInt(endSplit[1]);

  // console.log(startChapter + "." + startShloka + " ----- " + endChapter + "." + endShloka)

  for (var chapter = startChapter; chapter <= endChapter; chapter++) {
    for (var shloka = startShloka; shloka <= endShloka; shloka++) {
      shlokas.push(chapter + "." + shloka);
    }
  }

  return shlokas;
}

function getAudioFilename(recording){
  return  "recordings/" +  (recording.filename ? recording.filename :recording.end + ".mp3");
}

function Recording(data) {
  let shlokas = expandShlokas(data);

  const audioRef = React.useRef();
  console.log(audioRef)
  React.useEffect(()=>{
    const {current: audioElement} = audioRef
    console.log('currentTime: ' + audioElement.currentTime)
  }
  )

  return (
    <section id={data.start}>
      <p>Шлоки: {shlokas.join(",")}</p>
      <audio controls ref={audioRef}>
        <source src={getAudioFilename(data)} type="audio/mpeg" />
      </audio>
      <hr />
    </section>
  );
}

function Recordings(data) {
  // console.log(data)
  return data.recordings.map((recording, i) => {
    // console.log(recording)
    return <Recording {...recording} key={i} />;
  });
}

function TableOfContent(data) {
  return data.recordings.map((recording, i) => {
    // console.log(recording);
    return (
      <div className="navigation-item" key={i}>
        <a href={"#" + recording.start}>
          Шлоки {recording.start} -- {recording.end}
        </a>
      </div>
    );
  });
}

import Data from "./data";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ИСККОН</h1>
        <h2>Международное общество сознания Кришны</h2>
        <h3>Бхагавад Гита</h3>
        <p>
          На этом сайте Вы найдёте записи чтения Бхагавад Гиты сделанные Набхи
          Прабху.
        </p>
        {/* <p>Каждые 3 минуты
          сайт запоминает на каком месте Вы слушаете, так что Вы можете не
          запоминать и не записывать где именно Вы.</p> */}
      </header>

      <section>
        <h3>Список записей</h3>
        <TableOfContent {...Data} />
        <hr />
      </section>
      <Recordings {...Data} />
    </div>
  );
}

export default App;
