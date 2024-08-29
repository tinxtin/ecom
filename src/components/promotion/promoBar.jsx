import { PromoCarousel } from '../carousel/promobarcarousel'

export const PromoBar = () => {

    const barData = [
      {
        type: 'Sale',
        value: 'Save up to 50% off on selected products.'
      },
      {
        type: 'Shipping',
        value: 'FREE next day delivery on order over £35.'
      },
      {
        type: 'Promotion',
        value: 'New seasonal arrivals is here, and you can only get it here.'
      }
    ]

    return (
        <div className='promoBar__container container'>
          <span className='promoBar__text'>
            <PromoCarousel {...{barData}}/>
          </span>
        </div>
    )
}