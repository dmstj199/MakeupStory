import React from 'react';
import ReactDOM from 'react-dom/client';
import {Routes , Route} from "react-router-dom";
import Layout from './component/layout/Layout';





export default function MainComponent(props){

  return(

    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
);


