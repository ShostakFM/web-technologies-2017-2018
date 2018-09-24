import React from "react";
function DataList(props) {
    let e = props.tab.tabReducer.currentTab;
    if(e === 'first')
        return( <div id='edit_text' >
            {props.tab.bioData.followers.map((e,i) => <li key={i}>{e}</li>)}
                </div>);
    if(e === 'second')
        return( <div id='edit_text' >
            {props.tab.bioData.repos.map((e,i) => <li key={i}>{e}</li>)}
                </div>);
    else return<div></div>
}
export default DataList