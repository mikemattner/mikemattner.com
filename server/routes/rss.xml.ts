import { serverQueryContent } from '#content/server';
import RSS from 'rss';
import { toHtml } from 'hast-util-to-html';

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    title: 'Mike Mattner',
    site_url: 'https://mikemattner.com',
    feed_url: `https://mikemattner.com/rss.xml`,
  });

  const docs = await serverQueryContent(event).sort({ date: -1 }).where({ _partial: false }).find();
  const recursivelyPatchChildren = (node: any) => {
    if (node.type === 'text') {
      return node;
    } else if (node.tag === 'code' && node.props.language) {
      node.props.lang = node.props.language;
      node.children = [{ type: 'text', value: node.props.code }];
      delete node.props.language;
      delete node.props.code;
    }
    node.tagName = node.tag;
    node.properties = node.props;
    node.children = node.children.map(recursivelyPatchChildren);
    return node;
  };

  for (const doc of docs) {
    // TODO: This is a hack to get the content to render correctly. Update to eventually use this.
    let content;
    if (doc.body) {
      doc.body.children = doc.body.children.map(recursivelyPatchChildren);
      content = toHtml(doc.body as any);
    } else {
      content = doc.description;
    }

    feed.item({
      title: doc.title ?? '-',
      url: `https://mikemattner.com${doc._path}`,
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.res.setHeader('content-type', 'text/xml');
  event.res.end(feedString);
});
