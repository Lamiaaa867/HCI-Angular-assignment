import { Component , OnInit} from '@angular/core';
import { Task } from './tesk/Task';
import { CommonModule, DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule , ReactiveFormsModule , CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
  providers: [DatePipe]
})
export class TodolistComponent implements OnInit{
  taskArray: Task[] = [];
 

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.taskArray.push({
      name: form.controls['taskName'].value,
      description: form.controls['taskDescription'].value,
      date: this.datePipe.transform(
        new Date(form.controls['taskDate'].value),
        'yyyy-MM-dd'
      ),
      isCompleted: false,
      isEditable: false,
    });

    form.reset();

    console.log(this.taskArray);
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }

  onEdit(index: number) {
    this.taskArray[index].isEditable = true;
  }

  onSave(
    index: number,
    newtask: string,
    taskDescription: string,
    taskDate: string
  ) {
    this.taskArray[index].name = newtask;
    this.taskArray[index].description = taskDescription;
    this.taskArray[index].date = this.datePipe.transform(
      new Date(taskDate),
      'yyyy-MM-dd'
    );
    this.taskArray[index].isEditable = false;
  }
}
