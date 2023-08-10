import Banner from "@/components/Banners/GeneralBanner";
import Footer from "@/components/Footer";
import AboutBlog from "@/components/AboutBlogs";
import Navbar from "@/components/Navbar";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <Banner title="Blog" subtitle="Home / Blog" $isHome={false} />
      <AboutBlog />
      <Footer />
    </div>
  );
};
export default BlogPage;
export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default,
    },
  };
}
