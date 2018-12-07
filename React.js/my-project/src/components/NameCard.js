import React from 'react'

class NameCard extends React.Component {
    render() {
        const { name , number, isHuman, tags} = this.props; 
        return (
            <div>
                <h4>{name}</h4>
                <ul>
                    <li>
                        电话：
                        {number}
                    </li>
                    <li>
                       type: { isHuman ? 'Human' : 'Alien'}
                    </li>
                    <p>
                    { tags.map((tag,index) => (
                        <span key={index}>{tag}</span>
                    ))}
                    </p>
                </ul>
            </div>
        ) 
    }
}

export default NameCard