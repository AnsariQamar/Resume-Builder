const initialState={
    name:'',
    email:'',
    address:''

}
const ChangeName=(state=initialState,action)=>{
    if(action.type=='form'){
        console.log(action.payload);
        return {
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            address:action.payload.address
        }
    }
    else{
        return state;
    }
}
export default ChangeName; 