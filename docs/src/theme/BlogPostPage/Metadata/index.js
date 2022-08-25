import React from 'react';
import {PageMetadata} from '@docusaurus/theme-common';
import {useBlogPost} from '@docusaurus/theme-common/internal';




const BlogPostPageMetadata = () => {
  const {assets, metadata} = useBlogPost();
  const {title, description, date, tags, authors, frontMatter} = metadata;
  const {keywords} = frontMatter;
  const image = assets.image ?? frontMatter.image;
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 500)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return null
  

  return (
  <PageMetadata
      title={title}
      description={description}
      keywords={keywords}
      image={image}>
      <meta property="og:type" content="article" />
      <script src="https://giscus.app/client.js"
        data-repo="joshpinto6/GodotMage"
        data-repo-id="R_kgDOHyCIow"
        data-category="Tutorial Discussions"
        data-category-id="DIC_kwDOHyCIo84CRA2O"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="0"
        data-emit-metadata="1"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="en"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> 
      <meta property="article:published_time" content={date} />
      {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
      {authors.some((author) => author.url) && (
        <meta
          property="article:author"
          content={authors
            .map((author) => author.url)
            .filter(Boolean)
            .join(',')}
        />
      )}
      {tags.length > 0 && (
        <meta
          property="article:tag"
          content={tags.map((tag) => tag.label).join(',')}
        />
      )}
    </PageMetadata>
  )
}

export default BlogPostPageMetadata

// export default function BlogPostPageMetadata() {
//   const {assets, metadata} = useBlogPost();
//   const {title, description, date, tags, authors, frontMatter} = metadata;
//   const {keywords} = frontMatter;
//   const image = assets.image ?? frontMatter.image;
//   return (
//     <PageMetadata
//       title={title}
//       description={description}
//       keywords={keywords}
//       image={image}>
//       <meta property="og:type" content="article" />
//       <script src="https://giscus.app/client.js"
//         data-repo="joshpinto6/GodotMage"
//         data-repo-id="R_kgDOHyCIow"
//         data-category="Tutorial Discussions"
//         data-category-id="DIC_kwDOHyCIo84CRA2O"
//         data-mapping="pathname"
//         data-strict="0"
//         data-reactions-enabled="0"
//         data-emit-metadata="1"
//         data-input-position="top"
//         data-theme="preferred_color_scheme"
//         data-lang="en"
//         data-loading="lazy"
//         crossorigin="anonymous"
//         async>
// </script> 
//       <meta property="article:published_time" content={date} />
//       {/* TODO double check those article meta array syntaxes, see https://ogp.me/#array */}
//       {authors.some((author) => author.url) && (
//         <meta
//           property="article:author"
//           content={authors
//             .map((author) => author.url)
//             .filter(Boolean)
//             .join(',')}
//         />
//       )}
//       {tags.length > 0 && (
//         <meta
//           property="article:tag"
//           content={tags.map((tag) => tag.label).join(',')}
//         />
//       )}
//     </PageMetadata>
//   );
// }
