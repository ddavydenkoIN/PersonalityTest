import { FooterLinkColumn } from '../../../../models/interfaces';

export class FooterUtils {
  static footerLinkColumns: FooterLinkColumn[] = [
    {
      title: 'BUILD',
      links: [
        {
          label: 'Docs',
          url: 'https://www.google.com/'
        },
        {
          label: 'GitHub',
          url: 'https://www.google.com/'
        },
        {
          label: 'Chat on Discord',
          url: 'https://www.google.com/'
        },
        {
          label: 'Status',
          url: 'https://www.google.com/'
        }]
    },
    {
      title: 'APPLY',
      links: [
        {
          label: 'Grants',
          url: 'https://www.google.com/'
        },
        {
          label: 'Collective',
          url: 'https://www.google.com/'
        },
        {
          label: 'Careers',
          url: 'https://www.google.com/'
        }
      ]
    },
    {
      title: 'LEARN',
      links: [
        {
          label: 'About',
          url: 'https://www.google.com/'
        },
        {
          label: 'Blog',
          url: 'https://www.google.com/'
        },
        {
          label: 'Podcast',
          url: 'https://www.google.com/'
        },
        {
          label: 'Videos',
          url: 'https://www.google.com/'
        }]
    },
  ];
}
