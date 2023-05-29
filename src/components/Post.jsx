import React, { useEffect, useState } from 'react';
import './post.css'; // Import CSS file for styling
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Post = () => {

  const { id } = useParams()
  console.log(id)

  const [post, setPost] = useState('');
  useEffect(() => {

    let test = () => {
      axios.get(`http://localhost:4545/post/${id}`).then((res) => {
        console.log(res.data)
        setPost(res.data)
      })

    }
    test()
  }, [])





  return (
    <div className="agricultural-disease-post">
      <img src={'http://localhost:4545/' + post.path} alt={post.name} className="disease-image" />
      <h2 className="disease-name">{post.name}</h2>
      <p className="disease-description">{post.description}</p>
      <div className="disease-details">
        <h3 className="section-heading">Symptoms:</h3>
        <p>{post.symptoms}</p>
        <h3 className="section-heading">Treatment:</h3>
        <p>{post.treatment}</p>
        <h3 className="section-heading">Prevention:</h3>
        <p>{post.prevention}</p>
      </div>
    </div>
  );
};

export default Post;
