import { firebaseApp } from "@/lib/firestore";
import { addDoc, collection, getFirestore, onSnapshot, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Chat, Id } from "@/types";

const fireStore = getFirestore(firebaseApp);

const getChats = (id: Id) => {
  const chatsCol = collection(fireStore, "chats");
  return query(chatsCol, where("between", "array-contains-any", [id, 7]));
};

const useChats = (id: Id | undefined) => {
  const [chats, setChats] = useState({});
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (message: Chat) => {
    const chatsCol = collection(fireStore, "chats");
    setLoading(true);
    await addDoc(chatsCol, message);
    setLoading(false);
  }, []);

  useEffect(() => {
    onSnapshot(getChats(id as Id), snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          setChats(prev => {
            return {...prev, [change.doc.id]: change.doc.data()};
          });
        }
      });
    });

    return () => {
      setChats([]);
    };
  }, [id]);

  return { chats: Object.values<Chat>(chats), loading, sendMessage };
};

export default useChats;
