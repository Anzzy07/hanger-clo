import { Routes, Route } from "react-router-dom";

import { Category } from "../Category/Category";
import "./Shop.style.scss";
import { CategoriesPreview } from "../Categories/CategoriesPreviewPage";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
