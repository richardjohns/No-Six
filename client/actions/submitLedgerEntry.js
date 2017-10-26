import request from 'superagent'


function receiveLedgerEntry(entry){

    return {
        type:'NEW_LEDGER_ENTRY',
        contractor_name:entry.contractor_name,
        amount:entry.amount,
        comment:entry.comment
    }

}

export function submitLedgerEntry({ contractor_name, amount, comment }) {
    return (dispatch) => {
        console.log(`sending:  contractor_name ${contractor_name}, amount ${amount}, comment ${comment}`)
        setImmediate(()=>{
            dispatch(receiveLedgerEntry({ contractor_name, amount, comment }))
        }
        // request
        //     .post('/api/ledger')
        //     .send({
        //         contractor_name, amount, comment
        //     })
        //     .end((err, res) => {
        //         if (err) {
        //             alert("didn't work")
        //         }
        //         else {

        //             dispatch(receiveLedgerEntry({ contractor_name, amount, comment }))
        //             document.location = "/ledger"
        //         }
        //     })
    }
}
