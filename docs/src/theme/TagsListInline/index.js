// Ejected from Component: TagsListInline
// Changes:
// - Added Comments H2 Heading
// - Added Div element with giscus class

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Tag from '@theme/Tag';
import styles from './styles.module.css';

// Added dependencies
import CommemtSection from '../../components/CommentSection.js';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function TagsListInline({tags}) {
  return (
    <>
      <b>
        <Translate
          id="theme.tags.tagsListLabel"
          description="The label alongside a tag list">
          Tags:
        </Translate>
      </b>
      <ul className={clsx(styles.tags, 'padding--none', 'margin-left--sm')}>
        {tags.map(({label, permalink: tagPermalink}) => (
          <li key={tagPermalink} className={styles.tag}>
            <Tag label={label} permalink={tagPermalink} />
          </li>
        ))}
      </ul>

      <BrowserOnly fallback={<div>Loading Comments...</div>}>
        <CommemtSection />
      </BrowserOnly>
    </>
  );
}
