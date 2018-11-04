import React, {Component} from 'react';


class SamplesTableRow extends Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.seq}
                </td>
                <td>
                    {this.props.obj.data.var001}
                </td>
                <td>
                    {this.props.obj.data.var050}
                </td>
                <td>
                    {this.props.obj.data.var100}
                </td>
                <td>
                    {this.props.obj.data.var150}
                </td>
                <td>
                    {this.props.obj.data.var200}
                </td>
            </tr>
        )
    }
}

export default SamplesTableRow;

