import { useState, type PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { useServerInsertedHTML } from "next/navigation";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";

export const RootStyleRegistry = ({ children }: PropsWithChildren) => {
  const [cache] = useState(() => createCache());

  useServerInsertedHTML(() => {
    return (
      <script
        dangerouslySetInnerHTML={{
          __html: `</script>${extractStyle(cache)}<script>`,
        }}
      />
    );
  });

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00D9C8",
        },
      }}
    >
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </ConfigProvider>
  );
};
