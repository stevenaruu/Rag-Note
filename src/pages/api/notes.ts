// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retriveData } from '@/utils/db/service'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean,
    statusCode: number,
    // data: {
    //     id: number,
    //     title: string,
    //     content: string
    // }[]
    data: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const data = await retriveData("notes")
    res.status(200).json({ status: true, statusCode: 200, data })
}
