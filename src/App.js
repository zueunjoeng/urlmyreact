import './App.css';
import datainfo from './data/db.json';
import Mainbanner from './Banner';

function App() {
  return (
    <div className="App">
      <ul>
      {
        datainfo["gnb"].map((e, i)=>{
          
          return(
          <li>
            <a href={e.href}>
              {e.atext}
            </a>
          </li>)

        })
      }
      </ul>
      <Mainbanner></Mainbanner>
    </div>
  );
}

export default App;
