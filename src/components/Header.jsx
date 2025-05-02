import React from 'react'

const Header = () => {
  return (
    <div>
      <h1 className='text-white text-6xl mt-6 ml-6'>Calculator</h1>

    <input className='flex justify-center items-center h-16 w-132 mx-auto mt-16' type="text"
    id="screen"/>

  <div className='mt-8 h-12 flex gap-68 justify-center items-center w-132 mx-auto'>
        <input className="bg-white h-12 text-center rounded-xl" type="number"
    placeholder="first value" id="firstNum"/>

    <input class="bg-white h-12 text-center rounded-xl" type="number"
       placeholder="second value" id="secondNum"/>

    </div>

    <select className='mt-24 h-12 flex gap-68 justify-center items-center w-68 mx-auto mt-16 bg-white rounded-xl text-4xl' id="operator">
         <option disabled selected>Select operator</option>   
                 
         <option value="plus">+</option>

         <option value="minus">-</option>
   
       </select>

       <button className='mt-24 h-12 flex gap-68 justify-center items-center w-32 mx-auto mt-12 bg-white rounded-xl' onclick="calculateNumber()">Calculate</button>
    
    </div>
  )
}

export default Header