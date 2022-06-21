import './App.css';
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import ContentSection from './components/ContentSection/ContentSection';

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
        <Title title="nhưng mà sẽ cố gắng học để thành công" />
        <Title title="framework là gì z anh .-." />
        <Title title="bootstrap có quan trọng k anh nhỉ, tại thấy mindX k dạy qua mà chỉ giới thiệu" />
      </div>
      <div>
        <h4>Bài 3</h4>
        <ContentSection 
          title="A Simple Component" 
          text="React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props."
          imgSrc="./assets/images/simpleCompo.png"
        />
        <ContentSection 
          title="A Stateful Component"
          text="In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."
          imgSrc="https://patterns.dev/img/reactjs/react-logo@3x.svg"
        />
        <ContentSection 
          title="A Application"
          text="Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."
          imgSrc="https://resources.stdio.vn/content/article/gioi-thieu-va-cai-dat-node-js/thumbnail-hd/blob-1599795169826@1280x720.jpg"
        />
        <ContentSection 
          title="A Component Using External Plugins"
          text="React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time."
          imgSrc="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png"
        />
        <ContentSection 
          title="Góc thắc mắc"
          text="Làm sao để lấy hình ảnh từ folder khác z anh ui. Ví dụ trong components em có 1 folder là ContentSection, trong contentsection có folder assets và ảnh ở trong assets/images thì lấy ảnh ra như nào anh nhỉ. Ở section 1 em bị lỗi ấy"
          imgSrc="https://mathx.vn/uploads/mxdovui/2018/11/24/sspoy.jpg"
        />
      </div>
    </div>
  );
}

export default App;
