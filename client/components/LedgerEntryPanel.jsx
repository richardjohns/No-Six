import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {submitLedgerEntry} from '../actions/submitLedgerEntry' 

class LedgerEntryPanel extends React.Component {

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

          <div>
            <form className="form" onSubmit={this.submit}>
            
            <label className='label' >Contractor:
                <input className='input' type="text" name="contractor_name" onChange={this.updateDetails} />
            </label><br />
            
            <label className='label'>Amount:
                <input className='input' type="number" name="amount" onChange={this.updateDetails} />
            </label><br />
            
            <label className='label' >Comment:
                <input className='input' type="text" name ='comment' onChange={this.updateDetails}/>
            </label><br/>
            
            <input className='button' type="submit" />
            </form>

            <Link to='/ledger'>Back to Ledger</Link>
            </div>
        )

    }
}

export default connect()(LedgerEntryPanel)
