import { TodoSchema } from "@/models/todo.model";

export async function PATCH(
  request: Request,
  searchParams: { params: { id: string } }
) {
  const slug = searchParams.params.id;
  const { title, desc } = await request.json();
  await TodoSchema.findOneAndUpdate(
    { id: slug },
    {
      $set: {
        title,
        desc,
      },
    },
    {
      new: true,
    }
  );
  let allTodo = await TodoSchema.find();
  return Response.json({
    status: 1,
    data: allTodo,
    msg: "Todo updated success!",
  });
}
