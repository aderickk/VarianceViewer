import React, {Component} from 'react';
import axios from 'axios';
import {Button, Table} from 'react-bootstrap';
import SamplesTableRow from './SamplesTableRow';

export default class SampleViewer extends Component{
    constructor(props){
        super(props);
        this.doLoadSamples = this.doLoadSamples.bind(this);
        this.state = {allVariances: [], isLoading: false};
    }
    tabRow(){
        var result = this.state.allVariances.map(
            (object, i) => <SamplesTableRow key={i+1} 
                                obj={{"seq": i+1, "data": object}} />
        );

        return result;
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
                    <Table responsive bordered striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>var001</th>
                                <th>var050</th>
                                <th>var100</th>
                                <th>var150</th>
                                <th>var200</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}