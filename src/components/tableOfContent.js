function TableOfContent(props) {
  if(props.recordings == null){
    return null
  }
  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {props.recordings.map((recording, i) => {
        return i % 4 === 0 ? (
          <div className="navigation-item" key={i} style={{ margin: "20px" }}>
            <button
              onClick={() => props.onSelect(props.recordings[i])}
              className={props.selectedIndex > i ? "done" : ""}
            >
              Шлоки {props.recordings[i].start} — {props.recordings[i].end}
            </button>
            {i + 1 < props.recordings.length ? (
              <button
                onClick={() => props.onSelect(props.recordings[i + 1])}
                className={props.selectedIndex > i + 1 ? "done" : ""}
              >
                Шлоки {props.recordings[i + 1].start} —{" "}
                {props.recordings[i + 1].end}
              </button>
            ) : (
              ""
            )}
            {i + 2 < props.recordings.length ? (
              <button
                onClick={() => props.onSelect(props.recordings[i + 2])}
                className={props.selectedIndex > i + 2 ? "done" : ""}
              >
                Шлоки {props.recordings[i + 2].start} —{" "}
                {props.recordings[i + 2].end}
              </button>
            ) : (
              ""
            )}
            {i + 3 < props.recordings.length ? (
              <button
                onClick={() => props.onSelect(props.recordings[i + 3])}
                className={props.selectedIndex > i + 3 ? "done" : ""}
              >
                Шлоки {props.recordings[i + 3].start} —{" "}
                {props.recordings[i + 3].end}
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default TableOfContent;
