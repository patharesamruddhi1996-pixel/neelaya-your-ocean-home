import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <img src="/neelaya-logo.png" alt="Neelaya Academy logo" className="h-14 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Neelaya Freediving &amp; Mermaid Academy — <em>Neel</em>, the blue of sky and sea;
            <em> Alaya</em>, home. From sky to sea, your home in the blue.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/freediving" className="hover:text-primary">Freediving courses</Link></li>
            <li><Link to="/mermaid" className="hover:text-primary">Mermaid courses</Link></li>
            <li><Link to="/about" className="hover:text-primary">About us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Find us</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 size-4 text-primary" /> Blue Bay Marina, Coastal Road</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 size-4 text-primary" /> hello@neelaya.blue</li>
            <li className="flex items-start gap-2"><Instagram className="mt-0.5 size-4 text-primary" /> @neelaya.academy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Neelaya Freediving &amp; Mermaid Academy. Breathe. Descend. Come home.
      </div>
    </footer>
  );
}
