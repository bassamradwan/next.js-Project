import React, { memo, useCallback, useEffect, useState } from "react";
import { Chat, Id, User } from "@/types";
import { Controller, useForm } from "react-hook-form";
import { Avatar, Button, Col, Input, Row, Spin } from "antd";
import { ChatHeader, ChatOverflow } from "@/components/Profile/styles/styled.Chat";
import { Flex, FlexColumn, Message, SendButton, SpinLight } from "@/Styles/styled.general";
import useChats from "@/hooks/useChats";
import { yupResolver } from "@hookform/resolvers/yup";
import { Timestamp } from "firebase/firestore";
import * as yup from "yup";
import useUser from "@/hooks/useUser";
import { useTranslations } from "next-intl";
import moment from "moment";

type ChatProps = {
  id: Id | null;
  receiver: User | null;
  onDelete: (ids: Id[]) => Promise<void>;
};

const schema = yup.object().shape({
  message: yup.string().required(),
});

const ChatCard = memo(function MemoChatCard({ id, receiver, onDelete }: ChatProps) {
  const t = useTranslations("Chat");
  const { user } = useUser();
  const [chatBetween, setChatBetween] = useState<Id[] | null>(null);
  const { chats, sendMessage, updateSeen, getChatByIds } = useChats(chatBetween);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      setChatBetween([receiver?.id, user?.id] as Id[]);
    }
  }, [id, receiver?.id, user?.id]);

  const getLatestMessage = useCallback(
    (sender_id: Id, receiver_id: Id) => {
      return getChatByIds([sender_id, receiver_id]).reverse()[0];
    },
    [getChatByIds],
  );

  useEffect(() => {
    if (chatBetween) {
      const latestMessage = getLatestMessage(user?.id as Id, receiver?.id as Id);
      latestMessage?.sender_id !== user?.id && updateSeen(chatBetween);
    }
  }, [chatBetween, getLatestMessage, receiver?.id, updateSeen, user?.id]);

  const {
    control,
    reset,
    getValues,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSendMessage = async () => {
    if (!receiver) return;
    const chat: Chat = {
      id: Timestamp.now(),
      between: [user?.id as Id, receiver.id],
      content: getValues("message"),
      sender_id: user?.id as Id,
      send_at: Timestamp.now(),
      seen: false,
    };
    await sendMessage(chat);
    reset();
  };
  const handleDelete = async () => {
    if (!chatBetween) return;
    setLoading(true);
    try {
      await onDelete(chatBetween);
    } catch (error) {}
    setLoading(false);
  };

  return (
    <>
      <ChatOverflow>
        <ChatHeader className={"backdrop-blur"}>
          <Flex justifyContent="space-between">
            <SpinLight>
              <Spin spinning={loading}>
                <Button type="text" danger onClick={handleDelete}>
                  <strong>{t("deleteChat")}</strong>
                </Button>
              </Spin>
            </SpinLight>
            <Flex justifyContent="end" gap={"10px"}>
              <FlexColumn>
                <strong>{receiver?.name}</strong>
              </FlexColumn>
              <Avatar src={receiver?.image} alt={receiver?.name[0].toUpperCase()} />
            </Flex>
          </Flex>
        </ChatHeader>
        <div style={{ padding: 20 }}>
          {chats.map((chat, i) => (
            <FlexColumn
              alignItems={chat.sender_id == user?.id ? "end" : "start"}
              key={i}
              dir="auto"
            >
              <Flex justifyContent="space-between">
                <small>{moment(chat.send_at.toDate()).calendar()}</small>&nbsp;
              </Flex>
              <Message myMessage={chat.sender_id === user?.id} dir={"auto"}>
                <Flex justifyContent={chat.sender_id == user?.id ? "end" : "start"}>
                  <p dir={"auto"}>{chat.content}</p>
                </Flex>
              </Message>
            </FlexColumn>
          ))}
        </div>
      </ChatOverflow>

      <Row gutter={4} justify={"space-between"} align={"middle"} style={{ padding: 20 }}>
        <Col span={20} md={{ span: 22 }}>
          <Controller
            name={"message"}
            control={control}
            render={({ field }) => (
              <Input
                value={field.value}
                onInput={field.onChange}
                onPressEnter={e => {
                  isValid && handleSendMessage();
                }}
                dir={"auto"}
                placeholder="Write Your Message Here"
              />
            )}
          />
        </Col>

        <Col
          span={2}
          md={{ span: 2 }}
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <SendButton onClick={handleSendMessage} disabled={!isValid}>
            <img src={"/send.svg"} />
          </SendButton>
        </Col>
      </Row>
    </>
  );
});

export default ChatCard;
