import React, { useState } from 'react';

const Header = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('plus');
  const [result, setResult] = useState('');

  const calculate = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    let answer;

    if (operator === 'plus') {
    answer = num1 + num2;
    } else if (operator === 'minus') {
    answer = num1 - num2;
    } else if (operator === 'multiply') {
    answer = num1 * num2;
    } else if (operator === 'divide') {
    answer = num1 / num2;

    }

    setResult(answer);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Calculator</h1>

      <input type="text" value={result} className="text-center text-2xl font-semibold w-full max-w-md mb-6 p-4 rounded-lg border border-gray-300 bg-white shadow" placeholder="Result"
      />

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mb-4">
        <input type="number" value={firstNumber} onChange={(e) => setFirstNumber(e.target.value)} placeholder="First Number" className="flex-1 p-3 rounded-lg border border-gray-300 bg-white shadow text-center"
        />

        <input type="number" value={secondNumber} onChange={(e) => setSecondNumber(e.target.value)}
          placeholder="Second Number" className="flex-1 p-3 rounded-lg border border-gray-300 bg-white shadow text-center"
        />
      </div>

      <select
        value={operator} onChange={(e) => setOperator(e.target.value)} className="w-full max-w-md mb-6 p-3 rounded-lg border border-gray-300 bg-white shadow text-xl text-center"
      >

        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
        <option value="factorial">!</option>

      </select>

      <button
        onClick={calculate}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow"
      >

        Calculate
      </button>
    </div>
  );
};

export default Header;