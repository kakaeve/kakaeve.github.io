import { Outlet } from 'react-router'
import CustomHeader from '@/components/customHeader'
import CustomFooter from '@/components/customFooter'
export default function DefaultLayout() {
  return (
    <>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </>
  )
}
