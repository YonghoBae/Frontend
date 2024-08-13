import { useRouter } from 'next/router';

const Product = () => {
  const router = useRouter();

  console.log('URL주소에서 추출한 게시글 고유번호:', router.query.id);

  return <div className="h-[500px]">Enter</div>;
};

export default Product;
