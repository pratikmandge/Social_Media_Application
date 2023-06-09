/**
 * This is a React function that sets up the routing for different pages in a social media app.
 * @returns The App component is being returned, which contains a Router component from
 * react-router-dom and multiple Route components that define the paths and components to render for
 * each path.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import NotificationPage from './pages/NotificationPage';
import SearchPage from './pages/SearchPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import FriendsPage from './pages/FriendsPage';
import GroupsPage from './pages/GroupsPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import ViewPostPage from './pages/ViewPostPage';
import CreateMessagePage from './pages/CreateMessagePage';
import ViewMessagePage from './pages/ViewMessagePage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/common/Navbar';

export default function App() {
  return (
    <Router>
      <div className="App" style={{ paddingTop: '60px' }}>
        <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/explore" element={<ExplorePage/>} />
            <Route path="/notifications" element={<NotificationPage/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/profile/:userId" element={<ProfilePage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
            <Route path="/friends" element={<FriendsPage/>} />
            <Route path="/groups" element={<GroupsPage/>} />
            <Route path="/create-post" element={<CreatePostPage/>} />
            <Route path="/edit-post/:postId" element={<EditPostPage/>} />
            <Route path="/view-post/:postId" element={<ViewPostPage/>} />
            <Route path="/create-message" element={<CreateMessagePage/>} />
            <Route path="/view-message/:messageId" element={<ViewMessagePage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </div>
    </Router>
  );
}