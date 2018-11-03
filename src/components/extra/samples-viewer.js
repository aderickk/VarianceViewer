import React, {Component} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import SamplesTable from './SamplesTable';

export default class SampleViewer extends Component{
    constructor(props){
        super(props);
        this.doLoadSamples = this.doLoadSamples.bind(this);
        this.state = {allVariances: [], isLoading: false};
    }
    doLoadSamples(){
        this.setState({isLoading: true});
        axios.get('http://localhost:4200/variances')
            .then(response => {
                this.setState({ allVariances : response.data, isLoading: false});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    loadSamplesTable(){
        return (<SamplesTable obj={this.state.allVariances} />);
    }
    render(){
        return (
            <div style={{marginTop: 30}} className="container">
                <div style={{textAlign: "center"}}>
                    <Button bsStyle="info" onClick={this.doLoadSamples} 
                        disabled = {this.state.isLoading}>
                        {this.state.isLoading ? "Loading..." : "Load All Samples"}
                    </Button>
                </div>
                <div style={{marginTop: 20}}>
                    {this.loadSamplesTable()}
                </div>
            </div>
        )
    }
}