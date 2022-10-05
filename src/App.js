import React, {useState} from 'react';
import Left from './Left' 
import Right from './Right' 

function App (){
  const [list, setList] = useState([]);

  return (
    <div>
      <Left setList = {setList} list={list} />
      <Right list={list} setList={setList} />
    </div>
  )
}

/*
  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        list: [];
      };
    }
  }
*/

export default App;
