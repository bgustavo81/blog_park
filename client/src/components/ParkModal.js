import React from 'react';
import ReactDOM from 'react-dom';

const ParkModal = props => {
    let style = {
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        postion: 'fixed',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
        display: "fixed",
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px'
    }

    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} style={style}>
            <div onClick={(e) => e.stopPropagation()}>
                <h3>{props.title}</h3>
                <div>{props.content}</div>
                <div>{props.actions}</div>
            </div>
        </div>,
        document.getElementById('parkModal')
    );
};

export default ParkModal;