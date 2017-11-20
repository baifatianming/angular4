import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public username: any;

  public list = [];
  constructor(private stroage:StorageService) {

    console.log(this.stroage);
   }

  ngOnInit() {
    let todolist = this.stroage.getItem('todolist');
    if (todolist) {
      this.list = todolist;
    }
  }

  addData(e) {

    
    if(e.keyCode == 13) {
      let obj = {
        username: this.username,
        status: true
      }
      let todolist = this.stroage.getItem('todolist');
  
      if(todolist) {
        todolist.push(obj);
        //如果有数据，拿到这个数据，拼接数据重新写入
        this.stroage.setItem('todolist',todolist);
        
      } else {
        //如果没有数据，直接给stroage写入数据
        let arr = [];
        arr.push(obj);
        this.stroage.setItem('todolist',arr);

      }
      this.list.push(obj);
      this.username = '';
    }
  }

  deleteData(key) {

    this.list.splice(key,1);
    this.stroage.setItem('todolist',this.list);
  }

  changeData(key) {
    this.list[key].status = !this.list[key].status;

    this.stroage.setItem('todolist',this.list);
  }

}
