import Tilt from 'react-parallax-tilt';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/sectionWrapper';

const ServiceCard = ({ index, title, icons }: { index: number; title: string; icons: any }) => (
  <Tilt className='pointer-events-auto w-full xs:w-[250px]' scale={1.1} transitionSpeed={450} tiltMaxAngleX={15} tiltMaxAngleY={15}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75) as Variants}
      className='w-full rounded-[20px] from-primary to-accent p-[2px] bg-gradient-90'
    >
      <h3 className='text-center font-mono text-[20px] font-bold text-text'>{title}</h3>
      <div className='flex min-h-[280px] flex-col justify-evenly rounded-[20px] bg-secondary px-8 py-5'>
        {icons.map((icon: any) => (
          <div
            key={icon.name}
            onClick={() => window.open(icon.link, '_blank')}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                window.open(icon.link, '_blank');
              }
            }}
            className='flex cursor-pointer items-center transition-transform hover:scale-110 focus:scale-110'
            tabIndex={0}
          >
            <Image className='h-6 w-6' src={icon.icon} alt={icon.name} />
            <span className='ml-2 py-1 font-mono text-sm font-medium text-text'>{icon.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant() as Variants}>
        <p className='section-subtitle'>Introduction</p>
        <h2 className='section-title'>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1) as Variants} className='section-text pointer-events-auto mt-4 max-w-3xl text-[17px] leading-[30px] text-text'>
      AI Software Development Engineer Intern with a focus on machine learning and cloud infrastructure, 
      currently pursuing a Master’s in Artificial Intelligence at the University of Cincinnati, 
      with a 3.70 GPA. Experienced in designing and deploying ML models for voice synthesis using 
      RNNs and transformers, enhancing real-time processing with AWS. Proven track record in Android 
      development through a Google-supported internship, where I integrated AI/ML APIs to boost app performance 
      and user satisfaction. Skilled in data analysis, cloud technologies, and deep learning, with successful 
      projects in predictive modeling and object detection, leveraging tools like TensorFlow, PyTorch, and AWS for scalable solutions.
      </motion.p>

      <div className='mt-20 flex select-none flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
