const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.abstract}
    </div>
  );
};

export default PostCard;
