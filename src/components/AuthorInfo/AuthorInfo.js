import {
  AuthorContainer,
  AuthorName,
  AuthorPhoto,
  AuthorPhotoContainer,
} from "./AuthorInfoStyles";

const AuthorInfo = ({ author }) => {
  console.log(author);
  return (
    <AuthorContainer>
      <AuthorPhotoContainer>
        <AuthorPhoto alt={author.name} src={author.photo.url} />
        <AuthorName>{author.name}</AuthorName>
      </AuthorPhotoContainer>
    </AuthorContainer>
  );
};

export default AuthorInfo;
