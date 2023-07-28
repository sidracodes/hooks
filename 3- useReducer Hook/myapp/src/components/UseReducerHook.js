import { useReducer } from "react"

const reducer=( state , action)=>{
if( action.type === "INCR"){
  state=state+1;
}
if( state>0 && action.type === "DECR"){
  state=state-1;
}
return state;
}

const UseReducerHook = () => {
  const [ state, dispatch ]=useReducer( reducer , 0);
  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div
          className="button2"
          onClick={()=> dispatch({type:"INCR"})}
         
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div
          className="button2"
          onClick={()=>dispatch({type:"DECR"})}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div> 
    </>
  )
}

export default UseReducerHook
