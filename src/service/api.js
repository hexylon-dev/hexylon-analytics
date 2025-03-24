import http from './http';

export const CreateContactUsResponseApi = (body) => {
  return http.post({
    url: '/contactus_responses',
    data: body,
    messageSettings: { hideSuccessMessage: true },
  });
};

export const GetCareerApi = () => {
    return http.post({
      url: '/list-job-postings',
      messageSettings: { hideSuccessMessage: true },
    });
  };

export const GetBlogsApi = (q) => {
    return http.get({
      url: '/v1/blogs/search/2d258123-b62f-4662-9a24-145dff11331a',
      messageSettings: { hideSuccessMessage: true },
    });
  };

export const GetJobApi = (id) => {
    return http.get({
      url: `/v1/job-postings/${id}`,
      messageSettings: { hideSuccessMessage: true },
    });
  };

export const GetJobsApi = (q) => {
    return http.get({
      url: '/list-job-postings',
      messageSettings: { hideSuccessMessage: true },
    });
  };

export const GetBlogApi = (id) => {
    return http.get({
      url: `/v1/blogs/${id}`,
      messageSettings: { hideSuccessMessage: true },
    });
  };

export const AddApplicantApi = (body) => {
    return http.post({
      url: `/applicants`,
    data: body,
    messageSettings: { successMessage: 'Job added successfully.' },
    });
  };

