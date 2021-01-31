import "./App.css";



import fetchDataFromDirectus from "./data/directus.js"
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
  const [recordings, setRecordings] = React.useState(null)
  React.useEffect(() =>{
    console.log('Fetching data from Directus...')
    fetchDataFromDirectus().then(result => {
      setRecordings(result.data)
      if(!selectedAudio){
        setSelectedAudio(...recordings[0])
      }
    })
  })

  const [selectedAudio, setSelectedAudio] = useLocalStorageState('currentAudio', {index:1})

  function findAudioIndex(recording){
    return recordings.findIndex( audio => audio.start === recording.start && audio.end === recording.end && audio.filename === recording.filename)
  }

  function selectAudio(data){
    setSelectedAudio({index:findAudioIndex(data) + 1, ...data})
  }

  function findPrevious(recording){
    const nextAudio = findAudioIndex(recording)
    if(nextAudio - 1 >= 0){
      setSelectedAudio({index:(nextAudio - 1) + 1, ...recordings[nextAudio - 1]})
    }
  }

  function findNext(recording){
    const nextAudio = findAudioIndex(recording)
    if(nextAudio + 1 !== recordings.length){
      setSelectedAudio({index:(nextAudio + 1) + 1, ...recordings[nextAudio + 1]})
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
        <TableOfContent selectedIndex={selectedAudio.index} recordings={recordings} onSelect={selectAudio}/>
        <hr />
      </section>
      <Recording totalCount={recordings ? recordings.length : 0} {...selectedAudio} findPrevious={findPrevious} findNext={findNext}/>
    </div>
  );
}

export default App;
