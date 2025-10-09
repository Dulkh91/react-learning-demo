import style from "./profile.module.css";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import {Link} from 'react-router-dom'

const ProfilePage = () => {

  const {user,isAuthenticated, isLoading} = useAuth();
 

    if(!isAuthenticated){
    return <Navigate to={"login"}/>
  }


  return (<>
    <div className={style.profile_container}>
      {isLoading?(<p>Loading.....</p>) :(<div>
            <h1>{user.data.name}</h1>
            <p>{user.data.email}</p>
            <p>{user.data.updatedAt}</p>
          </div>)    
      }
    </div>
    <Link to={"/product"}>Product page</Link>
    
  </>)};

export default ProfilePage;

