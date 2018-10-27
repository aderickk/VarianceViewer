import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
export default class VarViewer extends Component{
    constructor(props){
        super(props);
        this.state = {allVariances: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4200/variances')
            .then(response => {
                this.setState({ allVariances : response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    tabRow(){
        return this.state.allVariances.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
    }
    render(){
        return (
            <div style={{marginTop: 30}} className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}