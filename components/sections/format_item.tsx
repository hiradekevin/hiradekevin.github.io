import { HTMLAttributes } from "react";
import { Badge } from "../ui/badge";
import { Metadata } from "@/app/view/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ItemType extends HTMLAttributes<HTMLLIElement> {
  informations: {
    metadata: Metadata;
  };
}

export function Item({ informations, ...props }: ItemType) {
  return (
    <li {...props}>
      <div className="flex flex-col">
        <h3
          dangerouslySetInnerHTML={{
            __html: informations.metadata.bibliography ?? "",
          }}
        />
        {informations.metadata.links && informations.metadata.links.length > 0 && (
          <div className="flex flex-row gap-4 mt-2">
            {informations.metadata.links.map((link, index) => (
              <Button key={index} className={"flex flex-row"} variant={"outline"} asChild>
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={link.url}
                >
                  <ArrowUpRight size={20} />
                  {link.type}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

export function News({ informations, ...props }: ItemType) {
  return (
    <li {...props}>
      <div className="flex flex-row gap-6">
        <Badge className="self-center px-4">
          {informations.metadata.publishedAt.getFullYear()}
        </Badge>
        <p>{informations.metadata.summary}</p>
      </div>
    </li>
  );
}
