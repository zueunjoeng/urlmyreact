import './App.css';
import datainfo from './data/db.json';
import Mainbanner from './Banner';
import Text from "./text"


function App() {
  return (
    <div>
      <Text dbinfo = {datainfo["gnb"][0]}></Text>
      <Text dbinfo = {datainfo["gnb"][1]}></Text>
      <Text dbinfo = {datainfo["gnb"][2]}></Text>
    </div>
  );
}
//재사용이 편리하다. 정확한 집으로 갈 수 있도록
//dbinfo는 변수여서 내가 마음대로 지어도 된다. 
//["gnb"][]에 text.js에서 적은 props가 정확히 갈 수 있도록
//atext가 ["gnb"][i] 순서대로 맞게 갈 수 있도록.

export default App;
