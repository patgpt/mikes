"use client"
import Link from "next/link"
import { BiError } from "react-icons/bi"
import { motion } from "framer-motion"

function ErrorPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="card w-96 bg-base-100 shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="card-body items-center">
                        <motion.div
                            className="text-error mb-4"
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <BiError className="w-16 h-16" />
                        </motion.div>
                        <motion.h2
                            className="card-title text-2xl mb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Oops!
                        </motion.h2>
                        <motion.p
                            className="text-base-content/70 mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            Something went wrong.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link
                                className="btn btn-primary"
                                href="/"
                            >
                                Return Home
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ErrorPage