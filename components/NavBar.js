import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <nav>
            <Link href="/">
                <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>Home</a>
            </Link>
            <Link href="/about">
                <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a>
            </Link>
            {/*
                - Link
                    페이지 이동시 Single Page App 경험을 제공하려면 Link 컴포넌트를 이용한다
                    a 태그는 className 이나 style 을 이용할 때 사용하고 href는 사용하지않는다.
                    Link를 이용하여 href에 경로값을 준다
                    ex) <a hrdf="/about">About</a>
                            ↓↓↓↓↓
                        import Link from 'next/link'
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                - useRouter
                    router 객체 내부에 접근하려면 useRouter() 훅을 사용한다.
                    useRouter는 ReactHook이다. 즉 클래스와 사용할 수 없다.
                    ex) const router = useRouter()
            */}
        </nav>
    )
}