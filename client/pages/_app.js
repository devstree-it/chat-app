import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../hooks/index";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            name: "dc:creator",
            content: "Daniel Jebarson K",
          },
          {
            property: "application-name",
            httpEquiv: "application-name",
            content: "devstree-chat-app",
          },
        ]}
        title="WebChatApp - Chat"
        key="devstree-chat-app"
        description="devstree-chat-app done with nextJs where we can create and chat with friends. Realtime updates of message are available with color modes."
        canonical="https://github.com/daniel-jebarson/devstree-chat-app"
        openGraph={{
          title: "devstree-chat-application",
          description:
            "devstree-chat-app done with nextJs where we can create and chat with friends. Realtime updates of message are available with color modes.",
          type: "website",
          url: "https://devstree-chat-app-brown.vercel.app/",
          authors: [
            "https://avatars.githubusercontent.com/u/88134306?s=48&v=4",
          ],
          keywords: "devstree-chat-app",
          tags: [
            "devstree-chat-app",
            "Next-Js",
            "Socket-programming",
            "Chat-App",
            "MERN-App",
          ],
          images: [
            {
              url: "https://github.com/daniel-jebarson/devstree-chat-app/blob/main/client/public/vercel.svg",
              width: 800,
              height: 600,
              alt: "Icon",
            },
          ],
        }}
      />
      <Provider store={store}>
        <ChakraProvider resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
      <Analytics
        beforeSend={(event) => {
          if (event.url.includes("localhost")) {
            return null;
          }
          return event;
        }}
      />
    </React.Fragment>
  );
}

export default App;
