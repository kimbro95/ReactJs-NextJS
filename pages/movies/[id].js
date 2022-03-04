import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
    /*
        https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
        -Dynamic Routes
        Next.js에서는 page에 대괄호([parom])를 추가하여 Dynamic Route를 생성할 수 있다.
        ex) /movies/123 경로일 경우 pages/movies/[id].js 
        /movies/:id => /movies/[id].js

        - Catch all routes
        대괄호 안에 (...) ㅇ,ㄹ 추가하여 모든 경로를 포착하도록 Dynamic Routes를 확장할 수 있다.
    */
}