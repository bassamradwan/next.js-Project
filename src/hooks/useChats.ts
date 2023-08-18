import { firebaseApp } from "@/lib/firestore";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  onSnapshot,
  or,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Chat, Id } from "@/types";

const fireStore = getFirestore(firebaseApp);

const getChats = (id: Id | Id[]) => {
  const chatsCol = collection(fireStore, "chats");
  if (Array.isArray(id)) {
    let ids = [+id[0], +id[1]];
    let idsReverse = [+id[1], +id[0]];
    return query(
      chatsCol,
      or(where("between", "==", ids), where("between", "==", idsReverse)),
      orderBy("send_at"),
    );
  }

  return query(chatsCol, where("between", "array-contains", +id), orderBy("send_at"));
};

const useChats = (id: Id[] | Id | null) => {
  const [chats, setChats] = useState({});
  const [loading, setLoading] = useState(false);

  const sendMessage = useCallback(async (message: Chat) => {
    const chatsCol = collection(fireStore, "chats");
    setLoading(true);
    await addDoc(chatsCol, message);
    setLoading(false);
  }, []);

  const chatsArray = useMemo(() => {
    return Object.values<Chat>(chats);
  }, [chats]);

  const getChatByIds = useCallback(
    (ids: Id[]) => {
      return (
        chatsArray.filter(
          chat => chat.between.includes(+ids[0]) && chat.between.includes(+ids[1]),
        ) || []
      );
    },
    [chatsArray],
  );

  const updateSeen = useCallback(
    async (ids: Id[]) => {
      const chats = getChatByIds(ids);
      for (const chat of chats) {
        if (chat.seen) continue;
        const chatsCol = doc(fireStore, "chats", String(chat.id));
        await updateDoc(chatsCol, {
          seen: true,
        });
      }
    },
    [getChatByIds],
  );

  const deleteChat = useCallback(
    async (ids: Id[]) => {
      const chats = getChatByIds(ids);
      for (const chat of chats) {
        const chatsCol = doc(fireStore, "chats", String(chat.id));
        await deleteDoc(chatsCol);
      }
    },
    [getChatByIds],
  );

  useEffect(() => {
    const fetchChat = () => {
      if (!id) return;
      onSnapshot(getChats(id), snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === "added") {
            setChats(prev => {
              return { ...prev, [change.doc.id]: { ...change.doc.data(), id: change.doc.id } };
            });
          }

          if (change.type === "modified") {
            setChats(prev => {
              return { ...prev, [change.doc.id]: { ...change.doc.data(), id: change.doc.id } };
            });
          }

          if (change.type === "removed") {
            setChats(prev => {
              const newChats = { ...prev };
              // @ts-ignore
              delete newChats[change.doc.id];
              return newChats;
            });
          }
        });
      });
    };

    fetchChat();
    return () => {
      setChats([]);
    };
  }, [id]);

  return { chats: chatsArray, loading, sendMessage, getChatByIds, updateSeen, deleteChat };
};

export default useChats;
