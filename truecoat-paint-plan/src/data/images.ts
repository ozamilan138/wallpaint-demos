// This file lists the photos in public/images. A script made it from the downloaded files.
// Each photo has a set of widths. The Img component uses them to make a srcset.

export interface ImageInfo {
  /** The Unsplash photo ID. */
  id: string
  /** The width and the height of the original photo. */
  w: number
  h: number
  /** The widths of the WebP files in public/images. */
  widths: number[]
}

export const IMAGES = {
  'hero-green-room': { id: '1600494603989-9650cf6ddd3d', w: 2000, h: 1500, widths: [960, 1600, 2000] },
  'room-living': { id: '1616137422495-1e9e46e2aa77', w: 2000, h: 1125, widths: [480, 800] },
  'room-bedroom': { id: '1571508601891-ca5e7a713859', w: 2000, h: 1333, widths: [480, 800] },
  'room-kitchen': { id: '1600489000022-c2086d79f9d4', w: 2000, h: 2667, widths: [480, 800] },
  'room-dining': { id: '1560185007-cde436f6a4d0', w: 2000, h: 1333, widths: [480, 800] },
  'room-exterior': { id: '1572120360610-d971b9d7767c', w: 2000, h: 1334, widths: [480, 800] },
  'insp-living-1': { id: '1502672260266-1c1ef2d93688', w: 2000, h: 1488, widths: [640, 1200] },
  'insp-living-2': { id: '1589834390005-5d4fb9bf3d32', w: 2000, h: 3000, widths: [640, 1200] },
  'insp-living-3': { id: '1615874694520-474822394e73', w: 2000, h: 2000, widths: [640, 1200] },
  'insp-bedroom-1': { id: '1522771739844-6a9f6d5f14af', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-bedroom-2': { id: '1616627561839-074385245ff6', w: 2000, h: 1831, widths: [640, 1200] },
  'insp-bedroom-3': { id: '1615874959474-d609969a20ed', w: 2000, h: 2000, widths: [640, 1200] },
  'insp-kitchen-1': { id: '1556912173-3bb406ef7e77', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-kitchen-2': { id: '1565538810643-b5bdb714032a', w: 2000, h: 3000, widths: [640, 1200] },
  'insp-kitchen-3': { id: '1600585152220-90363fe7e115', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-dining-1': { id: '1617806118233-18e1de247200', w: 2000, h: 1125, widths: [640, 1200] },
  'insp-dining-2': { id: '1617104551722-3b2d51366400', w: 2000, h: 1055, widths: [640, 1200] },
  'insp-dining-3': { id: '1604014237800-1c9102c219da', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-exterior-1': { id: '1570129477492-45c003edd2be', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-exterior-2': { id: '1568605114967-8130f3a36994', w: 2000, h: 1333, widths: [640, 1200] },
  'insp-exterior-3': { id: '1594484208280-efa00f96fc21', w: 2000, h: 1333, widths: [640, 1200] },
  'svc-interior': { id: '1616137466211-f939a420be84', w: 2000, h: 1125, widths: [480, 800] },
  'svc-exterior': { id: '1576941089067-2de3c901e126', w: 2000, h: 1186, widths: [480, 800] },
  'svc-apartment': { id: '1522708323590-d24dbb6b0267', w: 2000, h: 1334, widths: [480, 800] },
  'svc-repainting': { id: '1562259949-e8e7689d7828', w: 2000, h: 1397, widths: [480, 800] },
  'svc-texture': { id: '1523413363574-c30aa1c2a516', w: 2000, h: 3000, widths: [480, 800] },
  'svc-feature': { id: '1615873968403-89e068629265', w: 2000, h: 1125, widths: [480, 800] },
  'fin-matte': { id: '1634712282287-14ed57b9cc89', w: 2000, h: 1281, widths: [480, 800] },
  'fin-satin': { id: '1484101403633-562f891dc89a', w: 2000, h: 1328, widths: [480, 800] },
  'fin-semigloss': { id: '1556911220-bff31c812dba', w: 2000, h: 1199, widths: [480, 800] },
  'fin-texture': { id: '1595428774223-ef52624120d2', w: 2000, h: 3001, widths: [480, 800] },
  'work-navy-living': { id: '1615971677499-5467cbab01c0', w: 2000, h: 2000, widths: [640, 1200] },
  'work-teal-open': { id: '1554995207-c18c203602cb', w: 2000, h: 1333, widths: [640, 1200] },
  'work-grey-hall': { id: '1618219908412-a29a1bb7b86e', w: 2000, h: 3556, widths: [640, 1200] },
  'work-dark-bedroom': { id: '1617104678098-de229db51175', w: 2000, h: 1270, widths: [640, 1200] },
  'work-warm-living': { id: '1615875605825-5eb9bb5d52ac', w: 2000, h: 1125, widths: [640, 1200] },
  'work-green-sofa': { id: '1567016432779-094069958ea5', w: 2000, h: 2000, widths: [640, 1200] },
  'work-wood-corner': { id: '1550581190-9c1c48d21d6c', w: 2000, h: 1434, widths: [640, 1200] },
  'work-gallery-wall': { id: '1618220048045-10a6dbdf83e0', w: 2000, h: 2000, widths: [640, 1200] },
  'form-empty-room': { id: '1630699144867-37acec97df5a', w: 2000, h: 1333, widths: [480, 800] },
  'values-brick-wall': { id: '1513161455079-7dc1de15ef3e', w: 2000, h: 2996, widths: [480, 800] },
  'cta-roller': { id: '1599619585752-c3edb42a414c', w: 2000, h: 1333, widths: [960, 1600, 2000] },
} satisfies Record<string, ImageInfo>

export type ImageName = keyof typeof IMAGES
