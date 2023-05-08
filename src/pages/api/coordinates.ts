import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Returns the given coordinates
 *
 * @returns The coordinates of the office
 */

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const coordinates = {
    budapest: {
      lat: '47.4986567',
      lng: '19.0532484',
    },
  }

  res.status(200).json(coordinates)
}
