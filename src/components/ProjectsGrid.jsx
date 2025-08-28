import React from 'react';

const ProjectsGrid = () => {
  return (
    <div className="w-full"> {/* Changed from w-screen to w-full */}
      <p className="text-theme-red text-4xl py-10">SELECT WORK</p>
      <div className="grid min-h-[90vh] bg-white grid-cols-8 gap-4 w-full py-5">
        <div className="col-span-4 flex flex-col gap-2">
          <p className="text-black">1/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-1.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black">2/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-2.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-3.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <p className="text-black">1/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-1.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black">2/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-2.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-3.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
