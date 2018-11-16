import React from 'react';
import Keg from './Keg';
import AddForm from './AddForm';
import { Switch, Route, Link } from 'react-router-dom';

const masterKegList = [
  {
    name: 'Ruby Zozzle',
    brewer: 'Hi-Wheel',
    description: 'Sparkling Wine & Grapefruit',
    abv: '6.8%',
    price: '7',
    remaining: '20'
  },
  {
    name: 'Tart N Juicy',
    brewer: 'Epic',
    description: 'Sour IPA',
    abv: '4.5%',
    price: '6',
    remaining: '60'
  },
  {
    name: 'Hamm\'s',
    brewer: 'Miller/Coors',
    description: 'American Lager',
    abv: '4.7%',
    price: '3',
    remaining: '65'
  },
  {
    name: 'Prismatic',
    brewer: 'Ninkasi',
    description: 'Juicy IPA',
    abv:  '5.9%',
    price: '6',
    remaining: '75'
  },
  {
    name: 'Juicy Haze',
    brewer: 'New Belgium',
    description: 'India Pale Ale',
    abv:  '7.5%',
    price: '6',
    remaining: '18'
  },
  {
    name: '8 Hop',
    brewer: 'New Belgium',
    description: 'Pale Ale',
    abv:  '5.5%',
    price: '6',
    remaining: '58'
  }
];


function MainContent() {
  return(
    <div className='content'>
      <style jsx>{`
        .content {
          padding: 0 10px 10px 10px;
          color: rgb(196, 179, 179);
          background-color: rgba(0, 0, 0, .7);
          border: 1px solid rgb(196, 179, 179);
          border-radius: 5px;
          box-shadow: 2px 2px 5px rgb(58, 58, 58);
        }
        th {
          font-family: 'Lora', sans-serif;
          font-weight: 700;
        }
        .table thead th {
          border-top: none;
        }
      
      
      `}</style>
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
          {masterKegList.map( (keg, index) => 
            <Keg name={keg.name}
              brewer={keg.brewer}
              description={keg.description}
              abv={keg.abv}
              price={keg.price}
              remaining={keg.remaining}
              key={index}/>
          )}
        </tbody>
      </table>
      <Link to='/add'>
        <button className='btn'>Add New Keg</button>
      </Link>
      <Link to='/happyHour'>
        <button className='btn'>Start Happy Hour</button>
      </Link>
      <Switch>
        <Route exact path='/'/>
        <Route path='/add' component={AddForm}/>
      </Switch>
    </div>
  );
}

export default MainContent;