import { postDetailsFragment, Post } from "components/post";
import gql from "graphql-tag";
import { fetchProps } from "lib/client";
import Link from "next/link";

const query = gql`
  query PostQuery($slug: String) {
    post(filters: { slug: $slug }) {
      ...postDetails
    }
  }
  ${postDetailsFragment}
`;

export default function PostPage({ data, error }) {
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Post postDetails={data.post}></Post>
    </div>
  );
}

export function getServerSideProps(context) {
  return fetchProps(query, {
    slug: context.query.slug,
  });
}