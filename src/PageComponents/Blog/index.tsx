import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { styles } from './Styles';

import { blogsList } from '@public/dummyData';
import { CommentIcon } from '@public/dummyData/Icons';

import { Text } from '@src/Components/Text';
import Wrapper from '@src/Components/Wrapper';
import Overlay from '@src/Components/Overlay';
import { Title } from '@src/Components/Title';
import { FadingContent } from '@src/Components/FadingContent';

const BlogItem = () => {
  const { t } = useTranslation('blogs');

  const result = blogsList.map((blog) => {
    const { id, imageSource } = blog;

    return (
      <FadingContent key={id}>
        <div className={styles.blog_item_container}>
          <div className={`${styles.blog_image_container}`}>
            <Image
              key={imageSource.src}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={imageSource.blurDataURL}
              src={imageSource.src}
              alt={t(`blogs.${blog.id}.image_description`)}
            />
          </div>
          <div className={`${styles.blog_description}`}>
            <Title titleAlignment="center" size="small">
              {t(`blogs.${blog.id}.title`)}
            </Title>
            <hr className={`${styles.blog_line}`} />
            <Text>{t(`blogs.${blog.id}.description`)}</Text>
            <div className={`${styles.blog_comment}`}>
              <Text>{t(`blogs.${blog.id}.date`)}</Text>
              <div className={styles.comment_icon_container}>
                <CommentIcon />
                <Text>4 {t(`blogs.comments`)}</Text>
              </div>
            </div>
          </div>
        </div>
      </FadingContent>
    );
  });
  return <>{result}</>;
};
function BlogsView() {
  const { i18n, t } = useTranslation('blogs');
  return (
    <section
      id="blogs"
      className={`${i18n.language === 'en' ? 'xxs:h-66rem' : 'xxs:h-68rem'} ${styles.blogs}`}>
      <Overlay />
      <div className={`${styles.blogs_container}`}>
        <Wrapper>
          <Title size="large" color="darkOrange" titleAlignment="center">
            {t(`blogs.blogs_title`)}
          </Title>
        </Wrapper>
        <div className={`${styles.blogs_grid}`}>
          <BlogItem />
        </div>
      </div>
    </section>
  );
}

export default BlogsView;
