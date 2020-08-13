import mongoose, { Schema } from 'mongoose';

const TodoSchema: Schema = new Schema({
  id: { type: String, required: true, unique: true },
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

export interface TodoDoc extends mongoose.Document {
  id: string;
  text: string;
  completed: boolean;
}

export default mongoose.model<TodoDoc>('Todo', TodoSchema);
