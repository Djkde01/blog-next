import moment from "moment";
import Link from "next/link";
import { SectionSubText, SectionText } from "../../styles/GlobalComponents";
import {
  FeaturedImage,
  FeaturedImageContainer,
  PostCard,
  PostTitle,
} from "./PostsStyles";

const Posts = ({ post }) => {
  return (
    <PostCard>
      <FeaturedImageContainer>
        <FeaturedImage src={post.featuredImage.url} alt={post.title} />
      </FeaturedImageContainer>
      <PostTitle data-before-content={post.title}>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </PostTitle>
      <SectionText>{post.abstract}</SectionText>
      <SectionSubText>This is the whole text</SectionSubText>
    </PostCard>
  );
};

export default Posts;
