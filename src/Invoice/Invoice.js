import React, {Component} from 'react';

class Invoice extends Component {
    static defaultProps = {
        item:'item1',
        qty:1,
        unitPrice: 200,
    }
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    item:'item1',
                    qty:1,
                    unitPrice: 200,
                },
                {  item:'item2',
                qty:2,
                unitPrice: 400,}

            ],
            subTotal: ''
        
        }
    }
    render() { 
        let total;
        const res = this.state.items.map((item) => {
             total += item.unitPrice*item.qty;
            return (
              <tr>
                  <td>{item.item}</td>
                  <td>{item.qty}</td>
                  <td>{item.unitPrice}</td>
                  <td>{item.unitPrice*item.qty}</td>
              </tr>
            )
        });
        return (
            <div>
                <table>
                    <tr>
                        <th>Description</th>
                        <th>Qty</th> 
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                {res}
                <tr>
                    <th>Subtotal: {}</th>
                </tr>
                </table>
            </div>
        )
    }
}

export default Invoice;