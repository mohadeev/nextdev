import Layouts from "@/components/Layout";
import Link from "next/link";
import styles from '@/styles/Contact.module.css'
import Layout from '@/components/Layout';

export default function NotFound() {
    return (
        <Layout title="Page Not Found">
            <h1>404 Page Not Found</h1>
            <Link href="/">Home</Link>
        </Layout>
    );
}