import Link from "next/link";

type FooterProps = {
  variant?: "full" | "compact";
};

export default function Footer({ variant = "full" }: FooterProps) {
  const isFull = variant === "full";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="brand-name">Satyasee</h3>
            <p>
              Authentic Indian spices, rooted in tradition, crafted for modern
              kitchens.
              {isFull ? " From our farms to your kitchen." : ""}
            </p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <Link href="/shop">All Spices</Link>
            <a href="#">Bestsellers</a>
            {isFull ? <a href="#">New Arrivals</a> : null}
            <a href="#">Combo Packs</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">Our Story</a>
            {isFull ? <a href="#">Blog</a> : null}
            <a href="#">Recipes</a>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">FAQ</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            {isFull ? <a href="#">Privacy Policy</a> : null}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Satyasee. All rights reserved.
            {isFull ? " Made with ❤️ in India." : ""}
          </p>
        </div>
      </div>
    </footer>
  );
}
