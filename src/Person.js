import React from 'react'

class Person extends React.Component {

    static defaultProps = {
        name: "STRANGER"
    }
    render() {
        const { name, hobbies } = this.props;
        const hobbiesParagraph = hobbies.map(h => <p>{h}</p>)
        return <div>
            <h1>These are {name}'s hobbies</h1>
            {hobbiesParagraph}
        </div>
    }
}

export default Person; 