// module.exports = function ({
//     Joi,
//     getTopicDataByTopicIdCall,
//     queryCall,
//     createChatTrackerCall,
//     userProgressV2Db,
//     openai,
// }) {
//     return async ({
//         topicId,
//         userId,
//         logger   
//     }) => {
//         await validateData({
//             topicId,
//             userId
//         });

//         // Step 1: Create a chat tracker

//         // Step 2: Fetch topic data
//         const topic = await getTopicDataByTopicIdCall({
//             topicId,
//             logger
//         });

//         if (!topic) {
//             throw new Error('Topic data not found');
//         }

//         // Step 3: Prepare query for model service
//         const query = This is my topic data: ${topic.name} and description ${topic.description}, split into exactly 5 sections with each section in this JSON formatand an individual section will be inside an array [{"content":"","quiz":{"question":"","options":["option a","option b","option c","option d"],"correct_answer":"option c"},"tip":"tip about the content generated"}];ensure no additional properties or structures are added.;

//         // Step 4: Call model service to generate sections
//         let modelServiceResponse = await queryCall({
//             query,
//             isJsonFormat: true,
//             applyContextLimit: false,
//             userId,
//             psychologicalPrompts: false,
//             saveResponse: true,
//         });

//         logger.info('Model service response received', modelServiceResponse);

//         const response = JSON.parse(modelServiceResponse.choices[0].message.content);
//         let sections = response.sections ?? response;
//         sections = !Array.isArray(sections) ? [sections] : sections;
//         sections = sections.filter(item => item !== undefined);
//         console.log("y:", sections);
        
//         let context="";
//         const finalSections = [];
//         const thumbnailPromises = [];
//         for (const section of sections) {
//             context+=section.content;
//             logger.info('Generating thumbnail for section...');

//             const thumbnailPromise = openai.images.generate({
//                 model: "dall-e-3",
//                 prompt: Create an illustration for the following content: ${section.content}. The illustration should be visually engaging and represent the topic effectively. and strictly generate futuristic images,
//                 size: '1024x1024',
//                 n: 1,
//             }).then(thumbnailResponse => {
//                 section.thumbnail = thumbnailResponse?.data?.[0]?.url || 'Thumbnail generation failed';
//                 finalSections.push(section);
//             }).catch(err => {
//                 logger.error('Thumbnail generation failed' );
//                 logger.error(err);
//                 section.thumbnail = 'Thumbnail generation failed';
//                 finalSections.push(section);
//             });

//             thumbnailPromises.push(thumbnailPromise);

//         // section.thumbnail = "https://static.theprint.in/wp-content/uploads/2022/09/study-1024x576.jpg"
//         // finalSections.push(section);
//         }
//         await Promise.all(thumbnailPromises);

//         const messages = [
//         { "role": "user", "content": Context:${context} use this context to answer questions }
//         ]
//         console.log("qqq:",messages);
//         const chatTracker = await createChatTrackerCall({
//             userId,
//             messages
//         });
//         console.log("eee:", chatTracker);
//         if (!chatTracker || !chatTracker.chat_tracker_id) {
//             throw new Error('Failed to create chat tracker');
//         }

//         const chatTrackerId = chatTracker.chat_tracker_id;
//         logger.info('Chat tracker created', { chatTrackerId });

//         try {
//             const updatedProgress = await userProgressV2Db.updateUserProgress({
//                 userId,
//                 lastChatTrackerId: chatTrackerId,
//                 lastTopicId: topicId,
//                 logger
//             });
//             logger.info('User progress updated', updatedProgress);
//         } catch (err) {
//             logger.error('Failed to update user progress', err);
//             throw err; // Rethrow if needed
//         }

//         return {
//             topic,
//             generatedSections: finalSections,
//             chat_tracker_id: chatTrackerId,
//         };

//     };

//     async function validateData(data) {
//         const schema = Joi.object({
//             topicId: Joi.string().guid().required(),
//             userId: Joi.string().guid().required()
//         });

//         try {
//             await schema.validateAsync(data);
//             return true;
//         } catch (error) {
//             throw new Error(Validation Error: ${error.message});
//         }
//     }
// };


const express = require('express');
const app = express();

module.exports = function ({
    Joi,
    getTopicDataByTopicIdCall,
    queryCall,
    createChatTrackerCall,
    userProgressV2Db,
    openai,
}) {
    return async ({ topicId, userId, logger, res }) => {
        await validateData({ topicId, userId });

        const topic = await getTopicDataByTopicIdCall({ topicId, logger });
        if (!topic) {
            throw new Error('Topic data not found');
        }

        const query = This is my topic data: ${topic.name} and description ${topic.description}, split into exactly 5 sections with each section in this JSON format and an individual section will be inside an array [{"content":"","quiz":{"question":"","options":["option a","option b","option c","option d"],"correct_answer":"option c"},"tip":"tip about the content generated"}]; ensure no additional properties or structures are added.;

        let modelServiceResponse = await queryCall({
            query,
            isJsonFormat: true,
            applyContextLimit: false,
            userId,
            psychologicalPrompts: false,
            saveResponse: true,
        });

        logger.info('Model service response received', modelServiceResponse);

        const response = JSON.parse(modelServiceResponse.choices[0].message.content);
        let sections = response.sections ?? response;
        sections = !Array.isArray(sections) ? [sections] : sections;
        sections = sections.filter(item => item !== undefined);

        let context = "";
        const finalSections = [];
        const thumbnailPromises = [];

        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');

        for (const section of sections) {
            context += section.content;
            const contentEvent = {
                content: section.content,
                quiz: section.quiz,
                tip: section.tip
            };

            res.write(event: contentQuizTip\ndata: ${JSON.stringify(contentEvent)}\n\n);

            const thumbnailPromise = openai.images.generate({
                model: "dall-e-3",
                prompt: Create an illustration for the following content: ${section.content}. The illustration should be visually engaging and represent the topic effectively. and strictly generate futuristic images,
                size: '1024x1024',
                n: 1,
            }).then(thumbnailResponse => {
                section.thumbnail = thumbnailResponse?.data?.[0]?.url || 'Thumbnail generation failed';
                finalSections.push(section);
                res.write(`event: thumbnail\ndata: ${JSON.stringify({
                    content: section.content,
                    thumbnail: section.thumbnail
                })}\n\n`);
            }).catch(err => {
                logger.error('Thumbnail generation failed', err);
                section.thumbnail = 'Thumbnail generation failed';
                finalSections.push(section);
                res.write(`event: thumbnail\ndata: ${JSON.stringify({
                    content: section.content,
                    thumbnail: section.thumbnail
                })}\n\n`);
            });

            // thumbnailPromises.push(thumbnailPromise);
            // section.thumbnail = "https://static.theprint.in/wp-content/uploads/2022/09/study-1024x576.jpg"
            // finalSections.push(section);
            // res.write(`event: thumbnail\ndata: ${JSON.stringify({
            //             content: section.content,
            //             thumbnail: section.thumbnail
            //         })}\n\n`);
        }

        await Promise.all(thumbnailPromises);

        const messages = [
            { "role": "user", "content": Context:${context} use this context to answer questions }
        ];

        const chatTracker = await createChatTrackerCall({ userId, messages });
        if (!chatTracker || !chatTracker.chat_tracker_id) {
            throw new Error('Failed to create chat tracker');
        }

        const chatTrackerId = chatTracker.chat_tracker_id;
        logger.info('Chat tracker created', { chatTrackerId });

        try {
            const updatedProgress = await userProgressV2Db.updateUserProgress({
                userId,
                lastChatTrackerId: chatTrackerId,
                lastTopicId: topicId,
                logger
            });
            logger.info('User progress updated', updatedProgress);
        } catch (err) {
            logger.error('Failed to update user progress', err);
            throw err;
        }

        res.write(`event: completion\ndata: ${JSON.stringify({
            topic,
            chat_tracker_id: chatTrackerId
        })}\n\n`);
        res.end();
    };

    async function validateData(data) {
        const schema = Joi.object({
            topicId: Joi.string().guid().required(),
            userId: Joi.string().guid().required()
        });

        try {
            await schema.validateAsync(data);
            return true;
        } catch (error) {
            throw new Error(Validation Error: ${error.message});
        }
    }
};