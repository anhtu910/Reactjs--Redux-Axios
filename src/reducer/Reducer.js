import { combineReducers } from "redux"
import { ADD_USER,UPDATE_USER,DELETE_USER,CHECKLOGIN_USER,CHECKLOGOUT_USER,CHECKADDORUPDATE,GET} from "../action/constant"
const initState={
    User:'',
    CheckAddOrUpdate:'',
    ListUser:[],
   

}
const ReducerUser=(state=initState,action)=>{
    let newState={}
    switch (action.type){
        case CHECKADDORUPDATE:
            newState= {
                ...state,
                CheckAddOrUpdate:action.data
               
            }

            break
        case CHECKLOGIN_USER:
        
               newState= {
                   ...state,
                  User:action.data
                  
               }
            
            break
        case CHECKLOGOUT_USER:
            
            newState= {
                ...state,
               User:action.data
               
            }
            break
        case GET:
            
            {
                newState= {
                    ...state,
                   ListUser:action.data
                   
                }

                break
            }
        case ADD_USER:
            {
                document.getElementById('CreateUser').style.display = "none"
                document.getElementById('Formadd').reset();

                newState= {
                    ...state,
                    ListUser:[...state.ListUser,action.data],
                    
                }
                break
            }
        case UPDATE_USER:
            {
               
                break
            }
        case DELETE_USER:
            {
                newState= {
                    ...state,
                    ListUser:[...state.ListUser.filter((curent)=>{
                        return curent.ID!==action.data
                    })]
                }

                break
            }
        default:
            return state
    }
    return newState
   
}
const rootReducer=combineReducers({
    hoby:ReducerUser,
})
export default rootReducer