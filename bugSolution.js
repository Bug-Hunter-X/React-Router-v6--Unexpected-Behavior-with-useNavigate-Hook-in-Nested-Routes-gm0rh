```javascript
import { useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('About component rendered with location:', location);
  }, [location]);

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => navigate('/about/nested')}>Go to Nested</button>
      <button onClick={()=> navigate('/')}>Go to home</button> 
    </div>
  );
}

function Nested() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Nested</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
export default App; 
```