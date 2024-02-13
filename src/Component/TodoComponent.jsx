import { useEffect, useRef, useState } from "react";

const TodoSection = () => {
  //const initialTodos = JSON.parse(localStorage.getItem("todoss"));
  const [todos, setTodos] = useState([]);
  const todoText = useRef();
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const newVlaue = todoText.current.value;
    if (newVlaue === "") {
      return;
    }
    const NewTodo = [...todos, newVlaue];
    localStorage.setItem("todos", JSON.stringify([...todos, NewTodo]));
    setTodos(NewTodo);
    todoText.current.value = "";
  };

  const getDataFromLocalStorage = () => {
    const getData = localStorage.getItem("todos");

    if (getData && getData.length > 0) {
      setTodos(JSON.parse(getData));
    }
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input type="text" ref={todoText} />
        <input type="button" value="Add" />
        {todos.map((el) => {
          return (
            <>
              <div> {el}</div>
            </>
          );
        })}
      </form>
    </>
  );
};
export default TodoSection;
