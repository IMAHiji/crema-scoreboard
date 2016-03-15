import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {loadSlackletes} from '../../actions/ScoreboardActions';



export const Scoreboard =  React.createClass({
    listSlackletes:function(){
        const slackletes = this.props.slackletes.data
        console.log('Props slackletes', slackletes);
        return slackletes;
    },
    mixins:[PureRenderMixin],
    render:function(){
        return (
            <div className="scoreboardWrapper">
                <h1>Hello I am scoreboard</h1>
                    {this.listSlackletes().map(entry =>
                    <li key={entry._id}>{entry.name}: {entry.score}</li> )}

            </div>
        )
    }



});


const mapStateToProps = (state) => {


    return {
        slackletes:loadSlackletes(state.slackletes)
    }
}

export const ScoreBoardContainer = connect(mapStateToProps)(Scoreboard);


