// interface Todo {
//   text: string;
//   complete: boolean;
// }

interface ITodo {
  _id: string;
  name: string;
  description: string;
  status: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface TodoProps {
  todo: ITodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  addTodo: AddTodo;
}

type ApiDataType = {
  message: string;
  status: boolean;
  todos: ITodo[];
  todo?: ITodo;
}

type ToggleTodo = (selectedTodo: ITodo) => void;

type AddTodo = (e: React.FormEvent, formData: ITodo | any) => void;

type RemoveTodo = (id: string) => void;