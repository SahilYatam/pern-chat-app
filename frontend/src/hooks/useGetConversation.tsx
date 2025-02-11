import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<ConversationType[]>([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/messages/conversations");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (error: any) {
        toast.error(error.messages);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversation };
};

export default useGetConversation;
