import { generateToken, validateToken } from '~/lib/tokens';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.cookies.access_token) {
      const decoded = await validateToken(req.cookies.access_token);

      const { username, password } = decoded;

      return res.status(200).json({ username, password });
    } else {
      if (req.cookies.refresh_token) {
        const { username, password, tokenId } = await validateToken(req.cookies.refresh_token);
        const accessToken = await generateToken({ type: 'access_token', username, password, tokenId });

        res.setHeader('Set-Cookie', [
          `access_token=${accessToken}; httpOnly; path=/; secure; expires=${new Date(
            Date.now() + 1000 * 60 * 60,
          ).toUTCString()};`,
        ]);
        return res.status(200).json({ username, password });
      } else {
        return res.status(200).json(undefined);
      }
    }
  } catch {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
