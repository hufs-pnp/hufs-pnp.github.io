import React from 'react';
import Fade from 'react-reveal/Fade';
import * as BlogModal from './ClickMe';
import BlogList from './BlogList';

const BlogItem = () => {
  const list = BlogList.slice(0, 1000).map((blog, index) => (
    <Fade bottom>
      <div
        className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
        style={{
          cursor: 'pointer',
        }}

      >
        <a
          className="c-card block bg-white hover:shadow-md rounded-lg overflow-hidden border-gray-200 border"
          key={index}
          onClick={() => BlogModal.clickMe(blog.link)}
        >
          <div className="relative pb-48 overflow-hidden border-gray-200 border-b-2">
            <img
              alt="cover"
              className="absolute inset-0 h-full w-full object-cover"
              src={blog.imageurl}
              key={blog.imageurl}
            />
          </div>
          <div className="m-5 xl:h-32">
            <h2
              className="text-gray-900 title-font font-medium break-all"
              key={blog.title}
            >
              {blog.title}
            </h2>
            <p className="text-gray-500 mt-2 break-all">
              {blog.content.substr(0, 50) + '...'}
            </p>
          </div>

        </a>
      </div>
    </Fade>
  ));

  return list;
};

export default BlogItem;
