import React, {Component} from 'react';
import axios from 'axios';
import {Col, OverlayTrigger, Tooltip, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
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
        const validVarianceTooltip = (
            <Tooltip id="tooltip1">
                Valid variables are 1 - 200
            </Tooltip>
        );
        return (
            <div>
                <Form horizontal>
                    <FormGroup controlId="form1">
                        <Col componentClass={ControlLabel} md={3} >
                            Current loaded variable : 
                        </Col>
                        <Col md={2}>
                            <FormControl disabled type="text" value={this.state.reqVarId} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="form2">
                        <Col componentClass={ControlLabel} md={3}>
                            Requested variable number :
                        </Col>
                        <Col md={2}>
                            <OverlayTrigger placement="bottom" overlay={validVarianceTooltip}>
                                <FormControl type="text" value={this.state.reqVariable} onChange={this.onChangeVariable} />
                            </OverlayTrigger>
                        </Col>
                        <Col md={2}>
                            <Button onClick={this.reloadComponent} bsStyle="primary">Load Variable</Button>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="form3">
                        <Col md={8}>
                            {this.drawChart()}
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
