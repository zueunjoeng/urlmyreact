import './App.css';
import styled from 'styled-components';

const Title = styled.h2`
  background-color: black;
  color: white;
  font-size: 50px;
  display : inline-block;
  padding: 10px;
`;

const Abtn = styled.a`
 border:1px solid black;
 color:black;
 display : inline-block;
 padding :10px;
 border-radius : 15px;
 text-decoration:none;
 &:hover{
  background-color: black;
  color:white;
 }
`;

function App() {
  return (
    <div className='App'>
      <Title>나는 스타일 컴포넌트입니다.</Title>
      <Title>베스트상품</Title>
      <Title>추천상품</Title>
      <h2>
        나는 타이틀입니다. 
        <Abtn href='http://www.naver.com'>더보기</Abtn>
      </h2>
      <h2>
        나는 타이틀입니다. 
        <Abtn>응모하기</Abtn>
      </h2>
    </div>
  );
}
//재사용이 편리하다. 정확한 집으로 갈 수 있도록
//dbinfo는 변수여서 내가 마음대로 지어도 된다. 
//["gnb"][]에 text.js에서 적은 props가 정확히 갈 수 있도록
//atext가 ["gnb"][i] 순서대로 맞게 갈 수 있도록.

export default App;
