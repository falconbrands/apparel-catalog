export interface CatalogItem {
  label: string
  title: string
  description: string
  sizes: string
  images: string[]
}

export class ContentService {

  get catalog (): CatalogItem[] {
    return [
      {
        label: 'APP-0001',
        title: 'CRU Men\'s Black Long-Body Tee',
        description: 'Black cotton long body crew neck t-shirt featuring the CRU Cannabis logo in white and gold on the chest and the CRU crown emblem in white and gold on the left sleeve.',
        sizes: 'Men\'s sizes: S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0001-1.png'),
          require('../assets/resized-APP-0001-2.png'),
        ],
      },
      {
        label: 'APP-0002',
        title: 'CRU Unisex Gold Crew Tee',
        description: 'Gold cotton crew neck t-shirt featuring the CRU Cannabis logotype in black and white on the chest and the CRU crown emblem in black on the left sleeve.',
        sizes: 'Sizes: XS/S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0002-1.png'),
          require('../assets/resized-APP-0002-2.png'),
        ],
      },
      {
        label: 'APP-0003',
        title: 'CRU Unisex Black and Gold Raglan Tee',
        description: 'Black cotton body with gold shoulders and sleeves featuring the CRU Cannabis logotype in white and gold with the CRU crown emblem on the left sleeve in black and white.',
        sizes: 'Sizes: XS/S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0003-1.png'),
          require('../assets/resized-APP-0003-2.png'),
        ],
      },
      {
        label: 'APP-0004',
        title: 'CRU Men\'s White Long-Body Tee',
        description: 'White cotton long body crew neck t-shirt featuring the CRU Cannabis logo in black and gold on the chest and the CRU crown emblem in gold and black on the left sleeve.',
        sizes: 'Men\'s sizes: S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0004-1.png'),
          require('../assets/resized-APP-0004-2.png'),
        ],
      },
      {
        label: 'APP-0005',
        title: 'CRU Black Unisex Tank',
        description: 'Black cotton sleeveless tank featuring the gold and white CRU logo on the chest.',
        sizes: 'Sizes: XS/S/M/L/XL/2XL ',
        images: [
          require('../assets/resized-APP-0005-1.png'),
          require('../assets/resized-APP-0005-2.png'),
        ],
      },
      {
        label: 'APP-0006',
        title: 'CRU Black & Gold Unisex Tank',
        description: 'Black cotton sleeveless tank with gold trim around the neck and arm openings. Features the gold and white CRU logo on the chest.',
        sizes: 'Sizes: XS/S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0006-1.png'),
          require('../assets/resized-APP-0006-2.png'),
        ],
      },
      {
        label: 'APP-0007',
        title: 'CRU Charcoal Jersey Unisex Tank',
        description: 'Charcoal sleeveless tank featuring the gold and white CRU logo on the chest.',
        sizes: 'Sizes: XS/S/M/L/XL/2XL',
        images: [
          require('../assets/resized-APP-0007-1.png'),
          require('../assets/resized-APP-0007-2.png'),
        ],
      },
      {
        label: 'APP-0008',
        title: 'CRU White Unisex Tank',
        description: 'White cotton sleeveless tank featuring the gold and black CRU logo on the chest',
        sizes: 'Sizes: XS/S/M/L/XL/2XL ',
        images: [
          require('../assets/resized-APP-0008-1.png'),
          require('../assets/resized-APP-0008-2.png'),
        ],
      },
      {
        label: 'APP-0009',
        title: 'CRU Women\'s Black Festival Crop',
        description: 'Black cotton crop top with an unhemmed bottom edge. Featuring the gold and white CRU logo on the chest and the CRU crown emblem in gold and white on the left sleeve.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0009-1.png'),
          require('../assets/resized-APP-0009-2.png'),
        ],
      },
      {
        label: 'APP-0010',
        title: 'CRU Women\'s Gold Festival Crop',
        description: 'Gold cotton crop top with an unhemmed bottom edge. Featuring the white and black CRU Cannabis logotype on the chest and the CRU crown emblem in black and white on the left sleeve.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0010-1.png'),
          require('../assets/resized-APP-0010-2.png'),
        ],
      },
      {
        label: 'APP-0011',
        title: 'CRU Women\'s Gold Boyfriend Tee',
        description: 'Gold cotton boyfriend t-shirt featuring the white and black CRU Cannabis logotype on the chest and the CRU crown emblem in black and white on the left sleeve.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0011-1.png'),
          require('../assets/resized-APP-0011-2.png'),
        ],
      },
      {
        label: 'APP-0012',
        title: 'CRU Women\'s Black Festival Tank',
        description: 'Black cotton tank top with a drop cut hem. Featuring the white and black CRU Cannabis logotype on the chest.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0012-1.png'),
          require('../assets/resized-APP-0012-2.png'),
        ],
      },
      {
        label: 'APP-0013',
        title: 'CRU Woman\'s Vintage Black Racerback Tank',
        description: 'Vintage black cotton racerback tank featuring the white and black CRU Cannabis logotype on the chest.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0013-1.png'),
          require('../assets/resized-APP-0013-2.png'),
        ],
      },
      {
        label: 'APP-0014',
        title: 'CRU Women\'s White Festival Tank',
        description: 'White cotton tank top with a drop cut hem featuring the black and gold CRU Cannabis logotype on the chest.',
        sizes: 'Women\'s sizes: XS/S/M/L',
        images: [
          require('../assets/resized-APP-0014-1.png'),
          require('../assets/resized-APP-0014-2.png'),
        ],
      },
      {
        label: 'APP-0015',
        title: 'CRU Gray Crown Emblem Trucker Hat',
        description: 'Gray snap-adjustable trucker hat with gold and white CRU crown emblem embroidered on the front and CRU logotype in white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0015-1.png'),
          require('../assets/resized-APP-0015-2.png'),
        ],
      },
      {
        label: 'APP-0016',
        title: 'CRU Gray "CRU Cannabis" Trucker Hat',
        description: 'Gray snap-adjustable trucker hat with white and gold CRU Cannabis logotype embroidered on the front and CRU crown emblem in gold and white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0016-1.png'),
          require('../assets/resized-APP-0016-2.png'),
        ],
      },
      {
        label: 'APP-0017',
        title: 'CRU Black Crown Emblem Dad Cap',
        description: 'Black adjustable dad cap with gold and white CRU crown emblem embroidered on the front.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0017-1.png'),
          require('../assets/resized-APP-0017-2.png'),
        ],
      },
      {
        label: 'APP-0018',
        title: 'CRU Black "CRU Cannabis" Dad Cap',
        description: 'Black adjustable dad cap with white and gold CRU Cannabis logotype embroidered on the front.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0018-1.png'),
          require('../assets/resized-APP-0018-2.png'),
        ],
      },
      {
        label: 'APP-0019',
        title: 'CRU Heather "CRU Cannabis" 6 Panel Snapback',
        description: 'Heather snap-adjustable hat with white and gold CRU Cannabis logotype embroidered on the front and the CRU crown emblem in gold and white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0019-1.png'),
          require('../assets/resized-APP-0019-2.png'),
        ],
      },
      {
        label: 'APP-0020',
        title: 'CRU Heather Crown Emblem 6 Panel Snapback',
        description: 'Heather snap-adjustable hat with gold and white CRU crown emblem embroidered on the front and CRU logotype in white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0020-1.png'),
          require('../assets/resized-APP-0020-2.png'),
        ],
      },
      {
        label: 'APP-0021',
        title: 'CRU Dark Heather Crown Emblem 6 Panel Snapback',
        description: 'Dark heather snap-adjustable hat with gold and white CRU crown emblem embroidered on the front and CRU logotype in white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0021-1.png'),
          require('../assets/resized-APP-0021-2.png'),
        ],
      },
      {
        label: 'APP-0022',
        title: 'CRU Dark Heather "CRU Cannabis" 6 Panel Snapback',
        description: 'Dark Heather snap-adjustable hat with white and gold CRU Cannabis wordmark embroidered on the front and the CRU crown emblem in gold and white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0022-1.png'),
          require('../assets/resized-APP-0022-2.png'),
        ],
      },
      {
        label: 'APP-0023',
        title: 'CRU Black Crown Emblem 6 Panel Snapback',
        description: 'Black snap-adjustable hat with gold and white CRU crown emblem embroidered on the front and CRU logotype in white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0023-1.png'),
          require('../assets/resized-APP-0023-2.png'),
        ],
      },
      {
        label: 'APP-0024',
        title: 'CRU Black "CRU Cannabis" 6 Panel Snapback',
        description: 'Black snap-adjustable hat with white and gold CRU Cannabis logotype embroidered on the front and the CRU crown emblem in gold and white on the left temple.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0024-1.png'),
          require('../assets/resized-APP-0024-2.png'),
        ],
      },
      {
        label: 'APP-0025',
        title: 'CRU Black Crown Emblem Face Mask',
        description: 'Black cotton surgical style face mask featuring the CRU crown emblem printed in gold and white on the front',
        sizes: '',
        images: [
          require('../assets/resized-APP-0025-1.png'),
          require('../assets/resized-APP-0025-2.png'),
        ],
      },
      {
        label: 'APP-0026',
        title: 'CRU Black CRU Tube Scarf',
        description: 'Black UV resistant multifunctional tube scarf featuring a CRU Cannabis logo pattern in white and gold.',
        sizes: '',
        images: [
          require('../assets/resized-APP-0026-1.png'),
          require('../assets/resized-APP-0026-2.png'),
        ],
      }
    ]
  }

}

export default new ContentService()