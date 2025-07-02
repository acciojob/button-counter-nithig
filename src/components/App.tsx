import  { useState } from 'react';
import { MousePointer2 } from 'lucide-react';
import './../styles/index.css';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-md w-full text-center border border-slate-100">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <MousePointer2 className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Button Counter
          </h1>
          <p className="text-slate-600 text-lg">
            Track your button clicks in real-time
          </p>
        </div>

        <div className="mb-8">
          <p className="text-2xl font-semibold text-slate-700 mb-6">
            Button clicked <span className="text-blue-600 font-bold">{count}</span> {count === 1 ? 'time' : 'times'}
          </p>
          
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            <MousePointer2 className="w-5 h-5" />
            Click Me!
          </button>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex justify-center items-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Counter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>React useState</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;