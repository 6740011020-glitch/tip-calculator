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
    <div className="min-h-screen bg-gray-50 p-10 flex justify-center items-start">
      
      {/* กรอบการ์ดสีขาว เรียบๆ ตรงกลาง */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-4xl border border-gray-100">
        
        <h1 className="text-3xl font-bold text-blue-600 mb-8">
          Tip Calculator 💰
        </h1>

        <div className="flex gap-10">
          
         
         
          <div className="w-1/2 flex flex-col gap-6">
            
            
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                1. ใส่จำนวนเงิน (Bill)
              </label>
              <input
                type="number"
                placeholder="กรอกจำนวนเงิน"
                className="border-2 border-gray-300 p-3 w-full text-xl rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                value={bill === 0 ? "" : bill}
                onChange={(e) => setBill(Number(e.target.value))}
              />
            </div>

           
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">
                2. เลือก % Tip <span className="text-blue-500">({tip}%)</span>
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setTip(5)}
                  className={`flex-1 py-3 text-lg font-bold rounded-lg transition-colors ${
                    tip === 5
                      ? "bg-blue-600 text-white shadow-md" 
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200" 
                  }`}
                >
                  5%
                </button>
                <button
                  onClick={() => setTip(10)}
                  className={`flex-1 py-3 text-lg font-bold rounded-lg transition-colors ${
                    tip === 10
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                >
                  10%
                </button>
              </div>
            </div>

          
            <button
              onClick={calculateTip1}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg text-xl shadow-sm transition-colors"
            >
              Calculate
            </button>
          </div>

         
          <div className="w-1/2 bg-gray-100 p-6 rounded-xl border border-gray-200 flex flex-col justify-center gap-6">
      
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-600">Tip Total</span>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-300 min-w-[120px] text-right">
                <span className="text-2xl font-bold text-blue-600">
                  {tipAmount.toLocaleString()}
                </span>
              </div>
            </div>

        
            <hr className="border-gray-300" />

          
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-600">Bill Total</span>
              <div className="bg-white px-6 py-3 rounded-lg border border-gray-300 min-w-[120px] text-right">
                <span className="text-2xl font-bold text-green-600">
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