'use client';

interface SectionLabelProps {
  title: string;
  width: string;
}
const SectionLabel: React.FC<SectionLabelProps> = ({ title, width }) => {
  return <div className={`mt-8 py-4 text-lg uppercase flex justify-center font-semibold relative after:content-[""] after:absolute after:left-0 after:top-7 after:w-[25%] after:h-[2px] after:bg-gray-300 before:content-[""] before:absolute before:right-0 before:top-7 before:w-[25%] before:h-[2px] before:bg-gray-300`}>{title}</div>;
};

export default SectionLabel;
