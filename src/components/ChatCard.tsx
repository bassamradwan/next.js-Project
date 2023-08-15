import React, { memo } from "react";
import { Chat, Id } from "@/types";
import { Controller, useForm } from "react-hook-form";
import { Col, Input, Row } from "antd";
import { ChatOverflow } from "@/components/Profile/styles/styled.Chat";
import { Flex, FlexColumn, Message, SendButton } from "@/Styles/styled.general";
import useChats from "@/hooks/useChats";
import { yupResolver } from "@hookform/resolvers/yup";
import { Timestamp } from "firebase/firestore";
import * as yup from "yup";
import useUser from "@/hooks/useUser";

type ChatProps = {
  id: Id | null;
};

const schema = yup.object().shape({
  message: yup.string().required(),
});

const ChatCard = memo(function MemoChatCard({ id }: ChatProps) {
  const { chats, sendMessage } = useChats(id);
  const { user } = useUser();
  const {
    control,
    reset,
    getValues,
    formState: { isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSendMessage = async () => {
    if (!id) return;
    const chat: Chat = {
      id: Timestamp.now(),
      between: [user?.id as Id, id],
      content: getValues("message"),
      sender_id: user?.id as Id,
      send_at: Timestamp.now(),
    };
    await sendMessage(chat);
    reset();
  };

  return (
    <>
      <ChatOverflow>
        <div style={{ padding: 20 }}>
          {chats.map((chat, i) => (
            <FlexColumn
              alignItems={chat.sender_id == user?.id ? "end" : "start"}
              key={i}
              dir="auto"
            >
              <Flex justifyContent="space-between">
                <small>Send Date: {chat.send_at.toDate().toDateString()}</small>&nbsp;
                <small>Sender Id: {chat.sender_id}</small>
              </Flex>
              <Message>
                <Flex justifyContent={chat.sender_id == user?.id ? "end" : "start"}>
                  <p>{chat.content}</p>
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

        <Col span={4} md={{ span: 2 }}>
          <SendButton onClick={handleSendMessage} disabled={!isValid}>
            <img src={"/send.svg"} />
          </SendButton>
        </Col>
      </Row>
    </>
  );
});

export default ChatCard;
