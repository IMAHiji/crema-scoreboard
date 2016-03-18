import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';

const store = configureStore();

export default class Root extends Component {
    render(){
        return this.props.children;
    }
}
