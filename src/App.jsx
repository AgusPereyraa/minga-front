import './App.css';
import IndexLayout from './layouts/IndexLayout/IndexLayout';
import Index from './components/Index/Index';

function App() {
  return (
    <div className="container">
      <IndexLayout>
        <Index />
      </IndexLayout>
    </div>
  );
}

export default App;
