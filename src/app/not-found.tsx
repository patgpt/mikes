"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
            <div className="text-center">
                <motion.h1
                    className="text-9xl font-bold text-primary mb-4 font-display"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    404
                </motion.h1>
                <motion.p
                    className="text-xl text-base-content opacity-70 mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Oops! The page you&apos;re looking for doesn&apos;t exist.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="btn btn-primary btn-lg"
                    >
                        Return Home
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}