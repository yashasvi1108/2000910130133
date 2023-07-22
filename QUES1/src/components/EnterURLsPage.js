import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; 

const EnterURLsPage = () => {
  const [urls, setUrls] = useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/mergedNumbers?${urls.map((url) => `url=${encodeURIComponent(url)}`).join('&')}`);
  };

  return (
    <div>
      <h1>Enter URLs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={urls}
          onChange={(e) => setUrls(e.target.value.split('\n').map((url) => url.trim()))}
          placeholder="Enter URLs (one per line)"
          required
        />
        <button type="submit">Get Merged Numbers</button>
      </form>
    </div>
  );
};

export default EnterURLsPage;
