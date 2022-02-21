const initialState=[];

const ChangeSkills=(state=initialState,action)=>{
    if(action.type==='skillform'){
        return action.payload;
    }
    else{
        return state;
    }
}
export default ChangeSkills;