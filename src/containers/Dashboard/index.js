import React, { useState } from 'react';

const Dashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const [greeting, setGreeting] = useState('Hello, world!');
  return <h1>{greeting}</h1>;
};

export default Dashboard;
