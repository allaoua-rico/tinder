import React, { useState,useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from './axios'

export default function TinderCards() {
    const [people,setPeople]=useState([]);

    useEffect( () => {
        console.log(people)

        async function fetchData(){
        const req= await axios.get('/tinder/card')
        setPeople(req.data);
        console.log(people)
    }
    fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
      }
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }

    return (
        <div className="tinderCards">
            <div className="tinderCard__cardContainer">
             {
                 people.map(person=>{
                    return (
                        <TinderCard 
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)} 
                        preventSwipe={['up', 'down']}
                        className="swipe"
                        key={person.name}
                        >
                            <div 
                            style={{backgroundImage: "url(" + person.imgUrl +")"}}
                            className="card" 
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
            
                     )
                 })
             }
            </div>
        </div>
    )
}
