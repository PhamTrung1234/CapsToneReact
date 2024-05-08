import { Route } from "react-router-dom"
import AdminPages from "../booksmoviewebsite/AdminPage"
import HomePage from "../booksmoviewebsite/HomePages"
import HomeTemplate from "../booksmoviewebsite/HomePages/HomeTemplate"
import ListMovie from "../booksmoviewebsite/HomePages/ListMovie"
import RapChieu from "../booksmoviewebsite/HomePages/RapChieu"
import ThanhVien from "../booksmoviewebsite/HomePages/ThanhVien"

import { NavLink } from "react-router-dom"
import Login from "../booksmoviewebsite/AuthenPages/Login"
import Singin from "../booksmoviewebsite/AuthenPages/Singin"



type Route1 = {
    path : string,
    element : any,
    nested?: Route1[],
}

type NavBar2 = {
     to:string,
     element:string,
}

const navbar: NavBar2[]=[
      {to:"/",element:"Trang chủ"},
      {to:"/phim",element:"Phim"},
      {to:"/rap",element:"Rạp Chiếu"},
      {to:"/thanhvien",element:"Thành Viên"}
]
const route : Route1[]= [
     {path:"",element:HomePage,nested:[
         {path:"",element:HomeTemplate},
         {path:"phim",element:ListMovie},
         {path:"rap",element:RapChieu},
         {path:"thanhvien",element:ThanhVien}
     ]},
     {path:"admin",element:AdminPages},
     {path:"login",element:Login},
     {path:"singin",element:Singin}
]


export const renderRoute = ()=>{
     return route.map(item=>{
          if(item.nested){
             return(
               <Route path={item.path} element={<item.element/>} key={item.path}>
                   {item.nested.map((element,index)=>{
                      return <Route path={element.path} element={<element.element/>} key={index}/>
                   })}
             </Route>
             )
          }else{
            return <Route key={item.path} path={item.path} element={<item.element/>}/>
          }
     })
}

export const renderNavBar = ()=>{
     return navbar.map(item=>{
          return (
               <li key={item.to} className="nav-item ">
              <NavLink className={({isActive})=>(isActive ? "nav-link my_active":"nav-link")} to={item.to}>
                {item.element}
              </NavLink>
            </li>
          )
     })
}