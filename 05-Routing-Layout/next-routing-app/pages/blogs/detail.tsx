import {useRouter} from 'next/router'


const BlogDetail = () => {
    const router = useRouter();

    //http://localhost:3000/blogs/detail?id=123&name=sk
    //Querystring 방식식
    const id = router.query.id;
    const name = router.query.name;

    return (
        <div className="h-[500px]">
            Blog Detail Page:{id}={name}
        </div>
    );
}

export default BlogDetail;