import React from 'react'

function Location({locations,setLocationFunction,selectedLocation}) {
    const handleSelectChange = (event) => {
        setLocationFunction(event.target.value);
      }; 
  return (
    <div className="state">
      <div className="p-2">state</div>
      <div className="p-2">
        <select className="form-select" value={selectedLocation} aria-label="Default select example" onChange={handleSelectChange}>
          {locations.map((option) => (
            <option key={option.id} value={option.id} >
              {option.state}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Location