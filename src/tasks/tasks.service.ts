import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskmodel: Model<Task>) {}

  findAll() {
    return this.taskmodel.find();
  }

  createTask(createTask: CreateTaskDto) {
    const newTask = new this.taskmodel(createTask);
    return newTask.save();
  }

  async findTask(id: string) {
    return this.taskmodel.findById(id);
  }

  async deleteTask(id: string) {
    return this.taskmodel.findByIdAndDelete(id);
  }

  async updateTask(id: string, task: UpdateTaskDto) {
    return this.taskmodel.findByIdAndUpdate(id, task);
  }
}
