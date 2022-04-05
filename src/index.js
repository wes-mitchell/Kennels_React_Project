import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Kennel } from './components/Kennel';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Kennel />
  </StrictMode>
);
