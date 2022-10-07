import React from 'react'
import Collapsible from 'react-collapsible';
import courses from '../components/data/allcourses.json'

const Data = courses.data.map((data) => {
    return (
        <Collapsible trigger={data.title} className='collapse-main' transitionTime='100'>
                {data.cards.map((card) => {
                    return (
                        <div className='col-lg-4 featured-card' style={{width: "100%"}}>
                            <div className="card-icon-title">
                                <div className="card-icon">
                                    <i class={card.icon}></i>
                                </div>
                                <div className="card-title"><b>{card.name}</b></div>
                            </div>
                            <div className="card-desc">
                                Source: {card.source}
                            </div>
                            <div className="card-price-button">
                                <div className="card-price">Price: Free</div>
                                <a className="card-button" href={card.link}>Go to Course</a>
                            </div>
                        </div>
                    )
                })}
        </Collapsible>
    )
})

export default function allcourse() {
    return (
        <div className="allcourse">
            <div className="featured-title">All Courses</div>
            <div className="maxwidthcards">
                {Data}
                <br />
            </div>
        </div>
    )
}
