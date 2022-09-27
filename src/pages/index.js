import Categories from "../components/Categories/Categories";
import PostCard from "../components/Posts/Posts";
import PostWidget from "../components/PostWidget/PostWidget";
import { Layout } from "../layout/Layout";
import {
  AsideContainer,
  AsideSection,
  Section,
} from "../styles/GlobalComponents";

const posts = [
  {
    title: "some title",
    abstract: "Some quick description about the blogpost",
  },
  {
    title: "some title",
    abstract: "Some quick description about the blogpost",
  },
];

const Home = () => (
  <Layout>
    <Section>
      {posts.map((post, index) => (
        <PostCard post={post} key={post.title} />
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

export default Home;
