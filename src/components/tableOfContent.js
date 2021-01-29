function TableOfContent(props) {
  
  return (
    <div style={{display: 'flex', overflowX: 'auto'}}>
      {props.recordings.map((recording, i) => {
        return (
          i%4 === 0 ? 
                <div
                  className="navigation-item"
                  key={i}
                  style={{ margin: "20px"}}
                >
                  <button onClick={() => props.onSelect(props.recordings[i])}>
                    Шлоки {props.recordings[i].start} — {props.recordings[i].end}
                  </button>
                 {i+1 < props.recordings.length ? <button onClick={() => props.onSelect(props.recordings[i+1])}>
                    Шлоки {props.recordings[i+1].start} — {props.recordings[i+1].end}
                  </button>: ""}
                  {i+2 < props.recordings.length ? <button onClick={() => props.onSelect(props.recordings[i+2])}>
                    Шлоки {props.recordings[i+2].start} — {props.recordings[i+2].end}
                  </button>: ""}
                  {i+3 < props.recordings.length ? <button onClick={() => props.onSelect(props.recordings[i+3])}>
                    Шлоки {props.recordings[i+3].start} — {props.recordings[i+3].end}
                  </button>: ""}
                </div>     
                : ""     
        );
      })}
    </div>
  );
}

export default TableOfContent
