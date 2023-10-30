import axios from "axios";
import { loginFail, loginStart, loginSuccess } from "./UserRedux";

export const Loginapi=async(dispatch,user)=>{
        
        dispatch(loginStart());
        try{
            const res=await axios.post("http://localhost:5000/api/Auth/Login",user);
            console.log("apidata==========",res.status);
            if(res.status === 201){
                const err ="invalidaUser"
                return err
            }

           else if(res.status === 200){
            dispatch(loginSuccess(res.data));
            const code="valid"
            return code;
            }
            
        }
        catch(err){
            dispatch(loginFail());
            return false;
                
        }

    return false
}
export const Registerapi=async(dispatch,user)=>{
   
    console.log("Data of User in Api",user);
    try{
        const res=await axios.post("http://localhost:5000/api/Auth/Register",user);
     
        console.log("Response From server", res);
        console.log("Response------->", res.data.message);


        
       if(res.status === 201 )
        {
            alert("Registered Successfully");
          return true;
            
        }
        else  if(res.data.message === "user present")
        {
            alert("Username is already Registered ");
            return false;
        }
        else  if(res.data.message === "email present")
        {
            alert("Email is already Registered ");
            return false;
        }
        else{
            alert("There is an issue with the server")
        }
        
    }
    
    catch(err){
     console.log(err);
            
    }


}
export const Addproductsapi=async(dispatch,product)=>{
        
   
    try{
        
        console.log("data in api",product);
       
        const res=await axios.post("http://localhost:5000/api/product/new",product);
        console.log(res.data);
        
    }
    catch(err){
     console.log(err);
            
    }

 return false;
}