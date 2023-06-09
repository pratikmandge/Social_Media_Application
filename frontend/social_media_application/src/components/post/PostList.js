import React from 'react';
import Post from './Post';
import '../../../src/assets/styles/PostList.css';

const PostList = () => {
  // Dummy data for testing purposes
  const posts = [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Pratik M',
        avatarUrl: 'https://via.placeholder.com/50',
      },
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      createdAt: new Date('2023-05-18T10:00:00Z'),
      comments: [
        {
          id: 1,
          author: {
            id: 2,
            name: 'Jane Smith',
            avatarUrl: 'https://via.placeholder.com/50',
          },
          content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          createdAt: new Date('2023-05-19T10:10:00Z'),
        },
      ],
    },

    {
      id: 2,
      author: {
        id: 3,
        name: 'Bhavana G',
        avatarUrl: 'https://via.placeholder.com/50',
      },
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      createdAt: new Date('2023-05-15T09:30:00Z'),
      comments: [],
    },

    {
      id: 3,
      author: {
        id: 3,
        name: 'Vyakatesh s',
        avatarUrl: 'https://via.placeholder.com/50',
      },
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      createdAt: new Date('2029-05-11T09:30:00Z'),
      comments: [],
    },
  ];

  return (
    <div className="post-list-container">
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;