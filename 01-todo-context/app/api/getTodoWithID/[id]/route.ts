import { TodoSchema } from "@/models/todo.model";

export async function GET(
  request: Request,
  searchParams: { params: { id: string } }
) {
  const slug = searchParams.params.id;

  const getTodo = await TodoSchema.findOne({ id: slug });

  return Response.json({ getTodo });
}
