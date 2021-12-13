import { React, useState } from 'react'

function Results() {
  const [states, setStates] = useState([
    { id: 1, name: 'maryland' },
    { id: 2, name: 'california' },
    { id: 3, name: 'virginia' }
  ])
  const [cities, setCities] = useState([
    { id: 1, stateId: 1, name: 'silver spring' },
    { id: 2, stateId: 1, name: 'rockville' },
    { id: 3, stateId: 1, name: 'frederick' },
    { id: 4, stateId: 2, name: 'sacramento' },
    { id: 5, stateId: 2, name: 'los angeles' },
    { id: 6, stateId: 3, name: 'alexandria' },
    { id: 7, stateId: 3, name: 'richmond' }
  ])
  const [populatedCity, setPopulatedCity] = useState([])

  const handeleCity = (e) => {
    // console.log(e.target.value)
    const theCities = []
    states.map((state) => {
      if (e.target.value === state.name) {
        cities.map((city) => {
          if (city.stateId === state.id) {
            // console.log(city.name)
            theCities.push(city.name)
          }
        })
      }
      return theCities
    })
    // console.log(theCities)
    setPopulatedCity(theCities)
  }
  console.log(populatedCity)

  return (
    <div>
      <select onChange={(e) => handeleCity(e)}>
        <option>--Choose state--</option>
        {states.map((state) => {
          const { id, name } = state
          return <option key={id}>{name}</option>
        })}
      </select>
      <select>
        <option>--Cities--</option>
        {populatedCity.map((popCity) => {
          return <option key={popCity}>{popCity}</option>
        })}
      </select>
    </div>
  )
}

export default Results
