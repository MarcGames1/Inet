import { Heading } from '../Heading/Heading';
import { useBlogPostContext } from '@/context/blogPost';

export const PostTitle = ({ level, textAlign }) => {
  const { title } = useBlogPostContext();

  return <Heading content={title} level={level} textAlign={textAlign} />;
};
