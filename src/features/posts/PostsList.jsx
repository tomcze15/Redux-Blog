import { useSelector } from 'react-redux';

import PostExcerpt from './PostExcerpt';

import { selectPostByIds, getPostsError, getPostsStatus } from './postsSlice';

const PostsList = () => {
  const orderedPostIds = useSelector(selectPostByIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  let content;
  switch (postStatus) {
    case 'loading':
      content = <p>Loading...</p>;
      break;
    case 'succeeded':
      content = orderedPostIds.map((postId) => (
        <PostExcerpt key={postId} postId={postId} />
      ));
      break;
    case 'failed':
      content = <p>{error}</p>;
      break;
    default:
  }

  return <section>{content}</section>;
};

export default PostsList;
