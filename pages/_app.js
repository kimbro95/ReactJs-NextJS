import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
            {/*
            - Global Styles
            <styles jsx global></global>
            jsx 뒤에 global prpp를 추가해주면 다른 컴포넌트에서도 사용이 가능하다.

            - Custom App
            Next.js는 APP 컴포넌트를 사용하여 page를 초기화한다.
            이를 재정의하지 않고 페이지 초기화를 제어할 수 있다.
            1. 페이지 변경 간 레이아웃 유지
            2. 페이지 탐색 시 state 유지
            3. componentDidCatch를 사용한 Custom 에러 처리
            4. 페이지에 추가 데이터 삽입
            5. Global CSS 추가             
            - module.css를 사용해야 import할 수 있지만 _app.js에서는 ./styles/globals.css를 통해 module를 붙이지 않아도 사용가능하다.
    
            기본 App 정의 ./pages/_app.js 파일 생성
            export default function MyApp({ Component, pageProps }){
                return <Component {...pageProps}/>
            }
        */}
        </>
    )
}