import { ArrowUp } from "lucide-react";

function Footersection() {
  return (
    <>
      <div className="flex justify-center -mb-6 relative z-10">
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
      <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-col items-center justify-center">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} codeyharsh.co. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footersection;
