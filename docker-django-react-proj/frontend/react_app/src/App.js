import Urls from './Urls';
import React from 'react'; 
import Layout from './components/Layout'; 

function App() {
  return (
    <div className="App">
      <Layout>
        <Urls />
      </Layout>
    </div>
  );
}

export default App;
