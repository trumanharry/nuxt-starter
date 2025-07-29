// stackbit.config.ts
import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDir: '.',
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/',
          filePath: 'pages/index.vue',
          fields: [
            {
              type: 'reference',
              name: 'data',
              models: ['Data'],
            },
          ],
        },
        {
          name: 'Data',
          type: 'data',
          filePath: 'data/index.json',
          fields: [
            { type: 'object', name: 'hero', fields: [
              { type: 'string', name: 'title', label: 'Title'},
              { type: 'string', name: 'description', label: 'Description'},
              { type: 'image', name: 'image', label: 'Image'},
              { type: 'string', name: 'imageAlt', label: 'Image Alt Text'},
              { type: 'list', name: 'buttons', items: { type: 'object', fields: [
                { type: 'string', name: 'label', label: 'Label'},
                { type: 'string', name: 'url', label: 'URL'}
              ]}}
            ]},
            { type: 'object', name: 'testimonials', fields: [
              { type: 'string', name: 'title', label: 'Title'},
              { type: 'string', name: 'description', label: 'Description'},
              { type: 'list', name: 'items', items: { type: 'object', fields: [
                { type: 'string', name: 'quote', label: 'Quote'},
                { type: 'object', name: 'author', fields: [
                  { type: 'string', name: 'name', label
