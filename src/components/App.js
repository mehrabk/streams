import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/streams/new" element={<StreamCreate />} />
          <Route path="/streams/edit/:id" element={<StreamEdit />} />
          <Route path="/streams/delete/:id" element={<StreamDelete />} />
          <Route path="/streams/:id" element={<StreamShow />} />
          <Route
            path="*"
            element={<main style={{ padding: "1rem" }}>There`s nothing here!</main>}
          />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
