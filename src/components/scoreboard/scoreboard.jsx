import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';



export const Scoreboard =  React.createClass({
    mixins:[PureRenderMixin],
    render:function(){
        return (
            <div className="scoreboardWrapper">
                <h1>Message is {this.props.message}</h1>
                <h2>Other message is: {this.props.otherMessage}</h2>
            </div>
        )
    }



});


function mapStateToProps(state) {
    console.log('State from mapStatetoProps in Scoreboard', state);
    return {

        message:state.get('message'),
        otherMessage:state.get('OtherMessage')
    }
}

export const ScoreBoardContainer = connect(mapStateToProps, actionCreators)(Scoreboard);


