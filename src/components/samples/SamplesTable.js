import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import SamplesTableRow from './SamplesTableRow';


class SamplesTable extends Component{
    loadTabRow(){
        var result = this.props.obj.map(
            (object, i) => <SamplesTableRow key={i+1} 
                                obj={{"seq": i+1, "data": object}} />
        );

        return result;
    }
    render(){
        return(
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
                        {this.loadTabRow()}
                    </tbody>
                </Table>
        );
    }
}

export default SamplesTable;