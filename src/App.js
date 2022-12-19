// import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Data from './components/Data';

function App() {
  return (
    <div className="container">
      {Data.map((value)=>{
        return(
          <Cards avatar={value.avatar} name={value.name} topic={value.topic} des={value.des} date={value.date} read={value.read} category={value.category} Image={value.Image}/>
        )
      })}
    </div>
  );
}

export default App;
