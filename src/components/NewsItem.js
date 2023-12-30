import React from 'react'

function NewsItem(props) {
    return (
        <div>
            <div className="card border-info my-3 md-3 col-3 mx-auto" style={{ width: "18rem" }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className={` badge rounded-pill bg-${props.color} `}>{props.source}</span>
                </div>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    <p className="card-text">{props.description}...</p>
                    <p className={`text-${props.color}`}><small>By {props.source} on {new Date(props.time).toGMTString()}</small> </p>
                    <a href={props.newsUrl} rel="noreferrer" target='_blank' className="btn btn-dark" style={{ display: 'flex',alignItems: 'center', justifyContent: 'center', width: '50%'}}>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
