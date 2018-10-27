import React, {Component} from 'react';

class TableRow extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.var001}
                </td>
                <td>
                    {this.props.obj.var100}
                </td>
                <td>
                    {this.props.obj.var200}
                </td>
            </tr>
        );
    }
}

export default TableRow;