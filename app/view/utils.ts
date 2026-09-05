import fs from "fs";
import path from "path";
import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import "@citation-js/plugin-doi";
import "@citation-js/plugin-csl";
import { load } from "js-yaml";

export type Metadata = {
  type: string;
  publishedAt: Date;
  summary?: string;
  bibliography?: string;
  bibtex?: string;
  links?: Record<string, string>[];
};

function parseYAMLContent(yamlContent: object) {
  const data = yamlContent as Record<string, any>;

  const bibtex = data.bibtex || "";
  const cite = new Cite(bibtex);
  let output = cite.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  });
  output = output.replaceAll(/(Hirade\, K\. Y\.)/gm, "<u><b>$1</b></u>");

  const metadata: Metadata = {
    type: data.type,
    publishedAt: new Date(data.publishedAt),
    summary: data.summary || "",
    bibliography: output,
    bibtex: bibtex,
    links: data.links || [],
  };

  return { metadata };
}

function getYAMLFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".yaml");
}

function readYAMLFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const yamlContent = load(rawContent) as object;
  return parseYAMLContent(yamlContent);
}

function getYAMLData(dir: string) {
  const yamlFiles = getYAMLFiles(dir);
  return yamlFiles.map((file) => {
    const { metadata } = readYAMLFile(path.join(dir, file));

    return {
      metadata,
    };
  });
}

export function getContents() {
  return getYAMLData(path.join(process.cwd(), "app", "view", "contents"));
}
