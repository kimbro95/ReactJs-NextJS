import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
            </Link>
            <style jsx>{`
                a{
                    text-decoration : none;
                }
                .active{
                    color: red;
                }
            `}</style>
            {/*
                - styles JSX
                Next.js 사용하면 JavaScript 파일에서 CSS 파일을 가져올 수 있습니다.
                Next.js가 import 개념을 JS 이상으로 확장했기 떄문에 가능하다.
                ex) <style jsx></style>
                스타일 태그에 jsx를 붙여주면된다.
                다른 부모 컴포넌트에 영향을 주지않고 현재 컴포넌트에만 사용되게해준다.
            */}
        </nav >
    )
}