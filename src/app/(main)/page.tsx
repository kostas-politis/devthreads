import Search from '@/components/Search';
import { buttonVariants } from '@/components/ui/button';
import ROUTES from '@/constants/routes';
import Link from 'next/link';
import { Fragment } from 'react';

const questions = [
  {
    _id: '1',
    title: 'How to learn React?',
    description: 'I want to learn React, can anyone help me?',
    tags: [
      { _id: '1', name: 'React' },
      { _id: '2', name: 'JavaScript' },
    ],
    author: { _id: '1', name: 'John Doe' },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: '2',
    title: 'How to learn JavaScript?',
    description: 'I want to learn JavaScript, can anyone help me?',
    tags: [
      { _id: '1', name: 'React' },
      { _id: '2', name: 'JavaScript' },
    ],
    author: { _id: '1', name: 'John Doe' },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
export default async function Home({ searchParams }: SearchParams) {
  const { query = '' } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase()),
  );

  return (
    <Fragment>
      <div className='flex flex-col gap-7.5'>
        <div className='flex flex-col-reverse justify-between gap-4 sm:flex-row'>
          <h1 className='h1-bold'>All Questions</h1>
          <Link
            href={ROUTES.ASK_QUESTION}
            className={buttonVariants({
              variant: 'primary',
              size: 'md',
            })}
          >
            Ask a Question
          </Link>
        </div>
        <Search />
        <div>Filters</div>
      </div>
      <div>
        {filteredQuestions.map((question) => (
          <div key={question._id}>{question.title}</div>
        ))}
      </div>
    </Fragment>
  );
}
