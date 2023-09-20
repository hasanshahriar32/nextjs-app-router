"use client";
const DynamicBlog = ({ params, searchParams }) => {
  console.table(searchParams);
  return <div>this is blog no: {params?.id}</div>;
};

export default DynamicBlog;
