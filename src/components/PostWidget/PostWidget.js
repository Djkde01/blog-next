import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getFeaturedPosts, getSimilarPosts } from "../../services";
import {
  RelatedPostCard,
  RelatedPostDetails,
  RelatedPostImage,
  RelatedPostImageContainer,
  WidgetContainer,
  WidgetTitle,
} from "./PostWidgetStyles";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((results) =>
        setRelatedPosts(results)
      );
    } else {
      getFeaturedPosts().then((results) => setRelatedPosts(results));
    }
  }, [slug]);
  return (
    <WidgetContainer>
      <WidgetTitle>{slug ? "Related posts" : "Latest posts"}</WidgetTitle>
      {relatedPosts.map((post, index) => (
        <RelatedPostCard key={index}>
          <RelatedPostImageContainer>
            <RelatedPostImage alt={post.title} src={post.featuredImage.url} />
          </RelatedPostImageContainer>
          <RelatedPostDetails>
            <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </RelatedPostDetails>
        </RelatedPostCard>
      ))}
    </WidgetContainer>
  );
};

export default PostWidget;
