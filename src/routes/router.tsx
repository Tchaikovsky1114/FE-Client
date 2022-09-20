import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Favorite from '../pages/Favorite'
import SigninPage from '../pages/SigninPage'
import Main from '../pages/Main'
import MyPage from '../pages/MyPage'
import Order from '../pages/Order'
import ProductDetail from '../pages/ProductDetail'
import SignupPage from '../pages/SignupPage'
import NotFound from '../components/NotFound'
import EventDetail from '../components/EventDetail'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
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
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
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
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
