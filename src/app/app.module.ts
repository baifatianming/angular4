import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  //核心模块
import { FormsModule } from '@angular/forms'; // FormsModule表单模块
import { HttpModule,JsonpModule,Headers } from '@angular/http';  //数据请求http模块

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewsComponent } from './components/news/news.component';

import { StorageService } from './service/storage.service';
import { HeaderComponent } from './components/header/header.component';

//引入服务
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';

// 引入路由模块   引入路由配置文件
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [           // 引入当前项目运行的文件，
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    TodolistComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [                //  当前项目依赖哪些模块
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule /*依赖注入了路由配置文件 */
  ],
  providers: [ StorageService ],            // 定义的服务
  bootstrap: [AppComponent] // 默认启动的组件
})
export class AppModule { }
