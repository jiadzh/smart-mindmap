import emitter from '@/mitt'
import * as d3 from '../d3'

export let svg: d3.Selection<SVGSVGElement, null, null, undefined> | undefined
export let g: d3.Selection<SVGGElement, null, null, undefined> | undefined
export let asstSvg: d3.Selection<SVGSVGElement, unknown, null, undefined> | undefined
emitter.on('selection-svg', (val) => svg = val)
emitter.on('selection-g', (val) => g = val)
emitter.on('selection-asstSvg', (val) => asstSvg = val)
