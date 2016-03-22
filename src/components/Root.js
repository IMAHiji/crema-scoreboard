import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';

const store = configureStore();

import '../styles/foundation.scss';
import 'script!jquery'
import 'script!foundation-sites'




class Root extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return this.props.children;
    }

    componentDidMount(){
        $(document).foundation()
    }
}

export default Root;