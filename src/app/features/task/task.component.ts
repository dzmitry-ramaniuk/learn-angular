import { Component, Input } from "@angular/core";
import { Task } from "../../shared/models/task.model";


@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
}) 
export class TaskView{
    @Input() task!: Task;
};