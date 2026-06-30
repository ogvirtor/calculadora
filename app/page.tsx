"use client";

import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [previous, setPrevious] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (resetDisplay) {
      setDisplay(num);
      setResetDisplay(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimal = () => {
    if (resetDisplay) {
      setDisplay("0.");
      setResetDisplay(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperation = (op: string) => {
    if (previous !== null && operation !== null && !resetDisplay) {
      calculate();
    }
    setPrevious(display);
    setOperation(op);
    setResetDisplay(true);
  };

  const calculate = () => {
    if (previous === null || operation === null) return;

    const prev = parseFloat(previous);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = current !== 0 ? prev / current : 0;
        break;
    }

    setDisplay(result.toString());
    setPrevious(null);
    setOperation(null);
    setResetDisplay(true);
  };

  const clear = () => {
    setDisplay("0");
    setPrevious(null);
    setOperation(null);
    setResetDisplay(false);
  };

  const clearEntry = () => {
    setDisplay("0");
  };

  const backspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const toggleSign = () => {
    const value = parseFloat(display) * -1;
    setDisplay(value.toString());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-md border border-slate-700/50">
        <div className="bg-slate-900/80 rounded-2xl p-6 mb-6 border border-slate-700/30">
          <div className="text-slate-500 text-sm mb-1 h-6">
            {previous && operation && `${previous} ${operation}`}
          </div>
          <div className="text-white text-5xl font-light text-right overflow-hidden">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <button
            onClick={clear}
            className="bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            C
          </button>
          <button
            onClick={clearEntry}
            className="bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            CE
          </button>
          <button
            onClick={backspace}
            className="bg-gradient-to-br from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            ⌫
          </button>
          <button
            onClick={() => handleOperation("÷")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl"
          >
            ÷
          </button>

          <button
            onClick={() => handleNumber("7")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            7
          </button>
          <button
            onClick={() => handleNumber("8")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            8
          </button>
          <button
            onClick={() => handleNumber("9")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            9
          </button>
          <button
            onClick={() => handleOperation("×")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl"
          >
            ×
          </button>

          <button
            onClick={() => handleNumber("4")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            4
          </button>
          <button
            onClick={() => handleNumber("5")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            5
          </button>
          <button
            onClick={() => handleNumber("6")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            6
          </button>
          <button
            onClick={() => handleOperation("-")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl"
          >
            −
          </button>

          <button
            onClick={() => handleNumber("1")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            1
          </button>
          <button
            onClick={() => handleNumber("2")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            2
          </button>
          <button
            onClick={() => handleNumber("3")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            3
          </button>
          <button
            onClick={() => handleOperation("+")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl"
          >
            +
          </button>

          <button
            onClick={toggleSign}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            ±
          </button>
          <button
            onClick={() => handleNumber("0")}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            0
          </button>
          <button
            onClick={handleDecimal}
            className="bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg"
          >
            .
          </button>
          <button
            onClick={calculate}
            className="bg-gradient-to-br from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-6 rounded-xl transition-all duration-150 active:scale-95 shadow-lg text-xl"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
