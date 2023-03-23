import React, { Component } from 'react'
import Store from '../assets/Store.PNG'

export default class Home extends Component {
  render() {
    return (
      <>
      <div className='containerStore'>

        <div className='Rockbell'>
          <div className='Col'>
            <img src={Store}  alt='Store' />
          </div>
          <div className='Col' id='ColID'>
            <div className='ColP'>
              <p className='TextHeader'>POINT|E-STAMP|PROMO-CODE|CAMPAIGN</p>
              <p className='TextStoreName'>ROCKBELL PERLING</p>
              <p>+60137783172</p>
              <p>7a, Jalan Undan15, Taman Perling, Johor Bahru, Johor, Malaysia</p>
              <p>Expiry: 2050-12-31</p>
            </div>
          </div>          
        </div>

        <div className='Rockbell'>
          <div className='Col'>
            <img src={Store}  alt='Store' />
          </div>
          <div className='Col' id='ColID'>
            <div className='ColP'>
              <p className='TextHeader'>POINT|E-STAMP|PROMO-CODE|CAMPAIGN</p>
              <p className='TextStoreName'>ROCKBELL CAFE</p>
              <p>Sarawak Kuching, Sarawak, Malaysia</p>
            </div>
          </div>
        </div>

        <div className='Rockbell'>
          <div className='Col'>
            <img src={Store}  alt='Store' />
          </div> 

          <div className='Col' id='ColID'>
            <div className='ColP'>
              <p className='TextHeader'>POINT|E-STAMP|PROMO-CODE|CAMPAIGN</p>
              <p className='TextStoreName'>ROCKBELL PUCHONG</p>
              <p>+60380605598</p>
              <p>NO. 28, 2B, Jalan Puteri 1/2 Bandar Puteri Puchong, Selangor, Malaysia</p>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
