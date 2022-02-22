const initialState={
    document:{
        color:1,
        fontSize:1,
        fontFamily:1
    }
}

const ChangeFinal=(state=initialState,action)=>{
    if(action.type==='finalform'){
        return{
            ...state,
            document:{
                color:action.payload.color,
                fontSize:action.payload.fontSize,
                fontFamily:action.payload.fontFamily
            }
        }
    }
    else{
        return state;
    }
}
export default ChangeFinal;