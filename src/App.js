import "./App.css";



import Data from "./data";
import Recording from "./components/recording.js";
import TableOfContent from "./components/tableOfContent.js";
import * as React from 'react'

function useLocalStorageState(
  key,
  defaultValue = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      // the try/catch is here in case the localStorage value was set before
      // we had the serialization in place (like we do in previous extra credits)
      try {
        return deserialize(valueInLocalStorage)
      } catch (error) {
        window.localStorage.removeItem(key)
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}


function App() {
  const [selectedAudio, setSelectedAudio] = useLocalStorageState('currentAudio', Data.recordings[0])

  function selectAudio(data){
    setSelectedAudio(data)
  }

  function findPrevious(recording){
    const nextAudio = Data.recordings.findIndex( audio => audio.start === recording.start && audio.end === recording.end && audio.filename === recording.filename)
    if(nextAudio - 1 !== 0){
      setSelectedAudio(Data.recordings[nextAudio - 1])
    }
  }

  function findNext(recording){
    const nextAudio = Data.recordings.findIndex( audio => audio.start === recording.start && audio.end === recording.end && audio.filename === recording.filename)
    if(nextAudio + 1 !== Data.recordings.length){
      setSelectedAudio(Data.recordings[nextAudio + 1])
    }
  }

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
      </header>

      <section>
        <p>Сайт запоминает последнюю выбранную Вами запись, так что Вы можете не
          запоминать и не записывать где именно Вы остановились.</p> 
        <h3>Список записей → → →</h3>
        <TableOfContent {...Data} onSelect={selectAudio}/>
        <hr />
      </section>
      <Recording {...selectedAudio} findPrevious={findPrevious} findNext={findNext}/>
    </div>
  );
}

export default App;
