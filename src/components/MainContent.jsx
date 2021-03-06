import React from 'react';
import Keg from './Keg';
import AddForm from './AddForm';
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
          remaining: 20
        },
        1: {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: 60
        },
        2: {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: 65
        },
        3: {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv: '5.9%',
          price: '6',
          remaining: 75
        },
        4: {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv: '7.5%',
          price: '6',
          remaining: 18
        },
        5: {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv: '5.5%',
          price: '6',
          remaining: 58
        }
      },
      selectedKeg: null,
      happyHour: false,
      addKeg: false,
    };
    this.newKeg = false;
    this.handleSelectedKeg = this.handleSelectedKeg.bind(this);
    this.handleUpdatedKeg = this.handleUpdatedKeg.bind(this);
    this.handleHappyHour = this.handleHappyHour.bind(this);
    this.handleSell = this.handleSell.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddForm = this.handleAddForm.bind(this);
    this.handleAddKeg = this.handleAddKeg.bind(this);
  }

  handleSelectedKeg(kegId) {
    this.setState({selectedKeg: kegId});
  }

  handleUpdatedKeg(input, kegId) {
    let newKegList = Object.assign({}, this.state.masterKegList);
    if (input === null) {
      this.setState({selectedKeg: null});
    } else {
      newKegList[kegId] = input;
      this.setState({masterKegList: newKegList});
      this.setState({selectedKeg: null});
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

  handleSell(id, quantity) {
    let newKegList = Object.assign({}, this.state.masterKegList);
    if (newKegList[id].remaining > quantity) {
      newKegList[id].remaining -= quantity;
      this.setState({masterKegList: newKegList});
    } else if (newKegList[id].remaining < quantity) {
      alert(`There are not enough pints remaining of ${newKegList[id].name} to make this sale.`);
    } else {
      alert(`You've just sold out of ${newKegList[id].name}. Time to replace it.`);
      delete newKegList[id];
      this.setState({masterKegList: newKegList});
    }
    this.setState({masterKegList: newKegList});
  }

  handleDelete(id) {
    let newKegList = Object.assign({}, this.state.masterKegList);
    if (confirm(`Are you sure you want to delete ${newKegList[id].name}? All data will be lost.`)) {
      delete newKegList[id];
      this.setState({masterKegList: newKegList});
    }
  }

  handleAddForm() {
    this.setState({addKeg: true});  
  }

  handleAddKeg (input, kegId) {
    if (input === null) {
      this.setState({addKeg: false});
    } else {
      let newKegList = Object.assign({}, this.state.masterKegList, {[kegId]: input});
      this.setState({masterKegList: newKegList});
      this.setState({addKeg: false});
    }
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
        <table className = 'table'>
          <thead className = 'thead'>
            <tr className = 'table-headers'>
              <th scope = 'col'>Name</th>
              <th scope = 'col'>Brand</th>
              <th scope = 'col'>Price</th>
              <th scope = 'col'>Alcohol Content</th>
              <th scope = 'col'>Pints Remaining</th>
              <th scope = "col"></th>
              <th scope = "col"></th>
              <th scope = "col"></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.masterKegList).map(kegId => {
              let keg = this.state.masterKegList[kegId];
              return <Keg name = {keg.name}
                brewer = {keg.brewer}
                description = {keg.description}
                abv = {keg.abv}
                price = {keg.price}
                remaining = {keg.remaining}
                id = {kegId}
                onSelectedKeg = {this.handleSelectedKeg}
                selectedKeg = {this.state.selectedKeg}
                happyHour = {this.state.happyHour}
                onSell = {this.handleSell}
                onDelete = {this.handleDelete}
                key = {kegId}
              />;
            })}
          </tbody>
        </table>
      </div>;
    if (this.state.selectedKeg) {
      return(
        <div style = {contentStyle}>
          {mainRenderedContent}
          <EditForm
            keg = {this.state.masterKegList[this.state.selectedKeg]}
            kegId = {this.state.selectedKeg}
            onUpdatedKeg = {this.handleUpdatedKeg}
          />
        </div>
      );
    } else if (this.state.addKeg) {
      return(
        <div style = {contentStyle}>
          {mainRenderedContent}
          <AddForm
            onAddKeg = {this.handleAddKeg}
          />
        </div>
      );
    } else {
      return (
        <div style = {contentStyle}>
          {mainRenderedContent}
          <TableButtons 
            happyHourStatus = {this.state.happyHour}
            onHappyHour = {this.handleHappyHour}
            onAddForm = {this.handleAddForm}
          />
        </div>
      );
    }
  }
}

export default MainContent;