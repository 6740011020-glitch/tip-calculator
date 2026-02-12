"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTip1 = () => {
    const calculatedTip = (bill * tip) / 100;
    const calculatedTotal = bill + calculatedTip;
    setTipAmount(calculatedTip);
    setTotal(calculatedTotal);
  };

  return (
   
    <div className="min-h-screen bg-gray-50 p-4 md:p-10 flex justify-center items-start">
      
     
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-4xl border border-gray-100">
        
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 md:mb-8 text-center md:text-left">
          Tip Calculator 💰
        </h1>

       
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          
      
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            
            <div>
              <label className="block text-base md:text-lg font-bold mb-2 text-gray-700">
                1. ใส่จำนวนเงิน (Bill)
              </label>
              <input
                type="number"
                placeholder="กรอกจำนวนเงิน"
                className="text-black border-2 border-gray-300 p-3 w-full text-lg md:text-xl rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={bill === 0 ? "" : bill}
                onChange={(e) => setBill(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-base md:text-lg font-bold mb-2 text-gray-700">
                2. เลือก % Tip <span className="text-blue-500">({tip}%)</span>
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setTip(5)}
                  className={`flex-1 py-3 text-lg font-bold rounded-lg transition-all ${
                    tip === 5
                      ? "bg-blue-600 text-white shadow-md scale-105"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  5%
                </button>
                <button
                  onClick={() => setTip(10)}
                  className={`flex-1 py-3 text-lg font-bold rounded-lg transition-all ${
                    tip === 10
                      ? "bg-blue-600 text-white shadow-md scale-105"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  10%
                </button>
              </div>
            </div>

            <button
              onClick={calculateTip1}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-lg md:text-xl shadow-sm active:scale-95 transition-all mt-2"
            >
              Calculate
            </button>
          </div>

          
          <div className="w-full md:w-1/2 bg-gray-100 p-5 md:p-6 rounded-xl border border-gray-200 flex flex-col justify-center gap-5">
            
            <div className="flex justify-between items-center">
              <span className="text-lg md:text-xl font-bold text-gray-600">Tip Total</span>
              <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-300 min-w-[100px] md:min-w-[120px] text-right">
                <span className="text-xl md:text-2xl font-bold text-blue-600">
                  {tipAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <hr className="border-gray-300" />

            <div className="flex justify-between items-center">
              <span className="text-lg md:text-xl font-bold text-gray-600">Bill Total</span>
              <div className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg border border-gray-300 min-w-[100px] md:min-w-[120px] text-right">
                <span className="text-xl md:text-2xl font-bold text-green-600">
                  {total.toLocaleString()}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}