import connectDB from "@/config/db";
import { TodoSchema } from "@/models/todo.model";

export async function GET(request: Request) {
  await connectDB();
  const getAllTodo = await TodoSchema.find();
  return Response.json({ getAllTodo });
}
