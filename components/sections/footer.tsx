import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-4 w-full">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <Button className={"flex flex-row"} variant={"outline"} asChild>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/hiradekevin"
            >
              <Github size={20} />
              GitHub
            </Link>
          </Button>
        </li>
      </ul>
      <p className="mt-8">© {new Date().getFullYear()} CC BY-NC-SA 4.0 Licensed</p>
    </footer>
  );
}
