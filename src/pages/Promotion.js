import React, { Component } from 'react';
import B1F1 from '../assets/B1F1_.PNG';
import Voucher from '../assets/Voucher.PNG';
// import Voucher1 from '../assets/Voucher1.png';
import EStamp from '../assets/EStamp.PNG';
import Point from '../assets/Point.PNG';
import PromoCode from '../assets/PromoCode.PNG';

class Promotion extends Component {
    render() {
        return (
            <>
                <div className='Promotion'>

                    <div className='Promo'>
                        <img className='PromotionLogo' src={B1F1} alt='Buy1Free1'/>
                    </div>

                    <div className='Promo'>
                        <div id='P1'>
                            <img id='PromoLogoRightID' src={Voucher} alt='Voucher'/>
                            <div className='PromoText'>
                                <p>Voucher</p>
                            </div>
                        </div>
                        <div id='P1'>
                            <img id='PromoLogoRightID' src={Point} alt='Point'/>
                            <div className='PromoText'>
                                <p>Point</p>
                            </div>
                        </div>
                        <div id='P1'>
                            <img id='PromoLogoRightID' src={EStamp} alt='EStamp'/>
                            <div className='PromoText'>
                                <p>E-Stamp</p>
                            </div>
                        </div>
                        <div id='P1'>
                            <img id='PromoLogoRightID' src={PromoCode} alt='PromoCode'/>
                            <div className='PromoText'>
                                <p>Promo Code</p>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Promotion;