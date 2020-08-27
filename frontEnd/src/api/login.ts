import {resquest} from '../http'
import {menuAccessType,pagationType} from '@/interfaces'
type loginType={
    email:string;
    password:string
}
export  const login=<T extends loginType>(data:T):Promise<any>=>resquest('post',`/login`,data);  
export  const xlsxFileDown=<T>(data?:T):Promise<any>=>resquest('get',`/fileDown`,data);  
export  const getUserList=<T>(data?:T):Promise<any>=>resquest('get',`/user`,data,'blob');  
export  const getAccessMenuList=<T>(data?:T):Promise<responseData>=>resquest('get',`/menu/getCurrentUserMenuAuthTree`);  
export  const getAccessMenu=<T extends pagationType>(data:T):Promise<responseData>=>resquest('get',`/menu/getCurrentList`,data);  
export  const getAccesstOption=(data:Partial<menuAccessType>):Promise<responseData>=>resquest('post',`/menu/getCurrentOption`,data);  
export  const delteAccesstOption=(data:Pick<menuAccessType,'id'>):Promise<responseData>=>resquest('post',`/menu/delete`,data);  
