import Form from './components/Form/Form';
import FactsList from './components/FaktsList/FactsList';
import ImagesList from './components/ImagesList/ImagesList';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Form />
        <FactsList />
      </div>
      <ImagesList />
    </div>
  );
}

export default App;