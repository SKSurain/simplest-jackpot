import React from 'react';
import './App.css';

class Machine extends React.Component {

    randomAlphabet() {
        const alphabets = ['X', 'Y', 'Z'];
        const randomNumber = Math.floor(Math.random() * 3);
        return alphabets[randomNumber];
    }
    randomPrize() {
        const randomNumber = Math.floor(Math.random() * 3);
        const prizeCategories = ['10,000', '100,000', '100,000,000'];
        return prizeCategories[randomNumber]
    }
    render() {
        //assigning random alphabets on s1,s2,s3
        const s1 = this.randomAlphabet();
        const s2 = this.randomAlphabet();
        const s3 = this.randomAlphabet();

        //if s1,s2,s3 have same alphabets, display following div
        if (s1 === s2 && s2 === s3) {
            return <div className='Machine'>
                <p>{s1} {s2} {s3}</p>
                <p className='Machine-win'><b>SUCCESS</b></p>
                <p>YOU WON RM {this.randomPrize()}! CONGRATS!</p>
            </div>
        }
        //this div is displayed when s1,s2,s3 doesnt have same value
        else {
            return <div className='Machine'>
                <p>{s1} {s2} {s3}</p>
                <p className='Machine-loose'><b>FAIL</b></p>
            </div>
        }
    }
}

export default Machine; 