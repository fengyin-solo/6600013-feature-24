export type PatternType = 'spiral' | 'fractal' | 'wave' | 'circles' | 'voronoi' | 'noise'

export type ParamGroup = 'pattern' | 'color' | 'export'

export interface DesignParams {
  pattern: PatternType
  seed: number
  iterations: number
  scale: number
  rotation: number
  strokeWidth: number
  opacity: number
  bgColor: string
  palette: string[]
  width: number
  height: number
}

export interface ColorTheme {
  id: string
  name: string
  colors: string[]
}

export type PatternParams = Pick<DesignParams, 'pattern' | 'seed' | 'iterations' | 'scale' | 'rotation' | 'strokeWidth' | 'opacity'>
export type ColorParams = Pick<DesignParams, 'bgColor' | 'palette'>
export type ExportParams = Pick<DesignParams, 'width' | 'height'>
