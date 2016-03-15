import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';



export const Scoreboard =  React.createClass({
    listSlackletes:function(){
        console.log('Props slackletes', this.props.slackletes)
        return this.props.slackletes;
    },
    mixins:[PureRenderMixin],
    render:function(){
        return (
            <div className="scoreboardWrapper">
                <ul className="scoreboardList">
                    {this.listSlackletes().map(entry =>

                        <li key={entry}>{entry}</li>
                    )}
                </ul>
            </div>
        )
    }



});


function mapStateToProps(state) {
    console.log('State from mapStatetoProps in Scoreboard', state);
    return {

        slackletes:state.get('slackletes')

    }
}

export const ScoreBoardContainer = connect(mapStateToProps, actionCreators)(Scoreboard);


