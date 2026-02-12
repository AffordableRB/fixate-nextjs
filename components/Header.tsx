import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <nav className="border-b-4 border-border bg-background">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-0">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663338939330/ttnIFotzVNuxfnAn.png" alt="Fixate" className="h-32 w-auto" />
            </Link>
            <div className="hidden md:flex gap-10">
              <Link href="/features">
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Features
                </span>
              </Link>
              <Link href="/pricing">
                <span className="text-xs font-body font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://fixate-app.vercel.app" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 font-display font-bold uppercase tracking-wide px-6 h-12 btn-press rounded">
                Log in
              </Button>
            </a>
            <Link href="/demo">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display font-bold uppercase tracking-wide px-8 h-12 btn-press">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
