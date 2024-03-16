import React from 'react'

const GenderBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex pt-4'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='label-text text-black'>Male</span>
                <input checked={selectedGender === "male"} onChange={() => onCheckboxChange("male")} type="checkbox" className='checkbox border-slate-900'/>
            </label>
        </div>
        <div className='flex'>
        <label className='label gap-2 cursor-pointer'>
                <span className={`label-text text-black  ${selectedGender === "female" ? "selected" : ""} `}>Female</span>
                <input checked={selectedGender === "female"} onChange={() => onCheckboxChange("female")} type="checkbox" className='checkbox border-slate-900'/>
            </label>
        </div>
    </div>
  )
}

export default GenderBox