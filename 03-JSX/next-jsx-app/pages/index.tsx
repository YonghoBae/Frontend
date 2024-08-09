import Head from 'next/head';

//Image 컴포넌트 참조
//Nextjs Image컴포넌트를 이용하면 자동으로 가로세로 비율을 유지하며 이미지를 최적화하여 유지
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

import React, { Fragment } from 'react';

const inter = Inter({ subsets: ['latin'] });

function Hello(isLogin: boolean): JSX.Element {
    if (isLogin) {
        return <b>로그인되었습니다.</b>;
    } else {
        return <b>로그인이 필요합니다.</b>;
    }
}

export default function Home() {
    //프로그래밍 로직 구현 영역
    const userName: string = 'wolyong';
    const isLogin: boolean = true;
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div className={styles.description}>
                    <p>
                        {/* 안녕하세요. {userName}님&nbsp; */}
                        {/* {isLogin ? '{userName}님':'로그인이 필요합니다'} */}

                        {/* {isLogin ? (
                            <b>{userName}님으로 로그인했습니다.</b>
                        ) : (
                            <b>로그인해주세요</b>
                        )} */}
                        {Hello(isLogin)}
                        <code className={styles.code}>pages/index.tsx</code>
                    </p>
                    <div>
                        <a
                            href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                            target='_blank'
                            rel='noopener noreferrer'>
                            By{' '}
                            <Image
                                src='/vercel.svg'
                                alt='Vercel Logo'
                                className={styles.vercelLogo}
                                width={100}
                                height={24}
                                priority
                            />
                            {/* <img
                                src='/vercel.svg'
                                alt='Vercel Logo'
                                className={styles.vercelLogo}
                            /> */}
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <Image
                        className={styles.logo}
                        src='/next.svg'
                        alt='Next.js Logo'
                        width={180}
                        height={37}
                        priority
                    />
                </div>

                <div className={styles.grid}>
                    <a
                        href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={styles.card}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <h2>
                            Docs <span>-&gt;</span>
                        </h2>
                        <p>
                            Find in-depth information about Next.js features
                            and&nbsp;API.
                        </p>
                    </a>

                    <a
                        href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={styles.card}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <h2>
                            Learn <span>-&gt;</span>
                        </h2>
                        <p>
                            Learn about Next.js in an interactive course
                            with&nbsp;quizzes!
                        </p>
                    </a>

                    <a
                        href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={styles.card}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <h2>
                            Templates <span>-&gt;</span>
                        </h2>
                        <p>
                            Discover and deploy boilerplate example
                            Next.js&nbsp;projects.
                        </p>
                    </a>

                    <a
                        href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
                        className={styles.card}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <h2>
                            Deploy <span>-&gt;</span>
                        </h2>
                        <p>
                            Instantly deploy your Next.js site to a shareable
                            URL with&nbsp;Vercel.
                        </p>
                    </a>
                </div>
            </main>
        </>
    );
}
