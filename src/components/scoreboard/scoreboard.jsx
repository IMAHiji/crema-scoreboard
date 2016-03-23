import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {loadSlackletes, fetchSlackletesifNeeded, requestSlackletes} from '../../actions/ScoreboardActions';

import SlackleteTable from './SlackleteTable.jsx'



class Scoreboard extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }
    componentDidMount(){
        this.props.dispatch(loadSlackletes());
    }

    render(){
        const {slackletes, isFetching} = this.props;
        return (
            <div className="row">
                <div className="large-expand columns">
                <h1 className="text-center">Scoreboard</h1>
                {
                    isFetching && slackletes.length === 0 &&
                    <h2>Loading...</h2>
                }
                {
                    !isFetching && slackletes.length === 0 &&
                    <h2>Empty...</h2>
                }
                {
                    !isFetching && slackletes.length>0 &&
                    
                    <SlackleteTable slackletes={slackletes} />
                    

                }
                </div>
            </div>


        )
    }

};


function mapStateToProps(state){
    return{
        isFetching:state.slackletes.isFetching,
        slackletes:state.slackletes.slackletes
    }

}

export default connect(mapStateToProps)(Scoreboard);


