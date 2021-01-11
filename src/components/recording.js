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
  console.log(audioRef);
  React.useEffect(() => {
    const { current: audioElement } = audioRef;
    console.log("currentTime: " + audioElement.currentTime);
  });

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

export default Recording;
