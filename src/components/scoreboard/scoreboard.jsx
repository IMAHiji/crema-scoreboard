import React, {Component, PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {loadSlackletes, fetchSlackletesifNeeded, requestSlackletes} from '../../actions/ScoreboardActions';



const Scoreboard = React.createClass( {
    mixins:[PureRenderMixin],
    componentWillMount(){

    },
    componentDidMount(){
        this.props.dispatch(loadSlackletes());
    },

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
                    <table className="hover">

                        <thead>
                        <tr><th>Slacklete</th><th>Score</th></tr>
                        </thead>
                        <tbody>
                        {slackletes.map((slacklete)=>
                            <tr key={slacklete._id}><td>{slacklete.name}</td><td>{slacklete.score} </td></tr>
                        )}
                        </tbody>
                    </table>

                }
                </div>
            </div>


        )
    }

});


function mapStateToProps(state){
    return{
        isFetching:state.slackletes.isFetching,
        slackletes:state.slackletes.slackletes
    }

}

export default connect(mapStateToProps)(Scoreboard);


