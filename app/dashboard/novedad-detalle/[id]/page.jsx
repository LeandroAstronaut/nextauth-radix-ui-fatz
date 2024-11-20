import dynamic from "next/dynamic";
import NovedadDetalle from "@/components/dashboard/novedad-detalle";
{/*import BreadCrumb2 from "@/components/dashboard/novedad-detalle/BreadCrumb2";
import Comments from "@/components/dashboard/novedad-detalle/Comments";
import Pagination from "@/components/dashboard/novedad-detalle/Pagination";
import Ratings from "@/components/dashboard/novedad-detalle/Ratings";
import RelatedPost from "@/components/dashboard/novedad-detalle/RelatedPost";
import ReviewBox from "@/components/dashboard/novedad-detalle/ReviewBox";
import BlogSidebar from "@/components/common/blog/BlogSidebar";
import CopyrightFooter from "@/components/common/footer/CopyrightFooter";
import Footer from "@/components/common/footer/Footer";
import Social from "@/components/common/footer/Social";
import Header from "@/components/common/header/DefaultHeader";
import MobileMenu from "@/components/common/header/MobileMenu";
import PopupSignInUp from "@/components/common/PopupSignInUp";
import blogs from "@/data/blogs";
import Image from "next/image";*/}
import blogs from "@/data/blogs";

export const metadata = {
  title: 'Blog Details || FindHouse - Real Estate React Template',
  description:
    'FindHouse - Real Estate React Template',
}

const BlogDetailsDynamic = ({params}) => {
  
  const id = params.id;
  const blog = blogs.find((item) => item.id == id) ||  blogs[0]


  return (
    <>
      <NovedadDetalle id={id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(BlogDetailsDynamic), {
  ssr: false,
});
