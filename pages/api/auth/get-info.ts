// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { APIResponse } from '../../../utils';

const userInfo = {
    fullname: 'Thuy Bui',
    sex: 1,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRBqTeY-dTImnv-0qS4j32of8dVtWelSEMw&usqp=CAU',
};

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im10YXplcm8iLCJzdWIiOiI2MDk2MTMxOTkzMDBlMTE5OGM0M2VjZTciLCJpYXQiOjE2NDAxNDU0MjQsImV4cCI6MTY0MTAwOTQyNH0.yweLs9tCoE3QlJMvvLUnv10Nu8G63mzNPtgW3Hn-Tlk';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>,
) {
    switch (req.method) {
        case 'GET':
            return getUserInfo();

        default:
            return APIResponse(
                res,
                405,
                {},
                `Method ${req.method} Not Allowed`,
            );
    }

    function getUserInfo() {
        if (req.headers.authorization == `Bearer ${token}`)
        return APIResponse(res, 200, userInfo, 'success');

        return APIResponse(res, 401, null, 'Forbiden ');
    }
}
