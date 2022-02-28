import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();

    return (
        <nav>
            <Link href="/">
                <a
                    className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}`}
                >Home</a>
            </Link>
            <Link href="/about">
                <a className={[
                    styles.link,
                    router.pathname === "/about" ? styles.active : "",
                ].join(" ")}
                >About</a>
            </Link>
            {/*
                - CSS Module
                파일명.module.css 생성
                ex) import styles from "./NavBar.module.css"
                    className={`${styles.link} ${router.pathname === "/" ? style.active : "" }`}
                                                OR
                    className={[styles.link, router.pathname === "/about" ? styles.active : "", ].join(" ")}
            */}
        </nav >
    )
}