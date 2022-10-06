import Categories from "../components/Categories/Categories";
import Posts from "../components/Posts/Posts";
import PostWidget from "../components/PostWidget/PostWidget";
import { Layout } from "../layout/Layout";
import { getPosts } from "../services";
import {
  AsideContainer,
  AsideSection,
  Section,
} from "../styles/GlobalComponents";

const Home = ({ posts }) => (
  <Layout>
    <Section>
      {posts.map((post, index) => (
        <Posts post={post.node} key={post.node.title} />
      ))}
    </Section>
    <AsideContainer>
      <AsideSection>
        <PostWidget />
        <Categories />
      </AsideSection>
    </AsideContainer>
  </Layout>
);

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return { props: { posts } };
}

export default Home;
