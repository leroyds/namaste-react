import React, { useState, useEffect } from 'react';
// import './style.css';

export default function Test() {
  const [phoneNo, setPhoneNo] = useState('9527295378');
  const [displayNo, setDisplayNo] = useState(phoneNo);
  const [showInputBox, setShowInputBox] = useState(false);

  // on mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', { xhost: 'asd' })
      .then((res) => res.json())
      .then((res) => {
        const title = res.title;
        if (title) setPhoneNo(title);
      });
  }, []);

  const enableInputBox = () => {
    setShowInputBox(true);
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setDisplayNo(value);
  };

  const onSave = () => {
    setPhoneNo(displayNo);
    setShowInputBox(false);
  };

  return (
    <div className="container">
      {showInputBox ? (
        <input value={displayNo} onChange={(e) => onInputChange(e)} />
      ) : (
        <h1 onClick={enableInputBox}>{phoneNo}</h1>
      )}
      <button onClick={onSave}>Save</button>
    </div>
  );
}
