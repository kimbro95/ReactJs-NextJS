/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:path",
        destination: "/new/:path",
        permanent: false,
        /*
          Redirects ( URL ����� )
          Redirect�� ����ϸ� ������ request ��θ� �ٸ� destination ��η� Redirect �Ѵ�
          Redirect�� ����Ϸ��� next.config.js���� redirects Ű�� ����ϸ�ȴ�.
          ex) /old/ ��θ� /new/ ��η� �ٲ��ش� �ڿ� :path�� ���ϰ�� �״�� URL�� �����´�.
              :path �ڿ� * �� ���̸� �ڿ� ��� URL�� �����´�.
          soure : ������ request ��� ���� (request �� ���)
          destination : �������Ϸ��� ��� (redirect ���)
          permanent : true �� ��� Ŭ���̾�Ʈ�� �˻������� redirect�� ���������� cache �ϵ��� �����ϴ� 308 status code �� ���
                      false �� ��� cache���� ���� 307 status code ���
        */
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`,
        /*
          Rewrites ( URL ���� X )
          Rewrites�� ����ϸ� ������ request ��θ� �ٸ� destination ��ο� ������ �� �ִ�.
          Rewirtes�� URL ���Ͻ� ������ �ϰ� destination ��θ� mask �Ͽ� ��밡�� ����Ʈ���� ��ġ�� �������� ������ ó�� ���̰� �Ѵ�.
          �ݴ�� redirects�� �� ���̷� reroute�ǰ� URL ���� ������ ǥ���Ѵ�.
          ex) await fetch(`/api/movies`)
          �̷��� �ڵ峻���� /api/movies/ ȣ��� URL�� destination�� ������ ��θ� mask �Ͽ� ȣ�����ش�.
        */
      },
    ];
  },
}

module.exports = nextConfig
