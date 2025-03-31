import ROUTES from '@/constants/routes';
import QuestionSvg from '@/svg/question.svg';
import Link from 'next/link';
import TagCard from '../cards/TagCard';
import { cn } from '@/lib/utils';

const hotQuestions = [
  { _id: '1', title: 'How to create a custom hook in React?' },
  { _id: '2', title: 'How to use React Query?' },
  { _id: '3', title: 'How to use Redux?' },
  { _id: '4', title: 'How to use React Router?' },
  { _id: '5', title: 'How to use React Context?' },
];

const popularTags = [
  { _id: '1', name: 'react', questions: 100 },
  { _id: '2', name: 'javascript', questions: 200 },
  { _id: '3', name: 'typescript', questions: 150 },
  { _id: '4', name: 'nextjs', questions: 50 },
  { _id: '5', name: 'react-query', questions: 75 },
];

export default function RightSidebar({ className }: { className: string }) {
  return (
    <section
      className={cn(
        'bg-light-900 dark:bg-dark-200 text-dark-200 dark:text-light-900 shadow-light-right-sidebar px-[26px]',
        className,
      )}
    >
      <div className='mt-16'>
        <h3 className='h3-bold mb-7'>Hot Questions</h3>
        <div className='text-dark-500 flex flex-col gap-7'>
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className='body-medium flex items-start gap-[10px]'
            >
              <QuestionSvg className='size-[20px]' />
              {title}
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-16'>
        <h3 className='h3-bold mb-7'>Popular Tags</h3>
        <div className='flex flex-col gap-4'>
          {popularTags.map(({ _id, name, questions }) => (
            <div key={_id} className='flex items-center justify-between'>
              <TagCard name={name} />
              <div className='text-dark-500 small-medium'>{questions}+</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
