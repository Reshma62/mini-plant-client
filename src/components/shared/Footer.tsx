import { Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Careers
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Shop</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-primary">
                Featured Products
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Sale
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Policies</h4>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-primary">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="#"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                Twitter
              </Link>
            </li>
            <li />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
