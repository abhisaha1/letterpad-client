import gql from "graphql-tag";

import { LayoutFragment } from "lib/graphql";
import { footerStyles, themeVars } from "./Layout.css";
import { Header, headerFragment } from "./Header";
import Head from "next/head";
import { globalStyles } from "assets/css/style.css";

export const layoutFragment = gql`
  fragment layout on Query {
    settings {
      ... on Setting {
        site_footer
        subscribe_embed
        social_github
        social_facebook
        social_twitter
        css
      }

      ...headerSettings
    }
  }

  ${headerFragment}
`;

interface MetaProps {
  type: string;
  author: string;
  title: string;
  description: string;
  image: string;
  url: string;
  twitterHandle?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export default function SiteLayout({
  children,
  layout,
  metaProps,
  displayBanner,
}: {
  children: any;
  layout: LayoutFragment;
  metaProps: MetaProps;
  displayBanner?: boolean;
}) {
  const { settings } = layout;
  if (settings.__typename === "SettingError") return null;

  const description = metaProps.description || settings.site_description;
  return (
    <div className="theme-casper layout">
      <Head>
        <title>{metaProps.title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={metaProps.author} />
        <meta property="og:type" content={metaProps.type} />
        <meta property="og:title" content={metaProps.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaProps.image} />
        <meta property="og:url" content={metaProps.url} />
        <meta property="og:site_name" content={settings.site_title} />
        <meta
          property="article:published_time"
          content={metaProps.publishedAt}
        />
        <meta property="article:updated_time" content={metaProps.updatedAt} />
        <meta name="twitter:title" content={metaProps.title} />
        <meta name="twitter:description" content={metaProps.description} />
        <meta name="twitter:image" content={metaProps.image} />
        <meta name="twitter:site" content={"@" + metaProps.twitterHandle} />
        <meta name="twitter:creator" content={"@" + metaProps.twitterHandle} />
        <style>{settings.css}</style>
      </Head>
      <Header settings={settings} displayBanner={displayBanner}></Header>

      <main className="outer">{children}</main>

      <footer className="site-footer">
        <div className="site-footer-content inner">
          <section className="copyright">
            <SetDangerousHTML html={settings.site_footer} />
          </section>

          <SetDangerousHTML
            html={settings.subscribe_embed}
            className="subscribe"
          />

          <nav className="site-footer-nav">
            {settings.social_facebook && (
              <a href={settings.social_facebook} target="_blank" rel="noopener">
                Facebook
              </a>
            )}
            {settings.social_twitter && (
              <a href={settings.social_twitter} target="_blank" rel="noopener">
                Twitter
              </a>
            )}
            {settings.social_github && (
              <a href={settings.social_github} target="_blank" rel="noopener">
                Github
              </a>
            )}
          </nav>
        </div>
      </footer>

      <style jsx global>
        {themeVars}
      </style>
      <style jsx global>
        {footerStyles}
      </style>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  );
}

function SetDangerousHTML({
  html,
  id = "",
  className = "",
}: {
  html: string;
  id?: string;
  className?: string;
}) {
  if (!html) return null;

  return (
    <div
      id={id}
      className={className}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
