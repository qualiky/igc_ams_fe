import { useEffect, useRef, useState } from "react";

export const useWebSocket = (getUrl) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    try {
      const url = getUrl();
      if (!url) throw new Error("WebSocket URL is null");

      socketRef.current = new WebSocket(url);

      socketRef.current.onopen = () => {
        console.log("WebSocket connected");
      };

      // socketRef.current.onmessage = (event) => {
      //   try {
      //     const data = JSON.parse(event.data);
      //     setMessages((prevMessages) => [...prevMessages, data]);
      //   } catch (error) {
      //     console.error("Error parsing WebSocket message:", error);
      //   }
      // };
      socketRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data);

        console.log("Received message:", data);
        if (data.type === "new_message") {
          setMessages((prevMessages) => [...prevMessages, data]);
        } else if (data.type === "online_count") {
          // setOnlineCount(data.count);
        }
      };

      socketRef.current.onerror = (error) => {
        console.error("WebSocket errorrrrrrrrrrrrrrrrrrrrrrr:", error);
      };

      socketRef.current.onclose = () => {
        console.log("WebSocket closed");
      };

      return () => {
        socketRef.current.close();
      };
    } catch (error) {
      console.error("WebSocket setup error:", error);
    }
  }, [getUrl]);

  const sendMessage = (message) => {
    if (socketRef.current) {
      socketRef.current.send(
        JSON.stringify({
          type: "message",
          message,
        })
      );
    }
  };

  return { messages, sendMessage };
};
