import { useSelector } from 'react-redux/es/exports';
import { selectAllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  console.log('Author', userId);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
