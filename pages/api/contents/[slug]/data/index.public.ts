import { NextApiRequest, NextApiResponse } from 'next'

import Works from '@/lib/Works'

function handler(req: NextApiRequest, res: NextApiResponse) {
  const slug = req.query?.slug as string | undefined
  const work = Works.getBySlug(slug ?? 'teste')
  if (work) return res.status(200).json(work)
  return res.status(404).json({ message: 'portfolio nao encontrado' })
}

export default handler
