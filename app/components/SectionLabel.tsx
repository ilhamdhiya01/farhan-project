'use client';

type SectionLabelProps = {
  title: string;
  afterWidth: string;
  beforeWidth: string;
};
const SectionLabel: React.FC<SectionLabelProps> = ({ title, afterWidth, beforeWidth }) => {
  return <div className={`mt-8 pb-4 text-lg md:text-2xl uppercase flex justify-center font-semibold md:font-bold relative after:content-[""] after:absolute after:left-0 after:top-3 ${afterWidth} after:h-[2px] after:bg-gray-300 before:content-[""] before:absolute before:right-0 before:top-3 ${beforeWidth} before:h-[2px] before:bg-gray-300`}>{title}</div>;
};

export default SectionLabel;
