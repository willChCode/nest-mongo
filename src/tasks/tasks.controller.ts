import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findTask() {
    // return this.taskService.findTask();
  }

  @Post()
  createTask(@Body() body: CreateTaskDto) {
    console.log(body);
    return this.taskService.createTask(body);
  }

  @Delete(':id')
  deleteTask() {
    return 'task deleted';
  }

  @Put(':id')
  updateTask() {
    return 'task updated';
  }
}
