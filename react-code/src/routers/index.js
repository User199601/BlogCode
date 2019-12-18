/*
 * @create routers/index.js
 * gounp by routers
 * export all routers   
*/


import {
    Article,
    About,
    UpdateLog,
    Connect,
    ArticleDetail,
    NotFound
}from '../views'


export const mainRouter =  [{
    component:About,
    pathname:'/about' 
 },{
    component:UpdateLog,
    pathname:'/updateLog' 
 },{
    component:NotFound,
    pathname:'/404' 
 },{
    component:Connect,
    pathname:'/connect' 
 },{
    component:Article,
    pathname:'/article',
    exact:true  
 }]

 export const articleDetail =[{
    component:ArticleDetail,
    pathname:'/article/articleDetail'   
 }]