import React from "react";
import InstagramEmbed from "react-instagram-embed";

const accessToken = process.env.ACCESS_TOKEN;

const Preview = ({ value }) => {
  const { url } = value;
  if (!url) {
    return <p>Missing URL for Instagram post</p>;
  }

  return (
    <InstagramEmbed
      clientAccessToken = '602314314308541|88520117e2e8efca9fdfdd7264892086'
      url={url}
      maxWidth={480}
      containerTagName="div"
      injectScript
    />
  )
}

export default {
    type: "object",
    name: "instagramPost",
    title: "Instagram Post",
    fields: [
      {
        name: "url",
        type: "url",
        description: "Visit an Instagram post in a browser and copy the URL."
      }
    ],
    preview: {
        select: {
            url: 'url'
        },
        component: Preview
    }
  };