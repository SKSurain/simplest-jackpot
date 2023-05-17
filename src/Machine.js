import React from 'react';


class Machine extends React.Component {
    randomAlphabet() {
        const alphabets = ['X', 'Y', 'Z'];
        const randomNumber = Math.floor(Math.random() * 3);
        return alphabets[randomNumber];
    }
    render() {
        //assigning random alphabets on s1,s2,s3
        const s1 = this.randomAlphabet();
        const s2 = this.randomAlphabet();
        const s3 = this.randomAlphabet();

        //if s1,s2,s3 have same alphabets, display following div
        if (s1 === s2 && s2 === s3) {
            return <div>
                <p>{s1} {s2} {s3}</p>
                <p><b>SUCCESS</b></p>
            </div>
        }
        //this div is displayed when s1,s2,s3 doesnt have same value
        else {
            return <div>
                <p>{s1} {s2} {s3}</p>
                <p><b>FAIL</b></p>
            </div>
        }
    }
}

export default Machine; 