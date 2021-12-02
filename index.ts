import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios.get(URL).then((response) => {
  const todo = response.data as Todo;

  const id: number = todo.id;
  const title: string = todo.title;
  const completed: boolean = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with id: ${id}
    Has a title of: ${title}
    Is it finished?: ${completed}
  `);
};
