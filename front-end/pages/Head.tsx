import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

interface IProps {
    meta: any;
};


const Head = ({ meta }: IProps) => {
    const route = useRouter();


    return (
        <NextHead>

        </NextHead>
    )
}

export default Head;
