import Link from "next/link";
import { SectionText } from "../../styles/GlobalComponents";
import AuthorInfo from "../AuthorInfo/AuthorInfo";
import {
  FeaturedImage,
  FeaturedImageContainer,
  PostButton,
  PostCard,
  PostLinks,
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
      <AuthorInfo author={post.author} dateCreated={post.createdAt} />
      <SectionText>{post.abstract}</SectionText>
      <PostLinks>
        <PostButton href={post.slug}>Read more</PostButton>
      </PostLinks>
    </PostCard>
  );
};

export default Posts;
