# Next.js Personal Blog with Sanity CMS

This is a Next.js personal blog template integrated with Sanity CMS. It was created for my own personal use as a portfolio/blog website, but I have decided to share the codebase with the public so others may benefit from my work. It allows you to create and manage your blog posts using Sanity's content management system while leveraging the power and flexibility of Next.js for building server-side rendered and static websites. This template provides a clean and minimalistic design, ensuring a focused reading experience for your audience.

![Personal Blog Screenshot](screenshot.png)

## Features

- **Blog Management with Sanity CMS:** Create, edit, and manage your blog posts using Sanity's intuitive content management system.
- **Server-side Rendering (SSR):** Benefit from the server-side rendering capabilities of Next.js, providing fast and SEO-friendly blog pages.
- **Responsive Design:** The template is fully responsive, ensuring optimal viewing experience on various devices and screen sizes.
- **Code Highlighting:** Highlight your code snippets in blog posts for better readability and understanding.
- **Markdown Support:** Write your blog posts using Markdown syntax, making it easier to format and structure your content.
- **Customization:** Easily customize the template to match your branding and personal preferences.

## Getting Started

To get started with this personal blog template integrated with Sanity CMS, follow the steps below:

1. **Clone the repository:** Begin by cloning this repository to your local machine using the following command:

   ```
   git clone https://github.com/Erics1337/nextjs-sanity-portfolio-blog
   ```

2. **Install dependencies:** Navigate into the cloned repository and install the project dependencies by running the following command:

   ```
   cd next-portfolio-blog
   npm install
   ```

3. **Set up Sanity CMS:** Visit the [Sanity website](https://www.sanity.io) and create a new account. Set up a new project and obtain your Sanity project ID and dataset name.

4. **Configure Sanity CMS integration:** Open the `.env.local` file in the project's root directory and add your Sanity project ID and dataset name as environment variables:

   ```
   SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_DATASET=your-sanity-dataset
   ```

5. **Create Sanity schema and content:** Use Sanity's schema definition language to define your blog post structure, including fields such as title, content, author, and published date. Refer to the Sanity documentation for guidance on creating schemas and content.

6. **Customize the content and styling:** Customize the content in the `pages`, `components`, and `styles` directories to fit your needs. Update the images, colors, typography, and other elements to match your branding and personal style.

7. **Start the development server:** Once you have made the necessary customizations, start the development server with the following command:

   ```
   npm run dev
   ```

   This will start the server locally, and you can access your personal blog by visiting `http://localhost:3000` in your web browser.

## Deployment

To deploy your Next.js personal blog with Sanity CMS to a hosting platform, you can follow the official Next.js deployment guide: [Next.js Deployment](https://nextjs.org/docs/deployment).

Ensure that you set up the environment variables for your Sanity project ID and dataset in your deployment environment.

## Contributing

Contributions to this personal blog template are welcome. If you find any bugs, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use it for personal or commercial purposes.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Sanity CMS](https://www.sanity.io)
- [React](https://reactjs)