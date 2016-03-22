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
                <div className="small-12 large-expand columns">
                <h1>Scoreboard Module Render</h1>
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
                    <ul className="">
                        {slackletes.map((slacklete)=>
                            <li key={slacklete._id}><span>{slacklete.name}</span><span> Score: {slacklete.score} </span></li>
                        )}
                        <button className="success button">I am a button</button>
                    </ul>

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


