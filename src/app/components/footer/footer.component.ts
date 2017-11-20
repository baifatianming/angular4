import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() msg;

  @Input() run; //接受父组件传过来的run方法

  @Input() getDataFromChild;

  public msgInfo = '这是子组件的数据  '
  constructor() { }

  ngOnInit() {
  }

  sendParent() {
    this.getDataFromChild(this.msgInfo);
  }

}
