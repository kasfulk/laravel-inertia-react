import React from 'react';
import { Head, Link } from '@inertiajs/inertia-react';
import { HeaderWeb, HeaderSearchProps } from '../Components/Header';
import { Hero } from '../Components/Hero';
import { FeaturesCards } from '../Components/Features';
import { HeroBullets } from '../Components/HeroBullets';
import { Footer } from '@mantine/core';

interface Links {
    link: string;
    label: string;
}

export default function Index() {
    const links: Links[] | HeaderSearchProps = [
        {
            link: '/#home',
            label: 'Home'
        },
        {
            link: '/#profile',
            label: 'Profile'
        },
        {
            link: '/#profile',
            label: 'About'
        },
    ]

    return (
        <>
            <HeaderWeb links={links} />
            <Hero />
            <FeaturesCards />

        </>
    )
} 