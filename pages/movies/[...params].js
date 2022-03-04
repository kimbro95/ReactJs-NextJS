import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
    const router = useRouter();
    // useRouter를 이용한 router 값은 CSR를 사용할 때 사용가능하다.

    const [title, id] = params || [];
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )
}

export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params,
        },
    };
}
/*
    -getServerSideProps (Context Parameter)
    params: 이 페이지에서 dynamic route(동적 경로)를 사용하는 경우 params에 route parameter가 포함된다.
 */