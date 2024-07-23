import { useWebSocket } from "../../../hooks/use-websocket";
import { useSelector } from "react-redux";
import { selectJwtToken } from "../../../selectors/selectors";

const GetActiveStatus = () => {
  const jwtToken = useSelector(selectJwtToken);
  const getStatusWebSocketUrl = () => {
    if (!jwtToken) return null;
    return `ws://localhost:8000/ws/online_status/?token=${jwtToken}`;
  };

  const { messages } = useWebSocket(getStatusWebSocketUrl);
  return (
    <div>
      <h1>Online Status</h1>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.status}</div>
        ))}
      </div>
    </div>
  );
};

export default GetActiveStatus;
