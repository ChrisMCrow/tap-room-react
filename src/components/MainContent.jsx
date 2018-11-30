import React from 'react';
import Keg from './Keg';
// import AddForm from './AddForm';
import TableButtons from './TableButtons';
import EditForm from './EditForm';
import HappyHour from './HappyHour';

class MainContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        0: {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        1: {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        },
        2: {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65'
        },
        3: {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv: '5.9%',
          price: '6',
          remaining: '75'
        },
        4: {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv: '7.5%',
          price: '6',
          remaining: '18'
        },
        5: {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv: '5.5%',
          price: '6',
          remaining: '58'
        }
      },
      selectedKeg: null,
      happyHour: false,
    };
    this.newKeg = false;
    this.handleSelectedKeg = this.handleSelectedKeg.bind(this);
    this.handleUpdatedKeg = this.handleUpdatedKeg.bind(this);
    this.handleHappyHour = this.handleHappyHour.bind(this);
  }

  handleSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }

  handleUpdatedKeg(input, kegId) {
    let newKegList = Object.assign({}, this.state.masterKegList);
    let newSelectedKeg = this.state.selectedKeg.slice();
    if (input === null) {
      newSelectedKeg = null;
      this.setState({selectedKeg: newSelectedKeg});
    } else {
      newKegList[kegId] = input;
      newSelectedKeg = null;
      this.setState({masterKegList: newKegList});
      this.setState({selectedKeg: newSelectedKeg});
    }
  }

  handleHappyHour() {
    let status = new Boolean(this.state.happyHour);
    let newStatus;
    if (status == false) {
      newStatus = true;
    } else {
      newStatus = false;
    }
    this.setState({happyHour: newStatus});
  }

  render() {
    const contentStyle = {
      padding: '0 10px 10px 10px',
      color: 'rgb(196, 179, 179)',
      backgroundColor: 'rgba(0, 0, 0, .8)',
      border: '1px solid rgb(196, 179, 179)',
      borderRadius: '5px',
      boxShadow: '2px 2px 5px rgb(58, 58, 58)'
    };
    const mainRenderedContent =
      <div>
        <style jsx>{`
          th {
            font-family: 'Lora', sans-serif;
            font-weight: 700;
          }
          .table thead th {
            border-top: none;
          }
          .btn {
            margin-right: 15px;
          }        
        `}</style>
        {this.state.happyHour ? (
          <HappyHour />
        ) : (
          null
        )}
        <table className='table'>
          <thead className='thead'>
            <tr className='table-headers'>
              <th scope='col'>Name</th>
              <th scope='col'>Brand</th>
              <th scope='col'>Price</th>
              <th scope='col'>Alcohol Content</th>
              <th scope='col'>Pints Remaining</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.masterKegList).map(kegId => {
              let keg = this.state.masterKegList[kegId];
              return <Keg name={keg.name}
                brewer={keg.brewer}
                description={keg.description}
                abv={keg.abv}
                price={keg.price}
                remaining={keg.remaining}
                onSelectedKeg={this.handleSelectedKeg}
                selectedKeg = {this.state.selectedKeg}
                happyHour = {this.state.happyHour}
                id={kegId}
                key={kegId}
              />;
            })}
          </tbody>
        </table>
      </div>;
    if (this.state.selectedKeg) {
      return(
        <div style={contentStyle}>
          {mainRenderedContent}
          <EditForm
            keg = {this.state.masterKegList[this.state.selectedKeg]}
            kegId = {this.state.selectedKeg}
            onUpdatedKeg = {this.handleUpdatedKeg}
          />
        </div>
      );
    } else {
      return (
        <div style={contentStyle}>
          {mainRenderedContent}
          <TableButtons 
            happyHourStatus = {this.state.happyHour}
            onHappyHour = {this.handleHappyHour}
          />
        </div>
      );
    }
  }
}

export default MainContent;