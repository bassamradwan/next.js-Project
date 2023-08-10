import Banner from "@/components/Banners/GeneralBanner";
import Navbar from "@/components/Navbar";
import BlogDetailComponent from "@/components/BlogDetail";

const BlogPageDetail = () => {
  return (
    <>
      <Navbar />
      <Banner title="our blog post" subtitle="Home / Blog / Blog Detail" />
      <BlogDetailComponent />
    </>
  );
};
export default BlogPageDetail;
export async function getServerSideProps(context: { params: { id: any }; locale: any }) {
  const id = context.params?.id;
  console.log("id", id);
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`@/messages/${context.locale}.json`)).default,
      id,
    },
  };
}
