import React from "react";

function Blog({ blog }) {
  return (
    <div class="max-w-4xl relative flex flex-col lg:flex-row w-full my-6 bg-white m-auto">
      <div class="relative p-2.5 lg:w-1/3 shrink-0 overflow-hidden">
        <img
          src={blog.cover_image}
          alt="card-image"
          class="h-full w-full rounded-2xl object-cover hadow"
        />
      </div>
      <div class="p-6">
        <div className="flex g-2">
          <div class="mb-4 py-0.5 text-xs text-gray-500 w-20">
            {blog.audit_fields.created_at}
          </div>
          {/* <div class="mb-4 py-0.5 px-2.5 rounded-full border text-xs text-black transition-all shadow-sm w-20 text-center bg-[#D3D3D3] hover:bg-gray-400 cursor-pointer">
            {blog.workspace_id}
        </div> */}
        </div>

        <h4 class="mb-2 text-slate-800 text-xl font-semibold">{blog.title}</h4>
        <p class="mb-8 text-slate-600 leading-normal font-light">
          {blog.description}
        </p>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>
          <p className="text-sm font-semibold">
            {blog.audit_fields.created_by}
          </p>
          <div className="mt-3">
            {/* <h2 className="text-xl font-semibold mb-4">Related Links</h2> */}
            <div className="flex flex-wrap gap-4">
              {blog.references.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  className="inline-block px-4 py-1 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300 text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {new URL(link).hostname.replace("www.", "")}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
