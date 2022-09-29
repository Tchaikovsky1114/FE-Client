import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from '../pages/CartPage'
import Favorite from '../pages/Favorite'
import SigninPage from '../pages/SigninPage'
import Main from '../pages/Main'
import MypagePage from '../pages/MypagePage'
import PaymentPage from '../pages/PaymentPage'
import ProductDetail from '../pages/ProductDetail'
import SignupPage from '../pages/SignupPage'
import NotFound from '../components/NotFound'
import EventDetail from '../components/EventDetail'
import Header from '../components/header/Header'

import MyOrder from '../components/mypage/tabs/MyOrder'
import MyTracking from '../components/mypage/tabs/MyTracking'
import MyAfter from '../components/mypage/tabs/MyAfter'
import MyProfile from '../components/mypage/tabs/MyProfile'
import MyReview from '../components/mypage/tabs/MyReview'
import MyGrade from '../components/mypage/tabs/MyGrade'
import MyCoupon from '../components/mypage/tabs/MyCoupon'
import MyClaims from '../components/mypage/tabs/aftertabs/MyClaimsNavBar'
import AllFavoriteList from '../components/favorite/AllFavoriteList'
import OneDayFavorite from '../components/favorite/OneDayFavorite'
import MonthlyFavorite from '../components/favorite/MonthlyFavorite'
import AboutMustRead from '../components/main/notice/pages/AboutMustRead'
import AboutShip from '../components/main/notice/pages/AboutShip'
import AboutRefund from '../components/main/notice/pages/AboutRefund'
import AboutCredit from '../components/main/notice/pages/AboutCredit'
import AboutProduct from '../components/main/notice/pages/AboutProduct'
import AboutPoint from '../components/main/notice/pages/AboutPoint'
import AboutEtc from '../components/main/notice/pages/AboutEtc'
import NoticePage from '../pages/NoticePage'
import NoticeDetail from './../components/main/notice/NoticeDetail'
import EventPage from '../pages/EventPage'
import Review from '../pages/ReviewPage'
import MobileBottomNav from '../components/footer/bottom-navigation/MobileBottomNav'
import EditProfile from '../components/mypage/myprofile/EditProfile'
import EditSecret from '../components/mypage/myprofile/EditSecret'

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<AboutMustRead />} />
          <Route path="aboutship" element={<AboutShip />} />
          <Route path="aboutrefund" element={<AboutRefund />} />
          <Route path="aboutcredit" element={<AboutCredit />} />
          <Route path="aboutproduct" element={<AboutProduct />} />
          <Route path="aboutpoint" element={<AboutPoint />} />
          <Route path="etc" element={<AboutEtc />} />
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/mypage" element={<MypagePage />}>
          <Route path="myorder" element={<MyOrder />} />
          <Route path="mytracking" element={<MyTracking />} />
          <Route path="myafter" element={<MyAfter />} />
          <Route path="myprofile" element={<MyProfile />}>
            <Route path="editprofile" element={<EditProfile />} />
            <Route path="editsecret" element={<EditSecret />} />
          </Route>
          <Route path="myreview" element={<MyReview />} />
          <Route path="mygrade" element={<MyGrade />} />
          <Route path="mycoupon" element={<MyCoupon />} />
        </Route>

        <Route path="/favorite" element={<Favorite />}>
          <Route path="all" element={<AllFavoriteList />} />
          <Route path="oneday" element={<OneDayFavorite />} />
          <Route path="monthly" element={<MonthlyFavorite />} />
        </Route>
        <Route path="/notice" element={<NoticePage />}>
          <Route path="mustread" element={<AboutMustRead />} />
          <Route path="aboutship" element={<AboutShip />} />
          <Route path="aboutrefund" element={<AboutRefund />} />
          <Route path="aboutcredit" element={<AboutCredit />} />
          <Route path="aboutproduct" element={<AboutProduct />} />
          <Route path="aboutpoint" element={<AboutPoint />} />
          <Route path="etc" element={<AboutEtc />} />
        </Route>
        <Route path="/notice/:id" element={<NoticeDetail />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/review" element={<Review />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <MobileBottomNav />
      
    </BrowserRouter>
  )
}

export default Router
