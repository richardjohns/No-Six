import React from 'react'
import { connect } from 'react-redux'

export class LedgerEntryPanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contractor_name: '',
            amount: 0,
            comment:' '
        }
        this.updateDetails = this.updateDetails.bind(this)
        this.submit = this.submit.bind(this)
    }
    updateDetails(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    submit(e) {
        e.preventDefault()
        let { contractor_name , amount, comment } = this.state;

        this.props.dispatch(submitLedgerEntry({ contractor_name, amount, comment }))
    }

    render(){
        return (
        <form className="Login" onSubmit={this.submit}>
            
            <label>Contractor:
                <input type="text" name="contractor_name" onChange={this.updateDetails} />
            </label><br />
            
            <label>Amount:
                <input type="number" name="amount" onChange={this.updateDetails} />
            </label><br />
            
            <label>Comment:
                <input type="text" name ='comment' onChange={this.updateDetails}/>
            </label><br/>
            
            <input type="submit" />
            </form>
        )

    }
}