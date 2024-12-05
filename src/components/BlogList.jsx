import React from 'react'
import Blog from './Blog';

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
      references: "ABC",
      meta_data: {
        tags: ["value1"],
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
      references: "XYZ",
      meta_data: {
        tags: ["value1"],
      },
      audit_fields: {
        created_by: "Michael Foster",
        created_at: "05/12/2024",
      },
    },
  ];

function BlogList() {
  return data.map((blog)=><Blog blog={blog} />)
}

export default BlogList