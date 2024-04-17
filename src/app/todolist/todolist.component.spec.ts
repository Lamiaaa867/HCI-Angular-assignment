import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from './tesk/Task';
import { TodolistComponent } from './todolist.component';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodolistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
