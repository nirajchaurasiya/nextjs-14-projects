import mongoose, { Schema, Document } from "mongoose";

interface ITodo extends Document {
  id: string;
  title: string;
  desc: string;
  date: string;
}

const Todo: Schema = new Schema(
  {
    id: {
      type: String,
      default: Date.now(),
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// mongoose.models = {};
export const TodoSchema =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", Todo);
