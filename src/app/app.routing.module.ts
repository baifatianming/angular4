// ng new 项目名称 --routing

//路由配置文件

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

    {
        path: 'header',
        component: HeaderComponent,
        children: []
    },
    {
        path: 'footer',
        component: FooterComponent,
    },
    // 默认跳转的路由
    {
        path: '',
        redirectTo: 'news',
        pathMatch: 'full'
    },
    /*匹配不到的路由加载的组件 */
    {
        path: '**',
        component: HomeComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }