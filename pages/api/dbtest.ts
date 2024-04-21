import { DB } from '@/lib/db';
import User from '@/lib/models/user';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await DB.connect();

  const user = new User({
    email: 'ahmed.m.wasfy@gmail.com',
    provider: 'google',
  });

  await user.save();

  res.status(200).json({ message: 'Hello from Next.js!' });
}
