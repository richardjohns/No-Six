import request from 'superagent'


export const NEW_TRANSACTION = 'NEW_TRANSACTION'

function receiveLedgerEntry(entry){

    return {
        type: NEW_TRANSACTION,
        contractor_name:entry.contractor_name,
        amount:entry.amount,
        comment:entry.comment
    }

}

export function submitLedgerEntry({ contractor_name, amount, comment }) {
    return (dispatch) => {
        let apiPostData = { contractorId: contractor_name, transactionAmount: amount, transactionComment: comment }
        request
            .post(`/api/ledger/${contractor_name}`)
            .send(apiPostData)
            .end((err, res) => {
                if (err) {
                    alert("Invalid transaction")
                }
                else {
                    dispatch(receiveLedgerEntry({
                        contractor_name, amount, comment
                    }))
                }
            })
    }
}
