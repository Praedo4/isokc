
function getAudioFilename(recording) {
  return (
    (recording.filename ? recording.filename : recording.end + ".mp3")
  );
}

function TableOfContent(props) {
  
  return (
    <div style={{display: 'flex', overflowX: 'auto'}}>
      {props.recordings.map((recording, i) => {
        return (
          <div className="navigation-item" key={i} style={{margin: '20px', whiteSpace: 'nowrap'}}>
            <button onClick={() => props.onSelect(recording)}>
              Шлоки {recording.start} -- {recording.end}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default TableOfContent
