import { parse2D } from '@/utils/parse2D'

const collisionsLvl1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 690, 690, 690, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1755, 1755, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 0, 0, 0, 0, 0, 0, 2833, 2833, 0, 0, 0, 0, 0, 690, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1849, 1755, 1755, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 690, 690, 0, 0, 0, 0, 0, 690, 690, 0, 1849, 1755, 1755, 2833, 2833, 2833, 2833, 51, 51, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 0, 0, 374, 374, 374, 374, 690, 690, 690, 690, 690, 690, 690, 690, 690, 690, 690, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 2833, 2833, 0, 0, 0, 0, 0, 0, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 690, 1755, 1755, 1755, 690, 1853, 2833, 2833, 51, 1755, 1755, 1755, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 0, 0, 81, 81, 81, 81, 81, 0, 0, 0, 0, 2833, 2833, 2833, 2833,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 690, 690, 690, 690, 690, 690, 690, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 690, 2833, 2833, 2833, 0, 690, 1755, 1755, 1755, 1755, 690, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 0, 0, 0, 0, 0, 0, 690, 690, 690, 690, 690, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 374, 374, 374, 374, 374, 374, 0, 690, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 690, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 690, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 2833, 2833, 2833, 2833, 2833, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0, 2833, 0, 0, 0, 0, 0, 0, 0, 2833, 0, 0, 0]

export const COLLISION_SYMBOL = 2833

export const parsedCollisionLvl1 = parse2D(collisionsLvl1, 64)
