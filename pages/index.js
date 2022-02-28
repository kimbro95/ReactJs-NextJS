export default function Home() {
  return (
    <div>Hello NextJS</div>
    /*
      page폴더 안에 있는 파일명에 따라 route가 결정된다.
      page/about.js 생성시
          ↓↓↓↓↓
      localhost:3000/about    // O
      localhost:3000/about-us // X
      하지만 예외사항 index.js의 경우에는 앱이 시작하는 파일이다
      index.js => localhost:3000            // O
      index.js => localhost:3000/index.js   // X
    */
  );
}