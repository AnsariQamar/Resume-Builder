const initialState={
        color:'1',
        fontSize:'1',
        fontFamily:'1',
        template:'1',
}

const ChangeFinal=(state=initialState,action)=>{
    if(action.type==='finalform'){
        console.log(action.payload)
        return action.payload
    }
    else{
        return state;
    }
}
export default ChangeFinal;