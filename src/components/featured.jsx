import React from 'react'
import featuredData from '../components/data/featured.json'

const Data = featuredData.data.map((data) => {
    return (
        <div className="col-lg-4 featured-card">
            <div className="card-icon-title">
                <div className="card-icon">
                    <i class={data.icon}></i>
                </div>
                <div className="card-title"><b>{data.name}</b></div>
            </div>
            <div className="card-desc">
                Source: {data.source}
            </div>
            <div className="card-price-button">
                <div className="card-price">Price: Free</div>
                <a className="card-button" target="_blank" href={data.link}>Go to Course</a>
            </div>
        </div>
    )
})

export default function featured() {


    return (
        <div className="featured">
            <div className="featured-title featured-title-resp" style={{marginTop: '120px'}}>Featured Courses</div>
            <div className='featured-cards'>
                <div className="container">
                    <div className="row">
                        {Data}
                    </div>
                </div>
            </div>
        </div>
    )
}
