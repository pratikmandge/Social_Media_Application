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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/explore" component={ExplorePage} />
        <Route path="/notifications" component={NotificationPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile/:userId" component={ProfilePage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/friends" component={FriendsPage} />
        <Route path="/groups" component={GroupsPage} />
        <Route path="/create-post" component={CreatePostPage} />
        <Route path="/edit-post/:postId" component={EditPostPage} />
        <Route path="/view-post/:postId" component={ViewPostPage} />
        <Route path="/create-message" component={CreateMessagePage} />
        <Route path="/view-message/:messageId" component={ViewMessagePage} />
      </Routes>
    </Router>
  );
}

export default App;