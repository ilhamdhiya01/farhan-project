'use client';

const ProductSpecification: React.FC<{ spec?: string }> = ({ spec }) => {
  const dataPairs = spec
    ?.trim()
    .split('|')
    .map((item) => {
      const [key, value] = item.split(':');
      return {
        key: key,
        value: value,
      };
    });

  return (
    <>
      {dataPairs?.map((pair, index) => (
        <div key={index} className='grid grid-cols-3 gap-2 border-b pb-1'>
          <div>{pair.key}</div>
          <div className='text-end pr-2'>:</div>
          <div>{pair.value}</div>
        </div>
      ))}
    </>
  );
};

export default ProductSpecification;
