import React from 'react';

class Slacklete extends React.Component{
    
    render(){
        return (
            <table className="hover">

                <thead>
                <tr><th>Slacklete</th><th>Score</th></tr>
                </thead>
                <tbody>

                {this.props.slackletes.map((slacklete)=>
                    <tr key={slacklete._id}><td>{slacklete.name}</td><td>{slacklete.score} </td></tr>
                )}
                </tbody>
            </table>
        )
    }
};




export default Slacklete;


