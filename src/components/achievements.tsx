import { Variants, motion } from 'framer-motion';
import SectionWrapper from './sectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import { achievements } from '../constants/index';
import Image, { StaticImageData } from 'next/image';

const AchievementCard = ({
  index,
  achievement,
  name,
  designation,
  image,
  link,
}: {
  index: number;
  achievement: string;
  name: string;
  designation: string;
  image: StaticImageData;
  link: string;
}) => (
  <motion.div variants={fadeIn('down', 'spring', index * 0.5, 0.75) as Variants} className='relative rounded-3xl bg-text p-10 shadow-card xs:w-[320px]'>
    <div className='absolute right-10 top-10 flex justify-end'>
      <div
        onClick={() => (window.location.href = `${link}`)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            window.location.href = `${link}`;
          }
        }}
        className='m-1 flex h-7 w-7 cursor-pointer items-center justify-center text-background transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary hover:opacity-100 focus:-translate-y-[2px] focus:text-primary focus:opacity-100'
        tabIndex={0}
      >
         <svg height='1em' viewBox='0 0 512 512' className='text-current'>
                  <path
                    d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'
                    fill='currentColor'
                  />
                </svg>
      </div>
    </div>

    <p className='text-[48px] font-black text-background'>&#42;</p>

    <div className='mt-1'>
      <p className='text-[18px] tracking-wider text-background'>{achievement}</p>

      <div className='mt-7 flex items-center justify-between gap-1'>
        <div className='flex flex-1 flex-col'>
          <p className='text-[16px] font-medium text-background'>
            <span className='text-accent'>@</span> {name}
          </p>
          <p className='mt-1 text-[12px] text-background opacity-75'>{designation}</p>
        </div>

        <Image src={image} alt={`Feedback by ${name}`} className='h-10 w-10 rounded-full object-cover' />
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
<>
    <div className='p-8 min-h-[100px] rounded-2xl bg-gradient-to-b from-primary to-accent md:bg-gradient-to-r flex flex-col justify-center items-start'>
  <motion.div variants={textVariant() as Variants} className='w-full'>
  <h2 className="section-title pointer-events-none"> SCHOLARLY PRESENTATIONS
     </h2>
  </motion.div>
</div>

<div className='px-15 -mt-5 flex flex-wrap gap-7 pb-15 w-full justify-center'>
  <div className='paddingX -mt-12 flex flex-wrap gap-7 pb-14 w-full'>
    <div className='w-full md:w-[100%] lg:w-[100%] pointer-events-auto mt-12 rounded-[20px] bg-secondary p-8 shadow-lg'>
      <div className='flex w-full'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1) as Variants}
          className='text-base leading-relaxed max-w-3xl text-text'
        >
          <p className="mt-4">
         <strong>Automatic Customer Review from Facial Expression Using Deep Learning</strong><br />
        Jan. 2023 – May 2023<br />
         SRM Institute of Science and Technology, Chennai, India
       </p>
      
       <ul className="mt-2">
         <li>
           Led a team in deep learning research for sentiment analysis, showcased at the International Conference on Science and Innovative Engineering 2023.
         </li>
         <li>
           Enhanced positive feedback by 40% and reduced negative reviews by 25%.
        </li>
     </ul>
        </motion.p>
      </div>
    </div>
  </div>
</div>
</>

  );
};

export default SectionWrapper(Achievements, 'achievements');