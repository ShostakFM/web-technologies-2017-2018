import React from 'react'

import Tabs from './TabsConteiner'
import {connect} from 'react-redux';
import MainInfo from '../components/mainInfo'
import { getUser} from '../actions/actionBio'

class ShostakMarina extends React.Component{

    render(){
        if(!this.props.store.bioData.start){
                return(
                    <div>
                        <div className="inp">
                            <input id="pole" type="text"/>
                            <input id="button" type="submit" onClick={this.props.setData}/>
                        </div>
                        <div className='userInfo'>
                            <MainInfo bio={this.props.store.bioData}/>
                            <Tabs />
                        </div>
                    </div>
                )
        }
        else {
            return (
                <div>
                    <div className="inp">
                        <input id="pole" type="text"/>
                        <input id="button" type="submit" onClick={this.props.setData}/>
                    </div>
                </div>

            )
        }
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        setData : () => {dispatch(getUser())},
    })
)(ShostakMarina)