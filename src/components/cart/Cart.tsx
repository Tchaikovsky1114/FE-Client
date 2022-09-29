import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { productState } from '../../store/product'
import { useRefreshToken } from '../auth/hooks/useRefreshToken'
import { useUser } from '../auth/hooks/useUser'
import CardTemplate from '../common/ui/CardTemplate'
import PageLayout from '../common/ui/PageLayout'
import { getStoredToken } from '../local-storage/userStorage'
import Counter from './Counter'




const Cart = () => {
  const refreshToken = useRefreshToken()
  const product = useRecoilValue(productState);
  const {user} = useUser()
  useEffect(() => {
    const token = getStoredToken()
    refreshToken(token)
    console.log('cart interceptor')
  },[])

  return (
  <PageLayout layoutWidth='w-[90%]' innerTop="top-[30%]" >
    <CardTemplate title='장바구니' isTitleVisible={true}>
    <div className='flex flex-col items-center xs:flex-row xs:items-start text-lenssisGray'>
      <div className='grow flex flex-col px-2'>
        <div className='flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2 xs:gap-0 w-full py-4 border-y border-solid border-lenssisStroke text-xs xs:text-base '>
          <div className='flex items-center '>
        <input className='w-4 h-4 mr-2 accent-lenssisDark' type="checkbox" /><label>전체해제(2/2)</label>
        </div>
        <p ><span className='font-semibold'>TIP! 1200円</span> 더 구매하면, <span className='font-semibold'>500円 추가 할인</span> 받을 수 있어요.</p>
        </div>

      <ul>
        <li className='flex my-4'>
          <input type="checkbox" className='mr-2 w-4 h-4 accent-lenssisDark' />
          <img className='max-w-[100px] max-h-[100px]' src="assets/eyes.png" alt="" />
          <div className='ml-4 grow'>
          <div>에이 링+ 그레이</div>
        <p className='line-through'>2,200円</p>
        <p className='font-bold text-lg text-black'>1,800円</p>
        <div>
          <Counter />
        </div>
          </div>
          <div className='min-w-[40px]'>
            <button className='underline text-lenssisStroke'>삭제</button>
          </div>
          </li>
          <li className='flex my-4'>
          <input type="checkbox" className='mr-2 w-4 h-4 accent-lenssisDark' />
          <img className='max-w-[100px] max-h-[100px]' src="assets/eyes.png" alt="" />
          <div className='ml-4 grow'>
          <div>에이 링+ 그레이</div>
        <p className='line-through'>2,200円</p>
        <p className='font-bold text-lg text-black'>1,800円</p>
        <div>
          <Counter />
        </div>
          </div>
          <div className='min-w-[40px]'>
            <button className='underline text-lenssisStroke'>삭제</button>
          </div>
          </li>
          <li className='flex my-4'>
          <input type="checkbox" className='mr-2 w-4 h-4 accent-lenssisDark' />
          <img className='max-w-[100px] max-h-[100px]' src="assets/eyes.png" alt="" />
          <div className='ml-4 grow'>
          <div>에이 링+ 그레이</div>
        <p className='line-through'>2,200円</p>
        <p className='font-bold text-lg text-black'>1,800円</p>
        <div>
          <Counter />
        </div>
          </div>
          <div className='min-w-[40px]'>
            <button className='underline text-lenssisStroke'>삭제</button>
          </div>
          </li>
      </ul>
      </div>
      <div className='w-full xs:w-2/5 xs:max-w-[440px] text-base '>
        <div className='border border-solid border-gray-100 bg-[#f4f6f8] font-bold text-lenssisGray flex flex-col pt-2 p-6 rounded-sm px-8 gap-2'>
        <h3 className='text-xl py-4 text-[#5a5a5a]'>지불 금액</h3>
        <div className='flex items-center justify-between'><p>총 상품 금액</p> <p>3,600円</p></div>
        <div className='flex items-center justify-between'><p>총 배송비</p> <p>0円</p></div>
        <div className='flex items-center justify-between text-black'><p>결제 예상 금액</p> <p>3,600円</p></div>
        </div>
        <div className='flex gap-4 flex-col xs:flex-row items-center w-full justify-between mt-4'>
          <button className='border border-solid border-lenssisDark py-2 w-full xs:w-[220px] rounded-md text-lenssisDark text-sm h-10 font-semibold'>선택상품구매</button>
          <button className='border border-solid border-transparent bg-lenssisDark py-2 w-full xs:w-[220px] rounded-md text-white text-sm h-10 font-semibold'>전체상품구매</button>
        </div>
        <div className='flex flex-col items-center mt-10 text-lenssisGray font-semibold'>
          <p className=''>3,000円 이상 구매 시 무료 배송</p>
          <Link to="/" ><span className='underline'>쇼핑 계속</span></Link>
        </div>
      </div>
    </div>
    </CardTemplate>
    
    <CardTemplate title='2번'>
    <h3 className='font-bold text-lenssisDark pb-2 border-b border-solid border-lenssisGray'>이런 상품도 있어요!</h3>
    <div className='flex items-center gap-4 mt-12'>
    {Array(4).fill(0).map((item,index) => (
      <div key={index} className="grow h-fit border border-solid border-red-300">{item}</div>
    ))}
    </div>
    </CardTemplate>
    
  </PageLayout>
  )
}

export default Cart
