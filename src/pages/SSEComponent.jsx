import React, { useEffect, useState } from "react";

const SSEComponent = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Initialize the EventSource for server-sent events
    const eventSource = new EventSource("http://localhost:4000/events");

    // Listen for incoming messages
    eventSource.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Handle errors
    eventSource.onerror = () => {
      console.error("EventSource connection failed.");
      eventSource.close();
    };

    // Cleanup the EventSource on component unmount
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Server-Sent Events</h1>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default SSEComponent;
