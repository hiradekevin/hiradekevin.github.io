"use client";

import { HTMLAttributes, useState } from "react";
import { Badge } from "../ui/badge";
import { Metadata } from "@/app/view/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight, Check, Clipboard, Quote } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ItemType extends HTMLAttributes<HTMLLIElement> {
  informations: {
    metadata: Metadata;
  };
}

export function Item({ informations, ...props }: ItemType) {
  const [copied, setCopied] = useState(false);

  const copy_to_clipboard = () => {
    navigator.clipboard.writeText(informations.metadata.bibtex ?? "");

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li {...props}>
      <div className="flex flex-col">
        <h3
          dangerouslySetInnerHTML={{
            __html: informations.metadata.bibliography ?? "",
          }}
        />
        {informations.metadata.links &&
          informations.metadata.links.length > 0 && (
            <div className="flex flex-row gap-4 mt-2">
              {informations.metadata.links.map((link, index) => (
                <Button
                  key={index}
                  className={"flex flex-row"}
                  variant={"outline"}
                  asChild
                >
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button className={"flex flex-row"} variant="outline">
                    <Quote size={20} />
                    Cite this
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader className="flex flex-col gap-2">
                    <p className="font-mono text-muted-foreground text-sm break-words">
                      {informations.metadata.bibtex}
                    </p>
                    <Button onClick={copy_to_clipboard}>
                      {copied ? (
                        <>
                          <Check size={20} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Clipboard size={20} />
                          Copy to clipboard
                        </>
                      )}
                    </Button>
                    <p>
                      This citation was generated automatically. Please double
                      check the BibTeX before using it.
                    </p>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
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
