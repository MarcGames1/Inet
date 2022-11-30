
import React from 'react'
import { tw } from 'twind'
import Page from '@/components/page'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader/SectionHeader'
import { typography, colors } from '@/../js/utils'
import Button from '@/components/button'


const Api = process.env.NEXT_PUBLIC_API;
const Blog = ({articles}) => {
  
  return (
    <>
      <Page>
        <section>
          <SectionHeader titlu={'BLOG IwebAgency'} />
          <div className={tw('container m-10')}>
            <div className={tw('grid gap-10 grid-cols-3')}>
              {articles?.map((article, idx) => {
                return (
                  <article className={tw('bg-indigo-50 flex justify-evenly items-center	flex-col gap-4 p-5')} key={idx}>
                    <Link href={`/blog/${article.slug}`}>
                      <a>
                        <div className={tw('flex flex-col items-center justify-items-around')}>
                          <Image
                            src={path.join(Api, ...article.image)}
                            width={150}
                            height={150}
                            alt={article.title}
                            layout="intrinsic"
                            loading="lazy"
                          />
                        </div>
                      </a>
                    </Link>
                    <h3 className={typography.heading.default}>{article.title}</h3>
                    <p>{article?.excerpt}</p>
                    <ul>
                      {article.categories.map((cat) => {
                        return (
                          <li className={tw('text-gray-400')} key={cat._id}>
                            # {cat.name}
                          </li>
                        );
                      })}
                    </ul>
                    <span className={tw('text-gray-400')}>
                      articol revizuit de{' '}
                      <Link href={`/echipa/${article.author.slug}`}>
                        <a>
                          {article.author.nume} {article.author.prenume}
                        </a>
                      </Link>
                    </span>
                    <Link href={`/blog/${article.slug}`}>
                      <a>
                        <Button primary>Citeste mai mult</Button>
                      </a>
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </Page>

      <pre>{JSON.stringify(articles, null, 4)}</pre>
    </>
  );
    
}

export default Blog




export async function getStaticProps(context) {
  
  const res = await fetch(`${process.env.API}posts`);
 const data = await res.json()

    return {
    props: {articles: data}, // will be passed to the page component as props
    revalidate: 86400,
  };
}