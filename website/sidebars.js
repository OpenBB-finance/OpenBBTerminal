/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: "category",
      label: "OpenBB Terminal Pro",
      items: [{ type: "autogenerated", dirName: "pro" }],
      customProps: {
        hiddenByDefault: true,
      },
    },
    {
      type: "category",
      label: "OpenBB Excel Add-in",
      items: [{ type: "autogenerated", dirName: "excel" }],
      customProps: {
        hiddenByDefault: true,
      },
    },
    {
      type: "category",
      label: "OpenBB Platform",
      items: [
        { type: "autogenerated", dirName: "platform" }],
    },
    {
      type: "category",
      label: "OpenBB Terminal",
      items: [{ type: "autogenerated", dirName: "terminal" }],
    },
    {
      type: "category",
      label: "OpenBB Bot",
      items: [{ type: "autogenerated", dirName: "bot" }],
    },
    {
      type: "html",
      value: '<span class="sidebar-divider" />',
    },
    {
      type: "html",
      className: "sidebar-title",
      value: "LEGACY",
      defaultStyle: true,
    },
    {
      type: "category",
      label: "OpenBB SDK",
      items: [{ type: "autogenerated", dirName: "sdk" }],
    },
    // Can do stuff like this too
    // {
    //   type: "html",
    //   defaultStyle: true,
    //   className: "powered-by-banner",
    //   value: `
    //     <span>Powered by</span>
    //     <img src="/img/docusaurus.png" alt="Docusaurus Logo" />
    //   `,
    // },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
