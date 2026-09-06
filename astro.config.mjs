// @ts-check

import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// A markdown image alone in a paragraph becomes <figure> with its alt text as the caption.
const markdownFigures = {
	name: 'markdown-figures',
	element: {
		filter: ['p'],
		visit(node, ctx) {
			const content = node.children.filter(
				(child) => !(child.type === 'text' && child.value.trim() === ''),
			);
			const img = content[0];
			if (content.length !== 1 || img?.type !== 'element' || img.tagName !== 'img') return;

			const alt = typeof img.properties?.alt === 'string' ? img.properties.alt : '';
			const children = [img];
			if (alt) {
				children.push({
					type: 'element',
					tagName: 'figcaption',
					properties: {},
					children: [{ type: 'text', value: alt }],
				});
			}
			ctx.replaceNode(node, { type: 'element', tagName: 'figure', properties: {}, children });
		},
	},
};

// https://astro.build/config
export default defineConfig({
	site: 'https://td-bn.github.io',
	integrations: [mdx(), sitemap()],
	markdown: {
		processor: satteri({ hastPlugins: [markdownFigures] }),
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
