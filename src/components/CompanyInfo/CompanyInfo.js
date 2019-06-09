import React, {Component} from 'react';
import './CompanyInfo.css';
import Invoice from '../Invoice/Invoice';

class CompanyInfo extends Component {
     static defaultProps = {
         name: "JOJO",
         address: "123 Your Street",
         city: "Your City, AB123 3BC",
         phone: "0123 45566",
         customer: "abc",
         payableTo: "xyz",
        date: '01/01/2000',
        InvoiceId: "#1234",
        projectName: 'dummmy',
        dueDate: '01/01/2000'
        }

        render() {
            return(
                <div className="company">
                    <h3>{this.props.name}</h3>
                    <div className="company-info">
                        <p className="company-info">{this.props.address}<br/>
                        {this.props.city}<br/>
                        {this.props.phone}
                        </p>
                    </div>
                    <div>
                        <h1>Invoice</h1>
                        <h3>Submitted date: {this.props.date}</h3>
                        <div>
                            <p>
                                Invoice for {this.props.customer}
                                <h3>{this.props.name}</h3>
                                {this.props.address}
                                {this.props.city}
                            </p>
                            <p>
                                Payable to {this.props.payableTo}
                            </p>
                            <p>
                                Project {this.props.projectName}
                            </p>
                            <p>
                                Due Date {this.props.dueDate}
                            </p>
                            
                        </div>
                    </div>
                    <div>
                        <Invoice />
                    </div>
                 
                    
                </div>
            )
        }
}

export default CompanyInfo;