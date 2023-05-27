import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/my-docs/blog',
    component: ComponentCreator('/my-docs/blog', '87b'),
    exact: true
  },
  {
    path: '/my-docs/blog/archive',
    component: ComponentCreator('/my-docs/blog/archive', '077'),
    exact: true
  },
  {
    path: '/my-docs/blog/first-blog-post',
    component: ComponentCreator('/my-docs/blog/first-blog-post', 'bb1'),
    exact: true
  },
  {
    path: '/my-docs/blog/long-blog-post',
    component: ComponentCreator('/my-docs/blog/long-blog-post', '6b9'),
    exact: true
  },
  {
    path: '/my-docs/blog/mdx-blog-post',
    component: ComponentCreator('/my-docs/blog/mdx-blog-post', '86a'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags',
    component: ComponentCreator('/my-docs/blog/tags', '412'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/docusaurus',
    component: ComponentCreator('/my-docs/blog/tags/docusaurus', 'a65'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/facebook',
    component: ComponentCreator('/my-docs/blog/tags/facebook', '807'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hello',
    component: ComponentCreator('/my-docs/blog/tags/hello', '43c'),
    exact: true
  },
  {
    path: '/my-docs/blog/tags/hola',
    component: ComponentCreator('/my-docs/blog/tags/hola', '684'),
    exact: true
  },
  {
    path: '/my-docs/blog/welcome',
    component: ComponentCreator('/my-docs/blog/welcome', '29e'),
    exact: true
  },
  {
    path: '/my-docs/markdown-page',
    component: ComponentCreator('/my-docs/markdown-page', '940'),
    exact: true
  },
  {
    path: '/my-docs/docs',
    component: ComponentCreator('/my-docs/docs', 'b47'),
    routes: [
      {
        path: '/my-docs/docs/category/tutorial---basics',
        component: ComponentCreator('/my-docs/docs/category/tutorial---basics', '202'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/category/tutorial---extras',
        component: ComponentCreator('/my-docs/docs/category/tutorial---extras', 'baa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/intro',
        component: ComponentCreator('/my-docs/docs/intro', 'e8d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/congratulations', 'af7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-blog-post', 'e4b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-document', '64b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/create-a-page', 'af6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/deploy-your-site', 'cf8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/my-docs/docs/tutorial-basics/markdown-features', 'd85'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/my-docs/docs/tutorial-extras/manage-docs-versions', '611'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/my-docs/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/my-docs/docs/tutorial-extras/translate-your-site', 'fa3'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/my-docs/',
    component: ComponentCreator('/my-docs/', 'a26'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
