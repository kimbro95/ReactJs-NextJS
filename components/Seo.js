import Head from "next/head";

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
            {/*
            - Head ( next / head )
            페이지 head에 엘리먼트를 추가하지 위한 내장컴포넌트
            head에 태그가 중복되지 않도록 하려면 태그가 랜더링되도록하는 key 속성을 줘야한다.
            ex) <Head>
                    <title> My Page </title>
                    <meta property="og:title" content="My Page" key="title" />
                </Head>
                <Head>
                    <meta property="og:title" content="My New Page" key="title" />
                </Head>
            위에 경우 두번째 property="og:title" 만 랜더링된다.
            중복 키 속성이 있는 meta 태그는 자동으로 처리된다.
            key 속성을 지정해주지 않으면 meta og:title이 중복해서 2번 랜더링도니다.
            title은 지정하지 않아도 2번 랜더링되지않음
            */}
        </Head>
    )
}