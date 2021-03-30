import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExampleComponent } from './ExampleComponent';

export const MyPage = () => (
    <Routes>
      <Route path="/" element={<ExampleComponent />} />
    </Routes>
)