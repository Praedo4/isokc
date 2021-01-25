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

function getAudioFilename(recording) {
  return (
    "recordings/" +
    (recording.filename ? recording.filename : recording.end + ".mp3")
  );
}

function Recording(data) {
  let shlokas = expandShlokas(data);

  const audioRef = React.useRef();
  React.useEffect(() => {
    const { current: audioElement } = audioRef;
  });

  if(audioRef.current){
    audioRef.current.pause()
    audioRef.current.load()
  }

  return (
    <section id={data.start}>
      <p>Шлоки: {shlokas.join(",")}</p>
      <button onClick={()=>data.findPrevious(data)}>←</button>
      <audio controls ref={audioRef}>
        <source src={getAudioFilename(data)} type="audio/mpeg" />
      </audio>
      <button onClick={()=>data.findNext(data)}>→</button>
      <hr />
    </section>
  );
}

export default Recording;
