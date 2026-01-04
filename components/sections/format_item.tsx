import { HTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

type Metadata = {
  type: string;
  title: string;
  publishedAt: Date;
  summary: string;
  bibliography?: string;
  image?: string;
};

interface ItemType extends HTMLAttributes<HTMLLIElement> {
  informations: {
    metadata: Metadata;
    slug: string;
    content: string;
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

        {/* {informations.content.length > 0 && (
          <Button asChild variant={"link"}>
            <Link href={`/view/${informations.slug}`}>
              Read more <ArrowRight size={20} />
            </Link>
          </Button>
        )} */}
      </div>
    </li>
  );
}
