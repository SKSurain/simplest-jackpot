import React from 'react'

class MachineProps extends React.Component {
    render() {
        //destructuring props
        const { s1, s2, s3 } = this.props;
        //if jackpot (3 same alphabets), then true. Else, false
        const isJackpot = (s1 === s2) && (s2 === s3);
        //returns div with dynamic text 'Fail or 'Success'
        return <div className='MachineProps'>
            <p>{s1} {s2} {s3}</p>
            <p className={isJackpot ? 'MachineProps-win' : 'MachineProps-loose'}>
                <b>{isJackpot ? 'SUCCESS' : 'FAIL'}</b></p>
        </div>
    }
}

export default MachineProps; 