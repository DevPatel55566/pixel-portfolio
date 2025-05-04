import socket from "@/lib/socket";
import { useState } from "react";
import { useChatStore } from "@/store/useChatStore";

const MessageInput = () => {
    const [text, setText] = useState('');
    const { user } = useChatStore();  // Get the user from the store

    const sendMessage = () => {
        if (!text.trim()) return;  // Don't send empty messages
        const msg = `${user.displayName}: ${text}`;  // Format the message
        socket.emit('message', msg);  // Send the message to the server
        setText('');  // Clear the input field
    };

    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}  // Update state as user types
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}  // Send on Enter key
                placeholder="Type a message"
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default MessageInput;
