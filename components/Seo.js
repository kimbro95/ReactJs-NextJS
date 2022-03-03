import Head from "next/head";

export default function Seo({ title }) {
    return (
        <Head>
            <title>{title} | Next Movies</title>
            {/*
        - Hear ( next / head )
        ������ head�� ������Ʈ�� �߰����� ���� ����������Ʈ
        head�� �±װ� �ߺ����� �ʵ��� �Ϸ��� �±װ� �������ǵ����ϴ� key �Ӽ��� ����Ѵ�.
        ex) <Head>
                <title> My Page </title>
                <meta property="og:title" content="My Page" key="title" />
            </Head>
            <Head>
                <meta property="og:title" content="My New Page" key="title" />
            </Head>
        ���� ��� �ι�° property="og:title" �� �������ȴ�.
        �ߺ� Ű �Ӽ��� �ִ� meta �±״� �ڵ����� ó���ȴ�.
        key �Ӽ��� ���������� ������ meta og:title�� �ߺ��ؼ� 2�� ���������ϴ�.
        title�� �������� �ʾƵ� 2�� ��������������
            
        */}


        </Head>
    )
}