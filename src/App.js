import { useState } from "react";
import axios from "axios";
import'./App.css';
import Header from './Component/Header/Header';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Footer from './Component/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';
const App = () => {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
    // console.log(data);
  };
    
  return (
      <BrowserRouter>
      <div className="App" style={{backgroundImage:"url(./a.png)"}}>
      <Header/>
      <Switch>
        <Route exact path='/'><Home   name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
              /></Route>
        <Route exact path='/quiz'><Quiz
        
        name={name}
        questions={questions}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions}
        /></Route>
        <Route exact path='/result'><Result  name={name} score={score}/></Route>
      </Switch>
    
  </div>;
  <Footer/>
      
      </BrowserRouter>
  );
};

export default App;
