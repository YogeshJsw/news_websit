import React from 'react'

function Spinner() {
    return (
        <div style={{ display: 'block', textAlign: 'center' }}>
            <div className="spinner-grow" style={{ width: '3rem', height: '3rem' }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Spinner
