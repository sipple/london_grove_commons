import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const stories = (await getCollection('stories', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'London Grove Commons',
    description: 'People-first stories from London Grove Township, PA — documenting local government in a human way.',
    site: context.site!,
    items: stories.map(story => ({
      title: story.data.title,
      description: story.data.description,
      pubDate: story.data.date,
      link: `/stories/${story.id.replace(/\.md$/, '')}`,
    })),
  });
}
