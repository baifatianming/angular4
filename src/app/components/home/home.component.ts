import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = "这是一个title";  //1.定义属性的方法

  public msg: any;         // 公有的

  public username: any; 

  public flag: any;

  public search: any;

  protected val: string;       //私有的，子类可以引用

  private data: any;       // typescript定义属性的方法

  constructor() {
    this.msg = "这是一个首页组件";
    this.username = "张三";
    this.flag = true;
    this.search = "搜索后的值";
   }

  ngOnInit() {
  }

  getMsg() {
    //获取属性值
    console.log(this.msg);
  }

  setName() {
    //改变username的值
    this.username = "李四——————改变后的值"
  }

  keyUp(e) {
    console.log(e);
    if(e.keyCode == 13) {
      console.log('按了回车键');
    }
  }

  run(e) {
    console.log(e);
  }

  getSearch() {
    console.log(this.search);
  }
}
