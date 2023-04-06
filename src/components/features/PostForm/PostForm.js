import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, editPost } from "../../../redux/postsRedux";
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import stringToDate from '../../../utils/stringToDate';
import dateToString from '../../../utils/dateToString';
import { useForm } from "react-hook-form";

const PostForm = props => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [title, setTitle] = useState(props.post ? props.post.title : '');
  const [author, setAuthor] = useState(props.post ? props.post.author : '');
  const [publishedDate, setPublishedDate] = useState(props.post ? props.post.publishedDate : '');
  const [shortDescription, setShortDescription] = useState(props.post ? props.post.shortDescription : '');
  const [content, setContent] = useState(props.post ? props.post.content : '');
  const [dateError, setDateError] = useState(false);
  const [contentError, setContentError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setDateError(!publishedDate);
    setContentError(!content);
    
    if (publishedDate && content) {
      const post = { title: title, author: author, publishedDate: publishedDate, shortDescription: shortDescription, content: content };
      
      if (props.isNewPost) {
        dispatch(addPost(post));
      } else {
        post.id = props.post.id;
        dispatch(editPost(post));
      }
      navigate('/');
    }
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Enter title">
          </Form.Control>
          {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min 3 sings)</small>}
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            value={author}
            onChange={e => setAuthor(e.target.value)}
            placeholder="Enter author">
          </Form.Control>
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min 3 sings)</small>}
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={4} controlId="postPublishedDate">
          <Form.Label>Published</Form.Label>
          <DatePicker dateFormat='yyyy-MM-dd' selected={publishedDate && stringToDate(publishedDate)} onChange={date => setPublishedDate(dateToString(date))} />
          {dateError && <small className="d-block form-text text-danger mt-2">Pick a date</small>}
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postShortDescription">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register("shortDescription", { required: true, minLength: 20 })}
            as="textarea"
            rows="4"
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            placeholder="Leave a comment here">
          </Form.Control>
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Description is too short (min 20 sings)</small>}
        </Form.Group>
      </Row>
      <Row className="mt-3">
        <Form.Group as={Col} md={8} controlId="postContent">
          <Form.Label>Main Content</Form.Label>
          <ReactQuill theme="snow" value={content} onChange={setContent} placeholder="Leave a main content here" />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
      </Row>
        <Button className="mt-3" variant="primary" type="submit">
          {
            props.isNewPost ? 'Add post' : 'Edit post'
          }
        </Button>
    </Form>
  );
};

export default PostForm;