import { Component, OnInit } from '@angular/core';

import { Http,Jsonp,Headers } from '@angular/http';

import { Observable } from 'rxjs';  //用rxjs必要模块
import 'rxjs/Rx';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public msg = '这是新闻组件(父组件)';

  public list = [];

  private headers = new Headers({'Content-type':'application/json'});
  constructor(
    private http:Http,
    private jsonp: Jsonp,
  ) {
   }

  ngOnInit() {
  }

  run() {
    console.log('这是父组件的方法');
  }

  getDataFromChild(childData) {
    alert(childData);
  }

  requestData(e) {
    console.log(e);
    const _that = this;
    let url = './data/mockData.json';
    this.http.get(url).map(res=>res.json()).subscribe((data) => {
      console.log(data);
      _that.list = data.result;
    }, (err) => {
      console.log(err);
    }) 

  }

  requestJsonpData() {
    let url = 'http://www.phonegap100.com/appapi.php?a=getProtalList&catid=20&page=1&callback=JSONP_CALLLBACK';

    this.jsonp.get(url).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    })
  }

  postData() {
    this.http.post(
      '',
      JSON.stringify({
        username: '张三'
      }),
      { headers : this.headers }
    ).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }

}
