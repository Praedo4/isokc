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

export default TableOfContent
