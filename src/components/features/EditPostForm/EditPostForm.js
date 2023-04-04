import PostForm from "../PostForm/PostForm";
import { useParams, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(posts => getPostById(posts, id));

  if(!postData) return <Navigate to="/" />

  return (
    <PostForm isNewPost={false} post={postData} />
  );
};

export default EditPostForm;