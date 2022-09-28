import moment from "moment";
import Link from "next/link";
import { SectionText } from "../../styles/GlobalComponents";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
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
      <AuthorInfo author={post.author} />
    </PostCard>
  );
};

export default Posts;
