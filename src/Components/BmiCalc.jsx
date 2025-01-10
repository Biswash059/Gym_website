import React from 'react'
import CustomButton from './CustomButton'

const BmiCalc = () => {
  return (
    <section className="min-h-[90vh]">
      <div className="mt-12">
        <h1 className="h1 text-center">Bmi Calculator</h1>
        <div className=" max-w-[800px] grid grid-cols-2 md:grid-cols-3 gap-3 my-12 px-4 mx-auto">
          <select
            name="gender"
            className="h-10 overflow-y-auto border-2 border-red-500 px-2 focus:outline-none"
          >
            <option value="Your Gender">Your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="height"
            placeholder="Your Height in ft"
            className="border-2 border-red-500 px-2 focus:outline-none"
          />
          <input
            type="text"
            name="weight"
            placeholder="Your Weight in kg"
            className="border-2 border-red-500 px-2 focus:outline-none"
          />
          <CustomButton
            containerStyles="px-5 py-3 bg-red-300"
            text={"Calculate it"}
          />
          <CustomButton
            containerStyles="px-5 py-3 bg-red-300"
            text={"Reset it"}
          />
          <div
            class="flex items-center border-2 border-red-500 px-2"
            id="result-box"
          >
            <span class="text-gray-400">Results here</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="h3 uppercase">body mass index</h3>
          <p className="max-w-[600px] mx-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
          <div className="mt-10">
            <table className="border-2 border-red-500">
              <tbody>
                <tr className="uppercase border-b-2 border-red-500">
                  <th className="px-10 py-2">bmi</th>
                  <th className="px-10 py-2">classification</th>
                </tr>
                <tr className='text-center'>
                  <td className='px-10 py-2'>18-25</td>
                  <td className='px-10 py-2'>Normal Weight</td>
                </tr>
                <tr className='text-center'>
                  <td className='px-10 py-2'>25-30</td>
                  <td className='px-10 py-2'>Over Weight</td>
                </tr>
                <tr className='text-center'>
                  <td className='px-10 py-2'>30-40</td>
                  <td className='px-10 py-2'>Obesity</td>
                </tr>
                <tr className='text-center'>
                  <td className='px-10 py-1'>40-above</td>
                  <td className='px-10 py-1'>Morbid Obesity</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BmiCalc