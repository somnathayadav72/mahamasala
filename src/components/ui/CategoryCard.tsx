import Link from "next/link";
import type { Category } from "@/lib/categories";

type CategoryCardProps = {
  category: Category;
  showDescription?: boolean;
};

export default function CategoryCard({
  category,
  showDescription = false,
}: CategoryCardProps) {
  return (
    <Link href="/shop" className="category-card">
      <div className={`cat-icon-wrap ${category.iconClass}`}>
        <svg className="cat-svg" viewBox="0 0 64 64" aria-hidden="true">
          <use href={`#${category.iconId}`} />
        </svg>
      </div>
      <h4 className="cat-label">{category.label}</h4>
      {showDescription && category.description ? (
        <p className="cat-desc">{category.description}</p>
      ) : null}
      <span className="cat-go-btn" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
