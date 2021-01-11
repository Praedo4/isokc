import Recording from "./recording.js";

function Recordings(data) {
    // console.log(data)
    return data.recordings.map((recording, i) => {
      // console.log(recording)
      return <Recording {...recording} key={i} />;
    });
  }

  export default Recordings