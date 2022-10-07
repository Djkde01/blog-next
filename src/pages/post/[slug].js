import AuthorDetails from "../../components/AuthorDetails/AuthorDetails";
import Categories from "../../components/Categories/Categories";
import Comments from "../../components/Comments/Comments";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import PostDetailed from "../../components/PostDetailed/PostDetailed";
import PostWidget from "../../components/PostWidget/PostWidget";
import { Layout } from "../../layout/Layout";
import { getPostDetailed, getPosts } from "../../services";
import {
  AsideContainer,
  AsideSection,
  Section,
} from "../../styles/GlobalComponents";

const PostPage = ({ post }) => {
  return (
    <Layout>
      <Section>
        <PostDetailed post={post} />
        <AuthorDetails author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} />
      </Section>
      <AsideContainer>
        <AsideSection>
          <PostWidget
            slug={post.slug}
            categories={post.categories.map((category) => category.slug)}
          />
          <Categories />
        </AsideSection>
      </AsideContainer>
    </Layout>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  const data = await getPostDetailed(params.slug);

  return { props: { post: data } };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
