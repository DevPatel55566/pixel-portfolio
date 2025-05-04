import { useChatStore } from "@/store/useChatStore";
import { useEffect } from "react";
import socket from "@/lib/socket";

const ChatBox = () => {
    const { messages, addMessage } = useChatStore();

    useEffect(() => {
        socket.on('message', addMessage);  // Listen for messages from the server
        return () => {
            socket.off('message', addMessage);  // Clean up listener when component unmounts
        };
    }, [addMessage]);

    return (
        <div>
            {messages.map((msg, i) => (
                <p key={i}>{msg}</p>  // Render messages
            ))}
        </div>
    );
};

export default ChatBox;
