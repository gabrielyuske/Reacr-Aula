import React from 'react';

// Classes
export default  class extends React.Component{
    constructor() {
        super()
    }
    render(){
        return(
            <div>
                <label>
                    Peso
                    <input type="text" value={this.props.p} onChange={(e)=>{this.props.sp(e.target.value)}}/>
                </label>
            </div>
        )
    }
}