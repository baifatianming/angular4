import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';  //引入input

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // 通过input 接受父组件传过来msg的值
  @Input() msg : string;

  //EventEmintter实现子组件给父组件传值
  @Output() toParent= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  requestData() {
    //调用父组件的方法请求数据
    this.toParent.emit('这是子组件的值');
  }

}
