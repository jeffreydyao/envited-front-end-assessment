import Head from "next/head";

interface LayoutProps {
  /** Title displayed in `<head>` */
  title: string;
  /** Description displayed in `<head>` */
  description: string;
}

/**
 * Wrapper containing `next/head` component.
 * ## API
 * - `title`: Page title in `head` tag
 * - `description`: Page description in `head` tag
 */
export default function Layout(props: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
