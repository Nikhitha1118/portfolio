import Tilt from 'react-parallax-tilt';
import { Variants, motion } from 'framer-motion';
import SectionWrapper from '../components/sectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';
import Image, { StaticImageData } from 'next/image';

const ProjectCard = ({
  index,
  name,
  description,
  techstack,
  image,
  prodLink,
  srcLink,
}: {
  index: number;
  name: string;
  description: string;
  techstack: { name: string; icon: StaticImageData; link: string }[];
  image: StaticImageData;
  prodLink?: string;
  srcLink?: string;
}) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1) as Variants}>
      <Tilt
        className={`pointer-events-auto flex w-full max-w-[640px] flex-col rounded-2xl border-2 border-accent p-5 lg:max-w-none ${
          (index + 1) % 2 === 0 ? 'from-secondary to-background bg-gradient-45 lg:flex-row-reverse' : 'from-background to-secondary bg-gradient-135 lg:flex-row'
        }`}
        scale={1.05}
        transitionSpeed={450}
        tiltMaxAngleX={7}
        tiltMaxAngleY={7}
      >
        <div
          className='relative h-60 w-full max-w-[576px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-card xs:h-80'
          tabIndex={0}
          onClick={() => prodLink && window.open(prodLink, '_blank')}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && prodLink) {
              window.open(prodLink, '_blank');
            }
          }}
        >
          <Image
            src={image}
            alt={name}
            className='h-auto w-full object-cover transition-transform duration-[2000ms] hover:-translate-y-[calc(100%-320px)] hover:duration-[8000ms]'
          />
        </div>

        <div className='px-2 py-5 text-center lg:px-5 lg:py-2 xl:px-10 xl:py-8'>
          <h3 className='text-[24px] font-bold text-text'>{name}</h3>
          <p className='mt-2 text-[17px] text-text opacity-75'>{description}</p>
          <div className='mt-3 flex flex-wrap justify-center gap-2'>
            {techstack.map((icon) => (
              <div
                key={icon.name}
                className='h-6 w-6 cursor-pointer transition-transform hover:scale-110 focus:scale-110'
                tabIndex={0}
                onClick={() => window.open(icon.link, '_blank')}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    window.open(icon.link, '_blank');
                  }
                }}
              >
                <Image src={icon.icon} alt={icon.name} className='object-contain' />
              </div>
            ))}
          </div>
          <div className='mt-4 flex flex-row justify-center gap-9 text-[18px] font-medium'>
            {srcLink && (
              <a
                href={srcLink}
                target='_blank'
                rel='noreferrer'
                className='flex cursor-pointer items-center gap-1 text-text transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus:-translate-y-[2px] focus:text-primary'
              >
                Code
                <svg height='1em' viewBox='0 0 496 512' className='text-current'>
                  <path
                    d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            )}
            {prodLink && (
              <a
                href={prodLink}
                target='_blank'
                rel='noreferrer'
                className='flex cursor-pointer items-center gap-1 text-text transition-transform duration-200 hover:-translate-y-[2px] hover:text-primary focus:-translate-y-[2px] focus:text-primary'
              >
                Demo
                <svg height='1em' viewBox='0 0 512 512' className='text-current'>
                  <path
                    d='M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z'
                    fill='currentColor'
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
    <div className='p-8 min-h-[100px] rounded-2xl bg-gradient-to-b from-primary to-accent md:bg-gradient-to-r flex flex-col justify-center items-start'>
  <motion.div variants={textVariant() as Variants} className='w-full'>
    <p className='text-2xl font-medium text-black-200 mb-2'>My work</p>
    <h2 className='text-3xl font-bold text-black'>Projects</h2>
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
          <span className='font-semibold text-lg text-primary'>Heart Disease Predictive Modeling</span>
          <br />
          <span className='text-sm text-gray-400'>University of Cincinnati, Ohio, USA</span>
          <ul className='mt-4 list-disc list-inside'>
            <li className='mt-2'>
              Boosted accuracy of heart disease prediction by 20% by developing classification trees that efficiently analyze
              and interpret clinical data from the UCI Machine Learning Repository.
            </li>
            <li className='mt-2'>
              Streamlined data preprocessing and model evaluation with a Jupyter notebook, enhancing model accuracy using
              technologies like Python, Pandas, NumPy, Matplotlib, and Scikit-Learn, with potential for deployment in a
              cloud environment using AWS S3 and EC2 for scalable model training and storage.
            </li>
          </ul>
          <br/>
          <span className='font-semibold text-lg text-primary'>Deep Learning Object Detection</span>
          <br />
          <span className='text-sm text-gray-400'>SRM Institute of Science andTechnology, Chennai, India</span>
          <ul className='mt-6 list-disc list-inside'>
            <li className='mt-2'>
            Increased detection accuracy by 25% in local and web-based images by applying the YOLOv5 model,
significantly improving the capability to identify and classify objects in a cloud-hosted system using
AWS Lambda for fast processing

            </li>
            <li className='mt-2'>
            Crafted an interactive Jupyter notebook forstraightforward object detection,showcasing results with dynamic
            bounding boxes, using Python, PyTorch, OpenCV, and Matplotlib
            </li>
          </ul>
          <br/>
          <span className='font-semibold text-lg text-primary'>Real-Time Weather Data Viewer Application</span>
          <br />
          <span className='text-sm text-gray-400'>SRM Institute of Science andTechnology, Chennai, India</span>
          <ul className='mt-6 list-disc list-inside'>
            <li className='mt-2'>
            Fetches weather data from external APIs or simulated sources, processes it using AWS Lambda, and stores it in DynamoDB.
            Utilizes API Gateway, Kinesis, and DynamoDB to ensure smooth data flow and real-time availability for end-users.

            </li>
            <li className='mt-2'>
            Hosts a static website on S3 that provides a visually appealing interface for displaying real-time weather updates.
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

export default SectionWrapper(Works, 'project');
