import React, {Component} from 'react';
import axios from 'axios';
import LineChart from 'react-linechart';

export default class VarViewer extends Component{
    constructor(props){
        super(props);
        this.state = {allVariances: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4200/variances/single/')
            .then(response => {
                this.setState({ allVariances : response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    reloadComponent(){
        var result = this.state.allVariances.map((object, i) => 
            <p key={i}>{object.var001}</p>
        );

        return result;
    }

    drawChart(){
        var rawPoints = this.state.allVariances.map(
            (object, i) => ({ 'x': i, 'y': object.var001 })
        );
        
        var chartData = [
            {
                color: "red",
                points: rawPoints
            }
        ]
        
        var newChart = (
            <LineChart data= {chartData}
                xLabel="sample number" yLabel="value"
                yMin={-3} yMax={3} hidePoints="true"
            />
        );
        return newChart;
    }
    render(){
        return (
            <div>
                <h2>I guess this works</h2>
                {/* {this.reloadComponent()} */}
                {this.drawChart()}
            </div>
        );
    }
}

