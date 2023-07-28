#### use state
const [initialData,setInitialData ]= usestate(initialData) ;

use state takes one argument: initial data
returns array with two values : initialData,setInitialData 

### use effect
useEffect(()=>{

},[])
array dependency : [] ,if defined  means run only once


### use reducer
const [ state , dispatch] = useReducer( reducer ,initialData );

use reducer takes two arguments: reducer function, initial data
returns array of two values : state , dispatch
dispatch is used to trigger reducer function
by reducer we update data 
 reducer function takes parameters : state , action
 state refers to initialdata
 action refers to dispatch value => type