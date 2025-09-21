import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-6">
            <img src={logo} className="h-16 w-16 animate-spin" alt="logo" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Welcome to React + Tailwind CSS
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Edit <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.js</code> and save to reload.
          </p>
          <div className="text-center">
            <a
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
