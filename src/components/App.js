
import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    textAlign: 'center',
    padding: '2rem',
    margin: 0,
    transition: 'background-color 0.3s ease',
  };

  const paragraphStyle = {
    fontSize: '1.5rem',
    color: '#374151',
    marginBottom: '1rem',
    fontWeight: 500,
    letterSpacing: '0.5px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    backgroundImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
    border: 'none',
    borderRadius: '9999px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
    transition: 'all 0.3s ease',
    outline: 'none',
  };

  const hoverButtonStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.5)',
    background: 'linear-gradient(45deg, #2563eb, #7c3aed)',
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>Button clicked {count} times</p>
      <button
        onClick={onAdd}
        style={count === 0 ? buttonStyle : { ...buttonStyle, ...hoverButtonStyle }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
