import './App.css';
import Button from './components/Button/Button'
import Title from './components/Title/Title'

function App() {
  return (
    <div>
      <div>
        <h4>Bài 1</h4>
        <Button text="Save"/>
        <Button text="Cancel" />
        <Button text="Renting"/>
        <Button text="Buy" />
        <Button text="Set auction" />
      </div>
      <div>
        <h4>Bài 2</h4>
        <Title title="reactjs"/>
        <Title title="hơi khoai" />
        <Title title="nhưng mà sẽ cố gắng học" />
        <Title title="nổ lực để thành công" />
        <Title title="xài bootstrap trong react đc k anh nhờ" />
      </div>
      <div>
        <h4>Bài 3</h4>
        
      </div>
    </div>
  );
}

export default App;
