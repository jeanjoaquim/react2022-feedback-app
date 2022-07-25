import React from 'react'

function Header(props) {

    const styles = {
        backgroundColor: props.bgColor,
        color: props.txtColor
    }

    return (
        <header style={ styles }>
            <div className='container'>
                <h1>{props.text}</h1>
            </div>
        </header>
    )
}


/*default props sets a default value that will be used in case the component isn't receiving said prop*/

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    txtColor: "#ff6a95"
}

export default Header