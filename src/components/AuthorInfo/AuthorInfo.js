import {
  AuthorContainer,
  AuthorText,
  AuthorPhoto,
  AuthorDataContainer,
} from "./AuthorInfoStyles";
import { AiFillCalendar } from "react-icons/ai";
import moment from "moment";

const AuthorInfo = ({ author, dateCreated }) => {
  console.log(author);
  return (
    <AuthorContainer>
      <AuthorDataContainer>
        <AuthorPhoto alt={author.name} src={author.photo.url} />
        <AuthorText>{author.name}</AuthorText>
      </AuthorDataContainer>
      <AuthorDataContainer>
        <AiFillCalendar size="1.5rem" />
        <AuthorText>{moment(dateCreated).format("MMM DD YYYY")}</AuthorText>
      </AuthorDataContainer>
    </AuthorContainer>
  );
};

export default AuthorInfo;
