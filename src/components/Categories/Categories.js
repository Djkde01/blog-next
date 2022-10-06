import Link from "next/link";
import { useState } from "react";
import { getCategories } from "../../services";
import { WidgetContainer, WidgetTitle } from "../PostWidget/PostWidgetStyles";
import { CategoriesList } from "./CategoriesStyles";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useState(() => {
    getCategories().then((categoriesList) => setCategories(categoriesList));
  }, []);

  return (
    <WidgetContainer>
      <WidgetTitle>Categories</WidgetTitle>
      <CategoriesList>
        {categories.map((categoryItem) => (
          <Link key={categoryItem.slug} href="/">
            {categoryItem.title}
          </Link>
        ))}
      </CategoriesList>
    </WidgetContainer>
  );
};

export default Categories;
