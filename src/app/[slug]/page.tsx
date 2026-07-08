import React from "react";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import CaseStudyClient from "@/components/sections/CaseStudyClient";

// 1. Read JSON data at build time
function getCaseStudies() {
  const filePath = path.join(process.cwd(), "src/data/case-studies.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

// 2. Generate static params for all slugs
export async function generateStaticParams() {
  const caseStudies = getCaseStudies();
  return Object.keys(caseStudies).map((slug) => ({
    slug: slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const caseStudies = getCaseStudies();
  const data = caseStudies[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  // Pre-map all slugs to pass to the footer
  const allSlugs = Object.keys(caseStudies).map(slug => ({
    slug,
    title: caseStudies[slug].hero.title
  }));

  return <CaseStudyClient data={data} allSlugs={allSlugs} />;
}
