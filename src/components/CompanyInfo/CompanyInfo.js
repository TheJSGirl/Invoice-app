import React, {Component} from 'react';
import './CompanyInfo.css';

class CompanyInfo extends Component {
     static defaultProps = {
         name: "JOJO",
         address: "123 Your Street",
         city: "Your City, AB123 3BC",
         phone: "0123 45566",
         customer: "abc",
        date: '01/01/200'
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
                    </div>
                 
                    
                </div>
            )
        }
}

export default CompanyInfo;