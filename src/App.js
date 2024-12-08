import React, { useState, useEffect } from 'react';
import UserBox from './components/UserBox.jsx';
import Edit from './components/Edit.jsx';

function App() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Handle like button click
  const handleLikeClick = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, liked: !user.liked } : user
    );
    setUsers(updatedUsers);
  };

  // Handle edit button click to open modal
  const handleEditClick = (user) => {
    setCurrentUser(user); // Set the user to be edited
    setIsModalOpen(true); // Open the modal
  };

  // Handle save button in modal
  const handleSaveEdit = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setIsModalOpen(false); // Close the modal
  };

  // Handle remove button click
  const handleRemoveClick = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="container">
      {users.map((user) => (
        <UserBox
          key={user.id}
          user={user}
          onLikeClick={handleLikeClick}
          onEditClick={handleEditClick}
          onRemoveClick={handleRemoveClick}
        />
      ))}

      {/* Modal for editing user */}
      {isModalOpen && currentUser && (
        <Edit
          user={currentUser}
          onSave={handleSaveEdit}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
