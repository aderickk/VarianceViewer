import React, {Component} from 'react';
import LineChart from 'react-linechart';

class VarChart extends Component{
    getChartData(){
        var rawPoints = this.props.obj.varianceData.map(
            (object, i) => ({ 'x': i, 'y': object[Object.keys(object)[0]]})
        );
        var chartData = [
            {
                color: "red",
                points: rawPoints
            }
        ];

        return chartData;
    }
    getYMin(){
        var yPoints = this.props.obj.varianceData.map(
            object => object[Object.keys(object)[0]]
        );
        var yPointsMin = Math.min.apply(Math, yPoints) - 1;
        return yPointsMin
    }
    getYMax(){
        var yPoints = this.props.obj.varianceData.map(
            object => object[Object.keys(object)[0]]
        );
        var yPointsMax = Math.max.apply(Math, yPoints) + 1;
        return yPointsMax;
    }
    render(){
        return(
            <LineChart data= {this.getChartData()}
                xLabel="sample sequence" yLabel={this.props.obj.variableName + "'s value"}
                hidePoints="true"
                yMin={this.getYMin()} yMax={this.getYMax()}
            />
        );
    }
}

export default VarChart;