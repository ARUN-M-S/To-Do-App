import "./app.css";
import { useState } from "react";
// import Employee from "./Employee";
// import Couter from "./Counter"

// import Headersss from './Com/Hello';
function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  // const addCount=()=>{
  //   setCount(count+1);
  //   console.log(count);
  // }
  // let emp =[{
  //  name :'arun',
  //   age:25
  // },{
  //   name :'arunms',
  //    age:24
  //  },{
  //   name :'arunmsd',
  //    age:23
  //  }]
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.value);
                    console.log(obj);
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    setToDos(
                      toDos.filter((obj3) => {
                        return obj3.id !== obj.id;
                      })
                    );
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status) {
            return <h1>{obj.text}</h1>;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
