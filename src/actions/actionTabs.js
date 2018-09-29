import store from "../store/Store";

function setButton(e) {
    let b = e ? e.target.value : 'a',a=0;
    if(b === 'first' ){
        return {
            type : 'FIRST',
            content : a
        }
    }
    if(b === 'second'){
        return{
            type : 'SECOND',
            content : a
        }
    }
}
function setContent(e) {
           let a = e ? e.target.value : '0';
           let b = store ? store.getState().tabReducer.currentTab : '0';

            if(b === 'first' ){
                return{
                        type : 'FIRST',
                        content : a
                }
            }
            if(b === 'second'){
                return{
                            type : 'SECOND',
                            content : a
                    }
                }
                else return {
               type : 'ERROR'
            }
}

export {setButton,setContent};
