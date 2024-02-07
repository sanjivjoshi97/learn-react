// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MyComp from './qcomps/firstcomp'
import Bio from "@/pages/qcomps/bios";
import TodoList from "@/pages/qcomps/todos";
import Profile from "@/pages/qcomps/profile_mistake";
import AvatarProfile from "@/pages/components/profile_props";
import Holder from "@/pages/components/square";
import PackingList from "@/pages/components/props_item";

export default function Home() {
    return (
        <div className={styles.main}>
            <Profile/>
            <MyComp/>
            <Bio/>
            <TodoList/>
            <AvatarProfile/>
            <Holder/>
            <PackingList/>
        </div>
    )
}
