import React from 'react';
import SocialShare from './SocialShare';
import TableOfContents from './TableOfContent';

const BlogLayout = ({ title, category, readTime, date, children, image }) => {
  return (
    <main className=" pt-24 mx-auto px-4 py-8 bg-black text-white">
      <article>
        <div className="relative h-[600px] mb-12 top">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute left-6 md:left-12 bottom-12 bg-black bg-opacity-80 rounded-2xl p-6 md:p-8 max-w-[90%] md:max-w-[70%] lg:max-w-[600px]">
            <div className="flex items-center gap-4 text-sm mb-4">
              <span className="text-[#ff6600] font-medium">{category}</span>
              <span className="text-gray-300">{readTime}</span>
              <span className="text-gray-300">{date}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight line-clamp-3">
              {title}
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-2">
            <SocialShare />
          </div>
          <div className="col-span-7">
            {children}
          </div>
          <div className="col-span-3">
            <TableOfContents />
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogLayout;

