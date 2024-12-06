import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    workspace_id: "W-00001",
    title: "Boost your conversion rate",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    cover_image:
      "https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg",
    content:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'",
    references: ["https://www.facebook.com/", "https://www.google.com/"],
    meta_data: {
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
    },
    audit_fields: {
      created_by: "Lindsay Walton",
      created_at: "Nov 21, 2024",
    },
  },
  {
    id: 2,
    workspace_id: "W-00002",
    title: "How to use search engine optimization to drive sales",
    description:
      "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum. ",
    cover_image:
      "https://images.pexels.com/photos/965117/pexels-photo-965117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum'",
    references: ["https://www.facebook.com/", "https://www.google.com/"],
    meta_data: {
      tags: ["React", "Hooks", "JavaScript", "Frontend"],
    },
    audit_fields: {
      created_by: "Michael Foster",
      created_at: "05/12/2024",
    },
  },
];

function BlogList() {
  return (
    <div>
      {data.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <Blog blog={blog} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
