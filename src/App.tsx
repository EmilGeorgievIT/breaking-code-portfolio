import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Home } from './components/home/Home';
import { Loading } from './components/loading/Loading';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <Loading />}

      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
