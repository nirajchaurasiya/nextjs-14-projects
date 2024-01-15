import { TodoSchema } from "@/models/todo.model";

export async function DELETE(
  request: Request,
  searchParams: { params: { id: string } }
) {
  const slug = searchParams.params.id;
  console.log(slug);
  await TodoSchema.deleteOne({ id: slug });
  const allTodo = await TodoSchema.find();
  return Response.json({ status: 1, allTodo });
}
