import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Kennel } from './components/Kennel';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
    <Kennel />
    </Router>
  </StrictMode>
);
