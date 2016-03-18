import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';




export const SlackLete =  React.createClass({
    mixins:[PureRenderMixin],
    render:function(){
        return (
            <div className="scoreboardWrapper">
                <h1>SlackLete Says: {this.props.message}</h1>
                <h2>Awesome, here is anothermessage: {this.props.otherMessage}</h2>
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

export const SlackLeteContainer = connect(mapStateToProps, actionCreators)(SlackLete);


