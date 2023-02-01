import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Project from './Project';
import { Genos } from "@next/font/google";




const genos = Genos({ subsets: ["latin"], display: "swap" });



export default function Layout({ children }) {
    return (
     <div className={genos.className}>
     <Header className={genos.className}/>
     {children}
<Project />
<Footer className={genos.className} /></div>
    );
};

