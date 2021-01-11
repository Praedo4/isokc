import "./App.css";



import Data from "./data";
import Recordings from "./components/recordings.js";
import TableOfContent from "./components/tableOfContent.js";
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
