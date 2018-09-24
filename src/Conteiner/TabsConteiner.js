import React from "react";
import {connect} from 'react-redux';
import { setButton, setContent} from '../actions/actionTabs'
import DataList from '../components/underButtonInfo'

class Tabs extends React.Component{
    render(){
        return(
            <div className="part_two">
                <div className="tab_head">
                    <button value="first" onClick={this.props.setButton}>Followers</button>
                    <button value="second" onClick={this.props.setButton}>Repositories</button>
                </div>
                <DataList Click={this.props.setContent}
                          tab={this.props.store}/>
            </div>

        )
    }
}
export default connect(
    state => ({
        store : state,
    }
    ),
    dispatch => ({
        setButton :  (e) => {
            dispatch(setButton(e))
        },
        setContent :  (e) => {
            dispatch(setContent(e))
        }
    })
)(Tabs)