import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url'


const imgBuilder = imageUrlBuilder({
  projectId: 'ulqdo09f',
  dataset: 'production'
})


const serializers = {
      h2: (props) => <h2 className={'font-semibold text-2xl mt-5 py-4 text-center'} {...props} />,
      link: ({ children, mark }) => <a className='text-primary underline cursor-pointer' href={children.href}>{children}</a>,
      // image: ({ asset }) => <pre>{JSON.stringify(imgBuilder.image(asset._ref), null, 2)}</pre>,
      image: ({ asset }) => <img className='mx-auto pb-3' src={imgBuilder.image(asset._ref)}  />,

  types: {
    block: (props) => {
      const { style = "normal" } = props.node;

      if (/^h\d/.test(style)) {
        const level = style.replace(/[^\d]/g, "");
        return React.createElement(
          style,
          { className: `heading-${level}` },
          props.children
        );
      }

      if (style === "blockquote") {
        return <blockquote>- {props.children}</blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
    code: (props) =>
      console.log("code block", props) || (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
  },
  list: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <ul>{props.children}</ul>
    ) : (
      <ol>{props.children}</ol>
    )),
  listItem: (props) =>
    console.log("list", props) ||
    (props.type === "bullet" ? (
      <li>{props.children}</li>
    ) : (
      <li>{props.children}</li>
    )),
  marks: {
    strong: (props) =>
      console.log("strong", props) || <strong>{props.children}</strong>,
    em: (props) => console.log("em", props) || <em>{props.children}</em>,
    code: (props) => console.log("code", props) || <code>{props.children}</code>
  }
}

export default serializers