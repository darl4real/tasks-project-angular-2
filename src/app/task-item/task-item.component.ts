import { Component, Input, OnChanges } from '@angular/core';

import {DataService} from '../data.service';
import {Task} from '../task.interface';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnChanges {
  @Input() data: Task;
  private dataService;
  private editing = false;
  constructor(dataServ: DataService) {
    this.dataService = dataServ;
  }

  ngOnChanges(changes) {
    // console.log(changes)
  }

  onRemoveTask() {
    this.dataService.removeTask(this.data);
  }
  onCompleted() {
    this.dataService.save();
  }
  onEdit() {
    this.editing = true;
  }
  onSave() {
    this.editing = false;
    this.dataService.save();
  }
}
