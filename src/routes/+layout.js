import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml'; // for HTML
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';

export const prerender = true;

export async function load() {
   const page = await import(`../content/site-meta.md`);
   const { title, author, description, keywords } = page.metadata;

   // Register each imported language module
   hljs.registerLanguage('xml', xml); // for HTML
   hljs.registerLanguage('css', css);
   hljs.registerLanguage('json', json);
   hljs.registerLanguage('javascript', javascript);
   hljs.registerLanguage('typescript', typescript);
   hljs.registerLanguage('shell', shell);

   return {
      hljs,
      title,
      author,
      description,
      keywords
   }
}