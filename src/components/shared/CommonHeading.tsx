const CommonHeading = ({
  subTitle,
  title,
  description,
}: {
  title: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="inline-block rounded-lg bg-primaryColor/25 text-primaryColor  px-3 py-1 text-base">
          {subTitle}
        </h2>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-[900px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CommonHeading;
