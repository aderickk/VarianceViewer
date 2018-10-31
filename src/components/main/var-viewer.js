import React, {Component} from 'react';
import axios from 'axios';
import {Grid, Row, Col, OverlayTrigger, Tooltip} from 'react-bootstrap';
import VarChart from './VarChart'

export default class VarViewer extends Component{
    constructor(props){
        super(props);
        this.onChangeVariable = this.onChangeVariable.bind(this);
        this.reloadComponent = this.reloadComponent.bind(this);
        this.state = {
            allVariances: [],
            reqVariable: '',
            reqVarId: '---'
        };
    }
    onChangeVariable(e){
        this.setState({
            reqVariable: e.target.value
        });
    }
    getValidVariableId(){
        var newId = "var";
        for (var i = this.state.reqVariable.length; i < 3; i++){
            newId += '0';
        }
        newId += this.state.reqVariable;
        return newId;
    }
    reloadComponent(){
        var requestId = this.getValidVariableId();
        axios.get('http://localhost:4200/variances/single/' + requestId)
            .then(response => {
                if (response.data.length > 0){
                    var nonNullVariances = response.data.filter(
                        object => object[Object.keys(object)[0]] != null
                    );

                    this.setState({
                        allVariances : nonNullVariances,
                        reqVarId: requestId
                    });
                } else{
                    this.setState({
                        allVariances : [],
                        reqVarId: "---"
                    });
                }
            })
            .catch(function (error){
                console.log(error);
            });
    }
    drawChart(){
        var chartObj = {
            varianceData: this.state.allVariances,
            variableName: this.state.reqVarId
        }
        return (<VarChart obj={chartObj}></VarChart>)
    }
    render(){
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={4}>
                            <label>Current loaded variable : {this.state.reqVarId}</label>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={3}>
                            <label>Requested variable number : </label>
                        </Col>
                        <Col md={2} style={{"textAlign":"left"}}> 
                                <input type="text" className="form-control" value={this.state.reqVariable} onChange={this.onChangeVariable}></input>
                        </Col>
                        <Col md={2}>
                            <button onClick={this.reloadComponent}>Load Variable</button>
                        </Col>
                    </Row>
                    <Row>
                        {this.drawChart()}
                    </Row>
                </Grid>
            </div>
        );
    }
}
