const redux= require('redux');
const createStore=redux.createStore



//initial state
let initialstate={
    No_of_cakes:10
}


let buypaste='buycakee'

////action
const buycake=()=>{
    return{
        type:buypaste
    }   
}


//reducer
let reducer=(state=initialstate,action)=>{
    switch(action.type){
        case buypaste:return{
            ...state,
            No_of_cakes:state.No_of_cakes-1
        }
        default :{
            return state
        }
    }

}

console.log("hello")

let store=createStore(reducer);
console.log(store.getState());
let unsubscribe=store.subscribe(()=>{
    console.log('updatedstore',store.getState());
})
store.dispatch(buycake());
store.dispatch(buycake())
unsubscribe();

// console.log("hello")