import './App.css';
import { Form } from './components';

function App() {
  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-2xl px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:px-8">
        <h1 className="py-4 text-3xl font-bold underline">Dish Form</h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
