const fs = require('fs');
const path = require('path');

const pageFilePath = path.join(__dirname, '../src/app/work/[slug]/page.tsx');
let content = fs.readFileSync(pageFilePath, 'utf8');

const interfaceStart = content.indexOf('export interface CaseStudyData {') !== -1 ? content.indexOf('export interface CaseStudyData {') : content.indexOf('interface CaseStudyData {');
const objectEnd = content.indexOf('};', content.indexOf('export const caseStudies: Record<string, CaseStudyData> = {')) + 2;

const caseStudiesDataContent = content.substring(interfaceStart, objectEnd);
const newCaseStudiesData = `export ` + caseStudiesDataContent.replace('interface CaseStudyData {', 'interface CaseStudyData {');

fs.writeFileSync(path.join(__dirname, '../src/lib/caseStudiesData.ts'), newCaseStudiesData, 'utf8');

const remainingContent = content.substring(0, interfaceStart) + 
  `import { CaseStudyData, caseStudies } from '../../../lib/caseStudiesData';\n` + 
  content.substring(objectEnd);

fs.writeFileSync(pageFilePath, remainingContent, 'utf8');

const sitemapPath = path.join(__dirname, '../src/app/sitemap.ts');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
sitemapContent = sitemapContent.replace(`import { caseStudies } from './work/[slug]/page';`, `import { caseStudies } from '../lib/caseStudiesData';`);
fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

console.log('Extraction complete');
