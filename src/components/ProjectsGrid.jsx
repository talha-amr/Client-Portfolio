import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectsGrid = () => {
  let nav1= useNavigate()
 const navigateToCaseStudy = () => {
  nav1('/caseStudy'); // just call it like a function
}
  return (
    <div className="w-full"> {/* Changed from w-screen to w-full */}
      <p className="text-theme-red text-4xl py-10">SELECT WORK</p>
      <div className="grid min-h-[90vh] bg-transparent grid-cols-8 gap-x-4 gap-y-18 w-full py-3 ">
        <div className="col-span-4 flex flex-col gap-2">
          <p className="text-black text-xs">1/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              onClick={navigateToCaseStudy}
              src="/image-1.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black text-xs">2/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-2.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black text-xs">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-3.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        
        <div className="col-span-2 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
          <p className="text-black text-xs">1/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-4.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          </div>
          <div className="flex flex-col gap-2">
          <p className="text-black text-xs">1/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-5.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
          </div>
        </div>

        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black text-xs">2/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-6.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <p className="text-black text-xs">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-7.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black text-xs">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-8.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <p className="text-black text-xs">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-9.png"
              alt=""
              className="w-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-black text-xs">3/ view project</p>
          <div className="flex-1 overflow-hidden">
            <img
              src="/image-grid-10.png"
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
