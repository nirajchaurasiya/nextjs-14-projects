import { TodoSchema } from "@/models/todo.model";

export async function POST(request: Request) {
  const res = await request.json();
  console.log(res);
  const todo = new TodoSchema(res);
  await todo.save();
  const allTodo = await TodoSchema.find();
  return Response.json({ allTodo });
}
