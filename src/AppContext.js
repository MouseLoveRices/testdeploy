import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext({})
export const AppProvider = ({children})=>{
    const[products,setProducts]= useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetchProducts();
    },[])
    const url="https://66a077917053166bcabb8106.mockapi.io/student"
    const fetchProducts =()=>{
      axios.get(url)
      .then(function(res){
          setProducts(res.data)
      })
      .catch(function(error){
        console.log(error)
      })
    }
    const addCart=(id)=>{
        const res = products.find(item=>item.id===id)
        const index = cart.findIndex(item=>item.id===id)
        console.log(index)
        if(index>=0){// truong hop id nay (san pham nay) da co trong gio hang
          let newCart=cart // vi cart ban dau la const ne dat bien moi newCard de thay doi du lieu 
          newCart[index].quantity++;
          setCart(newCart)
        }else{
          setCart([...cart,{...res,quantity:1}])// dat so luong san pham moi (khong co san pham nao trung trong gior hang) =1
        }  
    }
    const deleteCart=(id)=>{
      setCart(cart.filter(item=>item.id!==id))
    }
    // const updateById=(id,flag)=>{
    //   let index = cart.findIndex(item=>item.id===id)
    //   let newCard = cart
    //   if(flag === 0){
    //     if(newCard[index].quantity>1){
    //       newCard[index].quantity--
    //     }
    //   }
    //     else{
    //       newCard[index].quantity++
    //     }
    //     console.log(newCard)
    //     setCart(newCard)
      
    // } => cach 1
    //>cach 2:
    const updateById = (id,num)=>{
      const res= cart.map((item)=>(item.id==id& !(num==-1&& item["quantity"]==1))?{...item,quantity:item["quantity"]+num}:item)
      setCart(res)
    }
    return <AppContext.Provider value={{cart,setCart,addCart,deleteCart,updateById}}>{children}</AppContext.Provider>
} 