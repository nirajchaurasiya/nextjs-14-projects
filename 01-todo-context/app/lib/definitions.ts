export type Todos = {
  id: string;
  title: string;
  desc: string;
  date: string;
};
export type AxiosDataType = { data: { getAllTodo: Todos[] } };
export type TodoContextType = {
  todo: Array<Todos>;
  setTodo: React.Dispatch<React.SetStateAction<Array<Todos>>>;
  removeTodo: (id: string) => void;
  editTodo: (id: string, title: string, desc: string) => void;
  addTodo: (todo: Todos) => void;
};
