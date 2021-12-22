import type { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse } from '../../../utils';

let posts = [
    {
        _id: '0',
        title: 'Omicron and Holiday Travel: How to Strategize',
        subtitle:
            'Even as the variant surges, the seasonal travel rush seems unstoppable, but there are steps you can take to travel more responsibly and mitigate the health risks for yourself — and others.',
        content: `Taylor Allen wanted to be a responsible traveler, but she was finding it difficult.
        Late last week at least seven people Ms. Allen knew in Brooklyn posted on Instagram that they’d tested positive for the coronavirus. She had not seen any of them in person. But after developing an intense headache and runny nose on Friday, she canceled her Saturday morning flight to Jacksonville, Fla., where she was planning to see her parents and grandparents.
        Two at-home tests — one Friday and one Saturday — came back negative. But Ms. Allen, 22, who is fully vaccinated but not yet boosted, wanted more official assurance before she rebooked her trip. On Sunday evening, long after her scheduled appointment at an urgent care clinic in Crown Heights, an employee told her and the 30 or so other people waiting for tests in the bitter cold that they’d have to come back at 8 a.m.
        “I really don’t want to put anyone in danger,” said Ms. Allen, who left the clinic with plans to return again the next day.
        Even as the number of coronavirus cases is skyrocketing in some parts of the country, largely driven by the Omicron variant, the holiday travel rush appears unstoppable. On Friday, Los Angeles International Airport reported its busiest day since early 2020, and on Sunday, 2.1 million people passed through airports in the United States, nearly twice as many as at this time last year.`,
        num_like: 10,
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    switch (req.method) {
        case 'POST':
            return InsertPost();

        case 'GET':
            return GetListPost();

        case 'PUT':
            return LikePost();

        default:
            return APIResponse(
                res,
                405,
                {},
                `Method ${req.method} Not Allowed`,
            );
    }

    function InsertPost() {
        const { title, subtitle, content } = req.body;

        let post = {
            _id: posts.length.toString(),
            title,
            subtitle,
            content,
            num_like: 0,
        };

        posts = [...posts, post];

        return APIResponse(res, 200, posts, 'success');
    }

    function GetListPost() {
        let data = posts;
        return APIResponse(res, 200, data, 'success');
    }

    function LikePost() {
        const post_id = req.query.post_id;

        for (let index = 0; index < posts.length; index++) {
            if (posts[index]._id == 'post_id') {
                posts[index].num_like = posts[index].num_like + 1;
            }
        }

        return APIResponse(res, 200, posts, 'success');
    }
}
