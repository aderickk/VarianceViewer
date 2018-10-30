import React, {Component} from 'react';
import axios from 'axios';
import LineChart from 'react-linechart';

export default class VarViewer extends Component{
    constructor(props){
        super(props);
        this.onChangeVariable = this.onChangeVariable.bind(this);
        this.reloadComponent = this.reloadComponent.bind(this);
        this.state = {
            allVariances: [],
            reqVariable: '',
            reqVarId: ''
        };
    }
    onChangeVariable(e){
        var newId = "var";
        for (var i = e.target.value.length; i < 3; i++){
            newId += '0';
        }
        newId += e.target.value;

        this.setState({
            reqVariable: e.target.value,
            reqVarId: newId
        });
    }
    reloadComponent(){
        axios.get('http://localhost:4200/variances/single/' + this.state.reqVarId)
            .then(response => {
                this.setState({ allVariances : response.data });
            })
            .catch(function (error){
                console.log(error);
            });
    }

    drawChart(){
        var filteredVariances = this.state.allVariances.filter(
            object => object[Object.keys(object)[0]] != null
        );

        var rawPoints = filteredVariances.map(
            (object, i) => ({ 'x': i, 'y': object[Object.keys(object)[0]]})
        );

        var chartData = [
            {
                color: "red",
                points: rawPoints
            }
        ]

        var yPoints = filteredVariances.map(
            object => object[Object.keys(object)[0]]
        );
        var yPointsMin = Math.min.apply(Math, yPoints) - 1;
        var yPointsMax = Math.max.apply(Math, yPoints) + 1;

        var newChart = (
            <LineChart data= {chartData}
                xLabel="sample number" yLabel="value"
                hidePoints="true"
                yMin={yPointsMin} yMax={yPointsMax} 
            />
        );
        return newChart;
    }
    render(){
        return (
            <div>
                <div>
                    <label>Variable being loaded: {this.state.reqVarId}</label>
                    <input type="text" className="form-control" value={this.state.reqVariable} onChange={this.onChangeVariable}></input>
                    <button onClick={this.reloadComponent}>Load Variable</button>
                </div>
                {this.drawChart()}
            </div>
        );
    }
}

